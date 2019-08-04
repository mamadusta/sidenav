var closebtn = document.getElementById('closebtn');
var openbtn  = document.getElementById('openbtn');


closebtn.onclick = function() {
  document.getElementById('sidenav').style.width = "0px";
}
openbtn.onclick = function() {
  document.getElementById('sidenav').style.width = "250px";
}
