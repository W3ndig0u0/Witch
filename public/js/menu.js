[document.getElementById("crossButton"), document.getElementById("menu-btn"), document.getElementById("mobile-menu-btn")].forEach(item => {  
  item.addEventListener('click', event => {
    document.querySelector(".menu").classList.toggle("active");
    document.querySelector("main").classList.toggle("active");
    document.querySelector("footer").classList.toggle("active");
    console.log("YEP");
})
})

function changeImg(src) {
  document.getElementById('slider').src = src;
  console.log("img");
  document.getElementById('slider').classList.toggle("change");

}