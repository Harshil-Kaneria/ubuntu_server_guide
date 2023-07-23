import { useState, useRef } from "react";
import {
  UniqueCharOTP,
  UniqueNumber,
  UniqueNumberId,
  UniqueOTP,
  UniqueString,
  UniqueStringId,
  HEXColor,
  uuid,
} from "unique-string-generator";
import { CopyBlock,vs2015 } from "react-code-blocks";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { toast, Flip } from "react-toastify";
import { useEffect } from "react";

// Make Function
const Home = () => {
  const toastId = useRef(null);
  
  const [mainData, setMainData] = useState([])
  const updateValue = () => {
    setMainData([
      ["UniqueString()", UniqueString()],
      ["UniqueNumber()", UniqueNumber()],
      ["UniqueStringId()", UniqueStringId()],
      ["UniqueNumberId()", UniqueNumberId()],
      ["UniqueOTP()", UniqueOTP()],
      ["UniqueOTP(4)", UniqueOTP(4)],
      ["UniqueCharOTP()", UniqueCharOTP()],
      ["UniqueCharOTP(4)", UniqueCharOTP(4)],
      ["HEXColor()", HEXColor()],
      ["HEXColor(true)", HEXColor(true)],
      ["uuid.v4()", uuid.v4()],
      ["uuid.validate(uuid.v4())", uuid.validate(uuid.v4())],
    ]);
  };

  useEffect(() => {
    updateValue();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row mt-3 d-flex align-item-center">
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 text-left">
              <CountdownCircleTimer
                size={50}
                strokeWidth={5}
                isPlaying
                duration={10}
                colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
                colorsTime={[7, 5, 2, 0]}
                onComplete={() => {
                  updateValue();
                  return { shouldRepeat: true };
                }}
              >
                {({ remainingTime }) => remainingTime}
              </CountdownCircleTimer>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 d-flex align-items-center justify-content-center">
            <h3 className="text-secondary text-center">
              Unique-String-Generator
            </h3>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 d-flex justify-content-end align-items-center">
            <button
              className="btn btn-sm btn-outline-success"
              onClick={() => {
                updateValue();
              }}
            >
              Refresh Values
            </button>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
            <p className="font-weight-bold text-secondary">Step :- 1</p>
            <CopyBlock
              codeBlock={true}
              text={`npm install unique-string-generator`}
              language="bash"
              showLineNumbers={false}
              theme={vs2015}
              onCopy={() => {
                toast.dismiss();
                toastId.current = toast("Code copied !", { transition: Flip });
              }}
            />
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
            <p className="font-weight-bold text-secondary">Step :- 2</p>
            <CopyBlock
              codeBlock={false}
              text={`import { UniqueString,UniqueNumber,UniqueStringId,UniqueNumberId,UniqueOTP,UniqueCharOTP,HEXColor,uuid } from 'unique-string-generator';`}
              language="javascript"
              showLineNumbers={false}
              theme={vs2015}
              onCopy={() => {
                toast.dismiss();
                toastId.current = toast("Code copied !", { transition: Flip });
              }}
              style={{ wordWrap: "break-word" }}
            />
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
            <p className="font-weight-bold text-secondary">OR</p>
            <CopyBlock
              codeBlock={false}
              text={`const { UniqueString,UniqueNumber,UniqueStringId,UniqueNumberId,UniqueOTP,UniqueCharOTP,HEXColor,uuid } = require('unique-string-generator')`}
              language="javascript"
              showLineNumbers={false}
              theme={vs2015}
              onCopy={() => {
                toast.dismiss();
                toastId.current = toast("Code copied !", { transition: Flip });
              }}
            />
          </div>
        </div>
        <hr />
        <div className="row">
          {mainData.map((item, i) => {
            return (
              <div
                className="col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-3"
                key={i}
              >
                <CopyBlock
                  codeBlock={true}
                  text={`${item[0]}`}
                  language="javascript"
                  showLineNumbers={false}
                  theme={vs2015}
                  onCopy={() => {
                    toast.dismiss();
                    toastId.current = toast("Code copied !", {
                      transition: Flip,
                    });
                  }}
                />
                <span>{`${item[1]}`}</span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

// Export Function For Use in Another File
export default Home;
