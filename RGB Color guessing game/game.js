var colors = [
  "rgb(255, 0, 0)",
  "rgb(0, 0, 255)",
  "rgb(255, 255, 0)",
  "rgb(50, 10, 100)",
  "rgb(255, 255, 255)",
  "rgb(255, 0, 255)"
];
function randomColor(){
  var a = Math.floor(Math.random()*256);
  var b = Math.floor(Math.random()*256);
  var c = Math.floor(Math.random()*256);

  return ("rgb("+a+", "+b+", "+c+")");
}
for (var i = 0; i < 6; i++) {
  colors[i] = randomColor();
}
console.log(colors);

//Adding pickedcolor randomly
var index = Math.floor(Math.random()*(6));
var pickedcolor = colors[index];
var star = document.getElementById('rgb');
star.textContent = pickedcolor;
var squares = document.querySelectorAll(".square");

for (var i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];
}

document.getElementById("one").style.backgroundColor = colors[0];
document.getElementById("two").style.backgroundColor = colors[1];
document.getElementById("three").style.backgroundColor = colors[2];
document.getElementById("four").style.backgroundColor = colors[3];
document.getElementById("five").style.backgroundColor = colors[4];
document.getElementById("six").style.backgroundColor = colors[5];


for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", func);

  function func() {
    var clickedcolor = this.style.backgroundColor;
    console.log(clickedcolor);
    pickedcolor = (pickedcolor);
    if(clickedcolor == pickedcolor){
      document.getElementById("try").innerHTML = "CORRECT!!";
      document.getElementById("try").style.backgroundColor = "";

      document.getElementsByTagName('h1')[0].style.backgroundColor=pickedcolor;

      for (var j = 0; j < squares.length; j++) {
        squares[j].style.backgroundColor = pickedcolor;
      }

    var check = document.getElementsByTagName("button")[0];
    console.log(check);
    check.textContent = "PLAY AGAIN";

    }else{
      var text = document.getElementById("try");
      text.innerHTML = "TRY AGAIN";
      this.style.backgroundColor = "#232323";
      
      text.style.backgroundColor = "white";
    }

    // document.getElementById("rgb").innerHTML = clickedcolor;
  }

}
