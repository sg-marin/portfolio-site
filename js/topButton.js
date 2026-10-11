const header = document.querySelector("header");
const backToTop = document.getElementById("back-to-top");
const footer = document.querySelector("footer");

window.addEventListener("scroll", function () {
  const headerBottom = header.getBoundingClientRect().bottom;

  const fullH = window.innerHeight;
  const footerT = footer.getBoundingClientRect().top;

  if (headerBottom <= 0 && footerT >= fullH) {
    backToTop.classList.add("top-btn-add");
    backToTop.classList.remove("top-btn-rm");
  } else {
    backToTop.classList.remove("top-btn-add");
    backToTop.classList.add("top-btn-rm");
  }
});
