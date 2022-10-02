import logo from './logo.svg';
import styles from './App.module.css';
import blacksheep from './assets/blacksheep.png';
import solidjs from './assets/logo.svg';

function Header() {
  return (
    <div class={styles.header}>
      <img class={styles.pfp} src="https://github.com/Middledot.png" width="50" height="50" alt="" />
      <div class={styles["nav-bar"]}>
        <ul>
          <li>
            <a href="https://discord.com/users/719980255942541362">
              <i class={"fa-brands fa-discord"}></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/Middledot">
              <i class={"fa-brands fa-github"}></i>
            </a>
          </li>
          <li>
            <a href="https://g.dev/skyve">
              <i class={"fa-brands fa-google"}></i>
            </a>
          </li>
          <li>
            <a href="https://stackoverflow.com/users/14813579">
              <i class={"fa-brands fa-stack-overflow"}></i>
            </a>
          </li>
          <li>
            <a href="mailto:middledot.productions@gmail.com">
              <i className={"fa-solid fa-envelope"}></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}


function ContentWrap(props) {
  return (
    <div class={styles.content}>
      {props.children}
    </div>
  )
}


function Projects(props) {
  return (
    <div class={styles.section}>
      <h1>Cool Stuff</h1>
      <div class={styles.grid}>  {/* style={`grid-template-columns: ${Math.min(3, props.children.len())}`}>*/}
        {props.children}
      </div>
    </div>
  )
}


function ProjQwire() {
  return (
    <div class={`${styles["grid-child"]} ${styles["qwire"]}`}>
      <div class={styles["grid-content"]}>
        <div class={styles["grid-text"]}>
          <div class={styles["grid-notes"]}>
            <h2>Qwire</h2>
            <p>Qwire (pronounced Q-Wire) is a multipurpose bot for server and personal utilities.</p>
            <p>It is powered by pycord and is currently in the works.</p>
          </div>
        </div>
        <div class={styles.links}>
          <a href="https://qwire.xyz" class={styles.btn}>Website</a>
        </div>
      </div>
    </div>
  )
}


function ProjPyc() {
  return (
    <div class={`${styles["grid-child"]} ${styles["pycord"]}`}>
      <div class={styles["grid-content"]}>
        <div class={styles["grid-text"]}>
          <div class={styles["grid-notes"]}>
            <h2>Pycord</h2>
            <p>Pycord is a Discord API Wrapper, forked from <a href="https://github.com/Rapptz/discord.py">discord.py</a>, that has majority coverage of the API's features and is continually maintained.</p>
          </div>
        </div>
        <div class={styles.links}>
          <a href="https://github.com/Pycord-Development/pycord" class={styles.btn}>GitHub</a>
          <a href="https://pycord.dev/" class={styles.btn}>Website</a>
        </div>
      </div>
    </div>
  )
}


function ProjShazam() {
  return (
    <div class={`${styles["grid-child"]} ${styles["shazam"]}`}>
      <div class={styles["grid-content"]}>
        <div class={styles["grid-text"]}>
          <div class={styles["grid-notes"]}>
            <h2>shazam.py</h2>
            <p>Shazam.py is a python/rust library based off of <a href="https://github.com/marin-m/SongRec">SongRec</a> to recognize songs from audio files through Shazam.</p>
          </div>
        </div>
        <div class={styles.links}>
          <a href="https://github.com/Middledot/shazam.py" class={styles.btn}>GitHub</a>
        </div>
      </div>
    </div>
  )
}


function ProjSite() {
  return (
    <div class={`${styles["grid-child"]} ${styles["site"]}`}>
      <div class={styles["grid-content"]}>
        <div class={styles["grid-text"]}>
          <div class={styles["grid-notes"]}>
            <h2>This Site</h2>
            <p>Made with Solid.js</p>
          </div>
        </div>
        <div class={styles.links}>
          <a href="https://github.com/Middledot/middledot.github.io" class={styles.btn}>GitHub</a>
        </div>
      </div>
    </div>
  )
}


function ProjMathParser() {
  return (
    <div class={`${styles["grid-child"]} ${styles["math-parser"]}`}>
      <div class={styles["grid-content"]}>
        <div class={styles["grid-text"]}>
          <div class={styles["grid-notes"]}>
            <h2>math_parser</h2>
            <p>A text math parser</p>
          </div>
        </div>
        <div class={styles.links}>
          <a href="https://github.com/Middledot/math_parser" class={styles.btn}>GitHub</a>
        </div>
      </div>
    </div>
  )
}


function TheAboutMe() {
  return (
    <div class={styles.section} id="about-me">
      <h1>Hello</h1>
      <div class="inner">
        <p>I'm Middledot, and I make code. I'm mostly fluent in python while learning HTML and CSS.</p>
      </div>
    </div>
  )
}


function Stack(props) {
  return (
    <div class={styles.section} id="stack">
      <section class={styles["tech-grid"]}>
        {props.children}
      </section>
    </div>
  )
}

function Languages(props) {
  return (
    <div class={styles["tech-container"]}>
      <h1>Languages</h1>
      <ul class={styles["stack-icons"]}>
        {props.children}
      </ul>
    </div>
  )
}


function Technologies(props) {
  return (
    <div class={styles["tech-container"]}>
      <h1>Technologies</h1>
      <ul class={styles["stack-icons"]}>
        {props.children}
      </ul>
    </div>
  )
}

function Tech(props) {
  // const _ = document.getElementById(props.name)
  // const dropdown = _.childNodes[_.childNodes.length-1]

  // const onMouseMove = (event) => {
  //   if (!(window.getComputedStyle(dropdown).display.length === 0)) {
  //     dropdown.style.top = event.pageX
  //     dropdown.style.top = event.pageX
  //   }
  // }

  const blacksheepCase = props.name === "Blacksheep" ? "color: #000" : null

  return (
    <li class={styles["stack-item"]} id={props.name}>
      {props.icon}
      <div class={styles["dropdown-info"]} style={`border-color: ${props.color}`}>
        <div class={styles["dropdown-header"]} style={`background-color: ${props.color}`}>
          <p class={styles["dd-header-title"]} style={blacksheepCase}>{props.name}</p>
          <p class={styles["dd-header-btns"]} style={blacksheepCase}>– □ ✕</p>
        </div>
        <div class={styles["dropdown-content"]}>
          <div style={"text-align: left"}>
            {props.children}
          </div>
        </div>
      </div>
    </li>
  )
}


function App() {
  console.log("ok");
  return (
    <>
      <Header />
      <ContentWrap>
        <TheAboutMe />
        <Projects>
          <ProjQwire />
          <ProjPyc />
          <ProjShazam />
          <ProjSite />
          <ProjMathParser />
        </Projects>
        <Stack>
          <Languages>
            <li class={styles["stack-item"]}><i class="devicon-python-plain"></i></li>
            <li class={styles["stack-item"]}><i class="devicon-html5-plain"></i></li>
            <li class={styles["stack-item"]}><i class="devicon-css3-plain"></i></li>
            <li class={styles["stack-item"]}><i class="devicon-javascript-plain"></i></li>
          </Languages>
          <Technologies>
            <Tech name="PostgreSQL" icon={<i class="devicon-postgresql-plain"></i>} color="#336791">
              SQL Relational Database I'm using for making <a href="#works">Qwire</a>
            </Tech>
            <Tech name="Blacksheep" icon={<img src={blacksheep} height="90" width="100" />} color="#fff">
              An ASGI web framework in python
            </Tech>
            <Tech name="Git" icon={<i class="devicon-git-plain"></i>} color="#f44d27">
              No introduction needed <span><img src="https://cdn.discordapp.com/emojis/853277767524679740.png?size=44&quality=lossless" width="20" height="20" /></span>
            </Tech>
            <Tech name="React.js" icon={<i class="devicon-react-original"></i>} color="#61dafb">
              Frontend web <s>framework</s> library I'm learning for a future project
            </Tech>
            <Tech name="Solid.js" icon={<img src={solidjs} height="90" width="100" />} color="rgb(68,107,158)">
              Another frontend framework that I'm also learning for something. (This website is written with it)
            </Tech>
            <Tech name="Django" icon={<i class="devicon-django-plain"></i>} color="#0c4b33">
              Web framework for python backend that I used for <a href="https://qwire.xyz">Qwire's Website</a>
            </Tech>
            <Tech name="MongoDB" icon={<i class="devicon-mongodb-plain"></i>} color="#4faa41">
            NoSQL database I used to work with on <a href="#works">Qwire</a>
            </Tech>
          </Technologies>
        </Stack>
      </ContentWrap>
    </>
  );
}

export default App;
