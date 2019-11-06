

$('nav a').on('click', function(e) {
 e.preventDefault();
 var url = this.href;
 $('nav a.current').removeClass('current');
 $(this).addClass('current');
 $('#content').remove();
 $('#section').load(url + '#content');
});


function playAudio() {
    var x = document.getElementById("myAudio");
    x.play();
   document.getElementById("plays").style.visibility="hidden";
   document.getElementById("pauses").style.visibility="visible";
   document.getElementById("music").style.visibility="visible";
}

function pauseAudio() {
    var x = document.getElementById("myAudio");
    x.pause();
   document.getElementById("pauses").style.visibility="hidden";
   document.getElementById("plays").style.visibility="visible";
   document.getElementById("music").style.visibility="hidden";
}
function prevAudio(){
  var x = document.getElementById("myAudio");
  x.pause();
  var y = document.getElementById("myAudio2");
  y.play();
}



var s=0;
var m=0;
var h=0;
var displays=0;
var displaym=0;
var displayh=0;
var interval=null;
function stopWatch(){

  var status ="stopped";
  s++;
  if(s/60 === 1){
    s=0;
    m++;
    if(m/60 === 1){
      m=0;
      h++;
    }
  }
  if(s < 10){
    displays = "0"+ s.toString();
  }
  else{
    displays = s;
  }
  if(m < 10){
    displaym = "0"+m.toString();
  }
  else{
    displaym = m;
  }
  if(h < 10){
    displayh = "0"+h.toString();
  }
  else{
    displayh = h;
  }
  document.getElementById("display").innerHTML=displayh+":"+displaym+":"+displays;
}

function startStop(){
//  window.alert("working");
  if(status==="stopped"){
    interval = window.setInterval(stopWatch,100);
   document.getElementById("start").innerHTML="Stop";
   status="started";
  }
  else{
  window.clearInterval(interval);
   document.getElementById("start").innerHTML="Start";
  status="stopped";
  }
}
function reset(){
  window.clearInterval(interval);
  s=0;
  m=0;
  h=0;
  document.getElementById("display").innerHTML="00:00:00";
  document.getElementById("start").innerHTML="Start";
}
