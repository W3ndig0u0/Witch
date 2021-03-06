var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img");
var captionText = document.getElementById("caption");
var close = document.getElementsByClassName("close")[0];


[document.getElementById("img1"), document.getElementById("img2"), document.getElementById("img3"), document.getElementById("img4"),document.getElementById("img5"), document.getElementById("img6"), document.getElementById("img7"), document.getElementById("img8")].forEach(item => {  
  item.addEventListener('click', event => {
  modal.style.display = "block";
  modalImg.src = item.src;
  captionText.innerHTML = item.alt;
})
})

close.onclick = function() { 
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}