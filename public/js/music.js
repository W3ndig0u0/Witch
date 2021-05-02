var music = document.getElementById('music');
var btn = document.getElementById('play');

function playPause(song){
  if (song.paused && song.currentTime >= 0 && !song.ended) {
      song.play();
  } else {
      song.pause();
  }
}

function reset(btn, song){
  if(btn.classList.contains('playing')){
      btn.classList.toggle('playing');
}
  song.pause();
  song.currentTime = 0;
}

function progress(btn, song){
  setTimeout(function(){
      var end = song.duration; 
      var current = song.currentTime;
      var percent = current/(end/100);

      if(current==end){
        reset(btn, song);
      }
      btn.style.boxShadow = "inset " + btn.offsetWidth * (percent/100) + "0px 0px 0px rgba(89,94,171,0.2)"
      progress(btn, song);  
  }, 1000);
}

btn.addEventListener('click', function(){ 
  btn.classList.toggle('playing');
  playPause(music);
  progress(btn, music);
});