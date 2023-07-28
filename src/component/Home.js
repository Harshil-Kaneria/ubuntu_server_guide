import { useState, useRef } from "react";
import { CopyBlock,
  a11yDark,
  a11yLight,
  anOldHope,
  androidstudio,
  arta,
  atomOneDark,
  atomOneLight,
  codepen,
  dracula,
  far,
  github,
  googlecode,
  hopscotch,
  hybrid,
  irBlack,
  monoBlue,
  monokaiSublime,
  monokai,
  nord,
  obsidian,
  ocean,
  paraisoDark,
  paraisoLight,
  pojoaque,
  purebasic,
  railscast,
  rainbow,
  shadesOfPurple,
  solarizedDark,
  solarizedLight,
  sunburst,
  tomorrowNightBlue,
  tomorrowNightBright,
  tomorrowNightEighties,
  tomorrowNight,
  tomorrow,
  vs2015,
  xt256,
  zenburn } from "react-code-blocks";
import { toast, Flip } from "react-toastify";

// Make Function
const Home = () => {
  const toastId = useRef(null);
  const [currentTheme,setCurrentTheme] = useState(dracula)
  const [currentThemeMode,setCurrentThemeMode] = useState('light')

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
    <div>
      <div className={currentThemeMode=='light'?"container-fluid":"container-fluid bg-dark"}>
        <div className="row d-flex align-item-center">
          <h3 className="text-secondary text-center shadow p-3 rounded">Ubuntu server guide</h3>
          <blockquote className="blockquote text-end">
            <p className="mb-3 text-secondary">Simplicity meets power: Ubuntu server setup, mastered with ease.</p>
            <footer className="blockquote-footer">Harshil Kaneria</footer>
          </blockquote>
        </div>

        <hr style={{border:`1px dashed ${currentThemeMode=='light'?'black':'white'}`}} className="mb-4"/>
        <div className="row justify-content-center">
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 mb-4 mb-xl-0 mb-lg-0 mb-md-0">
            <div className="form-floating">
              <select id="floatingCodeThemeSelect" className={currentThemeMode=='light'?"form-select":"form-select bg-dark text-white"} aria-label=".form-select-sm example" onChange={e => {
                setCurrentTheme(JSON.parse(e.target.value));
              }} defaultValue={JSON.stringify(currentTheme)} value={JSON.stringify(currentTheme)}>
                <option value={JSON.stringify(a11yDark)}>A11y Dark</option>
                <option value={JSON.stringify(a11yLight)}>A11y Light</option>
                <option value={JSON.stringify(anOldHope)}>An Old Hope</option>
                <option value={JSON.stringify(androidstudio)}>Androidstudio</option>
                <option value={JSON.stringify(arta)}>Arta</option>
                <option value={JSON.stringify(atomOneDark)}>Atom One Dark</option>
                <option value={JSON.stringify(atomOneLight)}>Atom One Light</option>
                <option value={JSON.stringify(codepen)}>Codepen</option>
                <option value={JSON.stringify(dracula)}>Dracula</option>
                <option value={JSON.stringify(far)}>Far</option>
                <option value={JSON.stringify(github)}>Github</option>
                <option value={JSON.stringify(googlecode)}>Googlecode</option>
                <option value={JSON.stringify(hopscotch)}>Hopscotch</option>
                <option value={JSON.stringify(hybrid)}>Hybrid</option>
                <option value={JSON.stringify(irBlack)}>Ir Black</option>
                <option value={JSON.stringify(monoBlue)}>Mono Blue</option>
                <option value={JSON.stringify(monokaiSublime)}>Monokai Sublime</option>
                <option value={JSON.stringify(monokai)}>Monokai</option>
                <option value={JSON.stringify(nord)}>Nord</option>
                <option value={JSON.stringify(obsidian)}>Obsidian</option>
                <option value={JSON.stringify(ocean)}>Ocean</option>
                <option value={JSON.stringify(paraisoDark)}>Paraiso Dark</option>
                <option value={JSON.stringify(paraisoLight)}>Paraiso Light</option>
                <option value={JSON.stringify(pojoaque)}>Pojoaque</option>
                <option value={JSON.stringify(purebasic)}>Purebasic</option>
                <option value={JSON.stringify(railscast)}>Railscast</option>
                <option value={JSON.stringify(rainbow)}>Rainbow</option>
                <option value={JSON.stringify(shadesOfPurple)}>Shades Of Purple</option>
                <option value={JSON.stringify(solarizedDark)}>Solarized Dark</option>
                <option value={JSON.stringify(solarizedLight)}>Solarized Light</option>
                <option value={JSON.stringify(sunburst)}>Sunburst</option>
                <option value={JSON.stringify(tomorrowNightBlue)}>Tomorrow Night Blue</option>
                <option value={JSON.stringify(tomorrowNightBright)}>Tomorrow Night Bright</option>
                <option value={JSON.stringify(tomorrowNightEighties)}>Tomorrow Night Eighties</option>
                <option value={JSON.stringify(tomorrowNight)}>Tomorrow Night</option>
                <option value={JSON.stringify(tomorrow)}>Tomorrow</option>
                <option value={JSON.stringify(vs2015)}>Vs2015</option>
                <option value={JSON.stringify(xt256)}>Xt256</option>
                <option value={JSON.stringify(zenburn)}>Zenburn</option>
              </select>
              <label htmlFor="floatingCodeThemeSelect" className={currentThemeMode=='light'?"":"text-white"}>Change a code theme:</label>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
          <div className="form-floating">
            <select id="floatingWebThemeSelect" className={currentThemeMode=='light'?"form-select":"form-select bg-dark text-white"} aria-label=".form-select-sm example" onChange={e=>{setCurrentThemeMode(e.target.value)}} defaultValue={currentThemeMode} value={currentThemeMode}>
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
            <label htmlFor="floatingWebThemeSelect" className={currentThemeMode=='light'?"":"text-white"}>Change a webpage theme:</label>
            </div>
          </div>
        </div>


        {commandData.map((data,index)=>{
          return (<div key={index}>
            <hr style={{border:`1px dashed ${currentThemeMode=='light'?'black':'white'}`}} className="mt-4"/>
            <div className="text-center mb-3">
              <kbd className={currentThemeMode=='light'?"":"bg-white text-dark"}>{data.title}</kbd>
            </div>
            {/* <hr/> */}
            <div className="row shadow p-3 mb-0 pb-0 rounded m-3">
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
                  theme={currentTheme}
                  onCopy={() => {
                    toast.dismiss();
                    toastId.current = toast("Command copied !", {
                      transition: Flip,
                      theme:currentThemeMode,
                    });
                  }}
                />
                <span>{`${item[1] == "" ? "" : item[1]}`}</span>
              </div>
            );
              })}
            </div>
          </div>)
        })}

        <blockquote className="blockquote text-center mt-5 mb-0">
            <hr style={{border:'1px dashed black'}}/>
            <p className="text-secondary mb-0">Wrapping up today's endeavors on a high note!</p>
            <p className="text-secondary">Have a suggestion? Reach out to me at: <a href="mailto:harshilkaneria00@gmail.com">harshilkaneria00@gmail.com</a></p>
        </blockquote>

      </div>
    </div>
  );
};

// Export Function For Use in Another File
export default Home;
