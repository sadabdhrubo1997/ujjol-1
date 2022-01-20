// Responsive html font size end
function el(selector) {
  return document.querySelector(selector);
}

// code for extra large responsive
function setScreenJsResponsive() {
  let myHtmlElement = el("html");
  const ow = window.outerWidth;
  const rootScreenWidth = 1366;
  const rootFontPercentage = 53.359375;
  //   console.log(ow);
  if (ow >= 1366) {
    let currentFontSize = (rootFontPercentage * ow) / rootScreenWidth;
    myHtmlElement.setAttribute("style", `font-size:${currentFontSize}%`);
  } else {
    myHtmlElement.setAttribute("style", `font-size:${rootFontPercentage}%`);
  }
}

setScreenJsResponsive();

// Responsive html font size

window.addEventListener("resize", () => {
  setScreenJsResponsive();
});
