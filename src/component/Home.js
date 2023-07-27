import { useState, useRef } from "react";
import { CopyBlock, vs2015,dracula } from "react-code-blocks";
import { toast, Flip } from "react-toastify";

// Make Function
const Home = () => {
  const toastId = useRef(null);
  const [commandData,setCommandData] = useState([
    {
      "title":"SSH",
      "mainData":[
        ["ssh ubuntu_server@192.168.0.1", ""],
        ["ssh -i mykey.pem user@mydomain.example", ""],
        ["ssh-copy-id ubuntu_server@192.168.0.1", ""],
      ]
    },
    {
      "title":"System",
      "mainData":[
        ["htop", ""],
        ["sudo apt update", ""],
        ["sudo apt upgrade", ""]
      ]
    },
    {
      "title":"Apache2",
      "mainData":[
        ["sudo apt install apache2",""],
        ["sudo ufw app list",""],
        ["sudo ufw allow 'Apache'",""],
        ["sudo ufw allow 'OpenSSH'",""],
        ["sudo ufw enable",""],
        ["sudo ufw status",""],
        ["systemctl status apache2",""],
        ["sudo systemctl start apache2",""],
        ["sudo systemctl stop apache2",""],
        ["sudo systemctl restart apache2",""],
      ]
    },
    {
      "title":"Nginx",
      "mainData":[
        ["sudo apt install nginx", ""],
        ["sudo ufw app list", ""],
        ["sudo ufw allow 'Nginx FULL'", ""],
        ["sudo ufw allow 'OpenSSH'", ""],
        ["sudo ufw enable", ""],
        ["sudo ufw status", ""],
        ["systemctl status nginx", ""],
        ["sudo systemctl start nginx", ""],
        ["sudo systemctl stop nginx", ""],
        ["sudo systemctl restart nginx", ""],
      ]
    },
    {
      "title":"Mysql",
      "mainData":[
        ["sudo apt install mysql-server", ""],
        ["sudo apt install apache2", ""],
        ["sudo systemctl status mysql", ""],
        ["sudo systemctl status apache2", ""],
        ["sudo apt install php -y", ""],
        ["sudo apt install phpmyadmin -y", ""],
        ["sudo phpenmod mbstring", ""],
        ["sudo systemctl restart apache2", ""],
        ["sudo mysql -u root -p", ""],
        ["sudo ln -s /usr/share/phpmyadmin /var/www/html/phpmyadmin", ""],
        ["sudo systemctl restart nginx", ""],
      ]
    },
    {
      "title":"Setup Project",
      "mainData":[
        ["cd /var/www/html", ""],
        ["sudo mkdir frontend", ""],
        ["sudo chmod 777 frontend", ""],
        ["sudo chmod -R 777 /var/www/html/frontend", ""],
        ["sudo mkdir backend", ""],
        ["sudo chmod 777 backend", ""],
        ["sudo chmod -R 777 /var/www/html/backend", ""],
        ["ssh-keygen", ""],
        ["cat ~/.ssh/id_rsa.pub", ""],
        ["git clone git@github.com:Harshil-Kaneria/xyz.git", ""],
        ["git config --global --add safe.directory '*'", ""],
        ["git init", ""],
        ["git remote add origin git@github.com:Harshil-Kaneria/xyz.git", ""],
        ["git remote add -t \* -f origin git@github.com:Harshil-Kaneria/xyz.git", ""],
        ["git checkout main", ""],
        ["git checkout -f main", ""],
        ["cp .env.local .env", ""],
      ]
    },
    {
      "title":"NVM and Nodejs",
      "mainData":[
        ["sudo apt install nodejs", ""],
        ["sudo apt install npm", ""],
        ["sudo apt install curl", ""],
        [
          "curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash ",
          "",
        ],
        ["source ~/.bashrc", ""],
        ["nvm install 19.8.1", ""],
        ["nvm ls", ""],
        ["nvm use 12.22.7", ""],
        ["node -v", ""],
        ["npm -v", ""],
      ]
    },
    {
      "title":"Knex Migration",
      "mainData":[
        ["npm i knex -g", ""],
        ["knex migrate:latest", ""],
        ["NODE_ENV=staging knex migrate:latest", ""],
        ["knex migrate:latest --env staging", ""],
        ["knex seed:run", ""],
        ["NODE_ENV=staging knex seed:run", ""],
        ["knex seed:run --env staging", ""],
        ["knex seed:run --specific=seed-filename.js", ""],
        ["NODE_ENV=staging knex seed:run --specific=seed-filename.js", ""],
        ["knex seed:run --specific=seed-filename.js --env staging", ""]
      ]
    },
    {
      "title":"PM2",
      "mainData":[
        ["npm install pm2 -g", ""],
        ["pm2 start", ""],
        ["pm2 list", ""],
        ["pm2 logs", ""],
        ["pm2 logs --lines 250", ""],
        ["pm2 save", ""],
        ["pm2 resurrect", ""],
        ["npm install -g serve", ""],
        ["pm2 serve build 3000--spa", ""],
        ["pm2 start server.js", ""],
        ["pm2 start server.js -i max", ""],
        ["pm2 start server.js -i 4", ""],
      ]
    }
  ])

  return (
    <>
      <div className="container">
        <div className="row mt-3 d-flex align-item-center">
          <h3 className="text-secondary text-center shadow p-3 rounded">Ubuntu server guide</h3>
          <blockquote class="blockquote text-end">
            <p class="mb-3 text-secondary">Simplicity meets power: Ubuntu server setup, mastered with ease.</p>
            <footer class="blockquote-footer">Harshil Kaneria</footer>
          </blockquote>
        </div>
        {commandData.map((data,i)=>{
          return (<>
            <hr style={{border:'1px dashed black'}} className="mt-4"/>
            <div className="text-center mb-3">
              <kbd>{data.title}</kbd>
            </div>
            {/* <hr/> */}
            <div className="row shadow p-3 mb-0 pb-0 rounded">
              {data.mainData.map((item, i) => {
            return (
              <div
                className="col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-3"
                key={i}
              >
                <CopyBlock
                  codeBlock={true}
                  text={`${item[0]}`}
                  language="bash"
                  showLineNumbers={false}
                  wrapLongLines={true}
                  theme={dracula}
                  onCopy={() => {
                    toast.dismiss();
                    toastId.current = toast("Command copied !", {
                      transition: Flip,
                    });
                  }}
                />
                <span>{`${item[1] == "" ? "" : item[1]}`}</span>
              </div>
            );
              })}
            </div>
          </>)
        })}

        <blockquote class="blockquote text-center mt-5">
            <hr style={{border:'1px dashed black'}}/>
            <p class="text-secondary mb-0">Wrapping up today's endeavors on a high note!</p>
            <p class="text-secondary">Have a suggestion? Reach out to me at: <a href="mailto:harshilkaneria00@gmail.com">harshilkaneria00@gmail.com</a></p>
        </blockquote>

      </div>
    </>
  );
};

// Export Function For Use in Another File
export default Home;
