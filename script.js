function CC(){
    document.body.style.backgroundColor=
    'rgb(' + Math.round(Math.random() * 256) +
    ',' +  Math.round(Math.random() * 254) +
    ',' + Math.round(Math.random() * 255) + ')';
}
var audio=document.getElememtById("AuMu");
function bell() {
  audio.play;
}
function belly() {
  CC();
  bell();
}