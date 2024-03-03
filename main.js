import autumn_1 from './autumn_1.jpg';
import urban_1 from './urban_1.jpg';
import vaporwave from './saturn.png';

document.onmousemove = e => {
  for(const card of document.getElementsByClassName("card")) {
    const rect = card.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };
}

const themes = [
  [
    autumn_1,
    "'Josefin Sans', sans-serif",
    "#083d77"
  ],
  [
    urban_1,
    "'Josefin Sans', sans-serif",
    "#083d77"
  ],
  [
    vaporwave,
    "'Josefin Sans', sans-serif",
    "#f4d35e"
  ],
  // [
  //   vaporwave,
  //   "'Josefin Sans', sans-serif",
  //   "#f4d35e"
  // ]
]

let r = document.querySelector(":root");
let theme = themes[Math.floor(themes.length * Math.random())];
// 0 image
r.style.setProperty('--image', `url(${theme[0]})`);
// 1 hero font style
r.style.setProperty('--hero-font', `${theme[1]}`);
// 2 color
r.style.setProperty('--hero-color', `${theme[2]}`);


setTimeout(function() {  // https://stackoverflow.com/questions/27938900/how-to-prevent-a-css-keyframe-animation-from-running-on-page-load
  document.body.classList.remove("preload");
}, 500);

const container = document.querySelector('#hero').querySelector("h1");
const me = document.querySelector('#me');
const starring = document.querySelector('#starring');
const works = starring.getElementsByClassName("work");

const func = function() {
  var scrollTop = window.scrollY;
  const rme = me.getBoundingClientRect()
  const rstarr = starring.getBoundingClientRect()

  // console.log(rme.top, rstarr.top - rme.top)

  if(rme.top < 0) {
    let val = 1-(-(rme.top)/(rstarr.top - rme.top))
    container.style.setProperty("--darkness", `${Math.round(val*100)/100}`)
  } else {
    container.style.setProperty("--darkness", `100`)
  };

  let opacityVal = Math.min(50, (scrollTop / 50));

  container.style.setProperty("--filter", `blur(${opacityVal}px)`)

  for(const work of works) {
    let val = -(work.offsetHeight/4)
    work.style.marginTop = `${val}px`;
  }
}

// https://codepen.io/sotayamashita/pen/DZZZmj
// https://stackoverflow.com/a/38359315/14813579
window.addEventListener('scroll', func);
func()
