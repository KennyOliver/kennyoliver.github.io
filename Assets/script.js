function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
function myMobFunction() {
  var x = document.getElementById("myMobnav");
  if (x.className === "mobnav") {
    x.className += " responsive";
  } else {
    x.className = "mobnav";
  }
}