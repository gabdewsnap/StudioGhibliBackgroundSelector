document.getElementById('Kiki').onclick = backgroundKiki;
document.getElementById('Totoro').onclick = backgroundTotoro;
document.getElementById('Howl').onclick = backgroundHowl;
document.getElementById('Laputa').onclick = backgroundLaputa;
document.getElementById('Ponyo').onclick = backgroundPonyo;
document.getElementById('Spirited').onclick = backgroundSpirited;
document.querySelector('ul').onclick = styleChange;

let kikiDiv = document.getElementById('kikiDiv')
let totoroDiv = document.getElementById('totoroDiv')
let howlDiv = document.getElementById('howlDiv')
let laputaDiv = document.getElementById('laputaDiv')
let ponyoDiv = document.getElementById('ponyoDiv')
let spiritedDiv = document.getElementById('spiritedDiv')

function styleChange() {
  document.querySelector('body').style.backgroundRepeat = "no-repeat";
  document.querySelector('body').style.backgroundSize = "cover";
  document.querySelector('h1').style.color = "white";
}

function backgroundKiki() {
  document.querySelector('body').style.backgroundImage = "url('assets/kikisDelivery.jpg')";
  kikiDiv.style.display  = 'block';
  totoroDiv.style.display  = 'none';
  howlDiv.style.display  = 'none';
  laputaDiv.style.display  = 'none';
  ponyoDiv.style.display  = 'none';
  spiritedDiv.style.display  = 'none';
}

function backgroundTotoro() {
  document.querySelector('body').style.backgroundImage = "url('assets/totoro.jpg')";
  totoroDiv.style.display  = 'block';
  howlDiv.style.display  = 'none';
  laputaDiv.style.display  = 'none';
  ponyoDiv.style.display  = 'none';
  spiritedDiv.style.display  = 'none';
  kikiDiv.style.display  = 'none';
}

function backgroundHowl() {
  document.querySelector('body').style.backgroundImage = "url('assets/howlsMoving.jpg')";
  howlDiv.style.display  = 'block';
  totoroDiv.style.display  = 'none';
  laputaDiv.style.display  = 'none';
  ponyoDiv.style.display  = 'none';
  spiritedDiv.style.display  = 'none';
  kikiDiv.style.display  = 'none';
}

function backgroundLaputa(){
  document.querySelector('body').style.backgroundImage = "url('assets/castleInTheSky.jpg')";
  laputaDiv.style.display = 'block';
  totoroDiv.style.display  = 'none';
  howlDiv.style.display  = 'none';
  ponyoDiv.style.display  = 'none';
  spiritedDiv.style.display  = 'none';
  kikiDiv.style.display  = 'none';
}

function backgroundPonyo(){
  document.querySelector('body').style.backgroundImage = "url('assets/ponyomain.jpg')";
  ponyoDiv.style.display = 'block';
  totoroDiv.style.display  = 'none';
  howlDiv.style.display  = 'none';
  laputaDiv.style.display  = 'none';
  spiritedDiv.style.display  = 'none';
  kikiDiv.style.display  = 'none';
}

function backgroundSpirited(){
  document.querySelector('body').style.backgroundImage = "url('assets/spiritedAway.jpg')";
  spiritedDiv.style.display  = 'block';
  totoroDiv.style.display  = 'none';
  howlDiv.style.display  = 'none';
  laputaDiv.style.display  = 'none';
  ponyoDiv.style.display  = 'none';
  kikiDiv.style.display  = 'none';
}

