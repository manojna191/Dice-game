//image1
let randomnum1 = Math.floor(Math.random()*6)+1;
let dicimage1 = "dice" + randomnum1 +".png";
let randomimgsource = "images/" + dicimage1;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomimgsource);

//image2
let randomnum2 = Math.floor(Math.random()*6)+1;
let dicimage2 = "images/dice" + randomnum2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",dicimage2);

if(randomnum1>randomnum2){
  document.querySelector("h1").innerHTML = "Player1 Wins";
}else if(randomnum2>randomnum1){
  document.querySelector("h1").innerHTML = "Player2 Wins";
}else{
  document.querySelector("h1").innerHTML = "Draw";
}
