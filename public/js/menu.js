[
  document.getElementById("crossButton"),
  document.getElementById("menu-btn"),
  document.getElementById("mobile-menu-btn"),
].forEach((item) => {
  item.addEventListener("click", (event) => {
    document.querySelector(".menu ").style.animation = "menu-animation 1.2s forwards ease-out";
    document.querySelector(".menu").classList.toggle("active");
    document.querySelector("main").classList.toggle("active");
    document.querySelector("footer").classList.toggle("active");
  });
});


function changeImg(src) {
  document.getElementById("slider").src = src;
  document.getElementById("slider").classList.toggle("change");
}
