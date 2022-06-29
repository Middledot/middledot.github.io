const icons = document.getElementsByClassName("icon__item");

const makeIconInteractive = (elm) => {
  var innerDOC = new DOMParser().parseFromString(elm.innerHTML, "text/xml");
  console.log("ok ", innerDOC.getElementsByTagName("i"))
  var iconElms = innerDOC.getElementsByTagName("i")
  console.log(iconElms)
  if (iconElms.length == 0) {
    return 0;
  }
  let tempArr = iconsElms[0].className.split("-")
  let newElm = ""
  if (tempArr[-1] === "plain") {
    tempArr.pop()
  }
  newElm = tempArr.join("-")
  console.log(newElm)

  elm.addEventListener("mouseover", event => {
    elm.innerHTML = "<i class=\"" + newElm + "-plain-wordmark\"></i>"
  });
  
  elm.addEventListener("mouseout", event => {
    elm.innerHTML = "<i class=\"" + newElm + "-plain\"></i>"
  });
}

for (var i = 0; i < icons.length; i++) {
  makeIconInteractive(icons[i])
}
