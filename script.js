// Back to top button
const backToTop = select(".back-to-top");
if (backToTop) {
  const toggleBackToTop = () => {
    if (windows.scrollY > 100) {
      backToTop.classList.add("active");
    } else {
      backToTop.classList.remove("active");
    }
  };
  window.addEventListener("load", toggleBackToTop);
  onscroll(document, toggleBackToTop);
}
