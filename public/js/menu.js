[document.getElementById("crossButton"), document.getElementById("menu-btn"), document.getElementById("mobile-menu-btn")].forEach(item => {  
  item.addEventListener('click', event => {
    document.querySelector(".menu").classList.toggle("active");
    document.querySelector("main").classList.toggle("active");
    document.querySelector("footer").classList.toggle("active");
    console.log("YEP");
})
})

const nightmode = document.querySelector(".darkmode");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
const currentTheme = localStorage.getItem("theme");

if (currentTheme == "dark") {
  document.body.classList.toggle("dark-theme");
  document.querySelector(".loader").classList.toggle("dark");
} else if (currentTheme == "light") {
  document.body.classList.toggle("light-theme");
  document.querySelector(".loader").classList.toggle("light");
}

nightmode.addEventListener("click", function () {
  if (prefersDarkScheme.matches) {
    document.body.classList.toggle("light-theme");
    var theme = document.body.classList.contains("light-theme")
      ? "light"
      : "dark";
  } else {
    document.body.classList.toggle("dark-theme");
    var theme = document.body.classList.contains("dark-theme")
      ? "dark"
      : "light";
  }
  localStorage.setItem("theme", theme);
  nightmode.classList.toggle("light");
});