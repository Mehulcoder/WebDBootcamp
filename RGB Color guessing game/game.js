var colors = [
  "rgb(255, 0, 0)",
  "rgb(0, 0, 255)",
  "rgb(255, 255, 0)",
  "rgb(50, 10, 100)",
  "rgb(255, 255, 255)",
  "rgb(255, 0, 255)"

];
// while (colors.length < 6) {
//   do {
//     var color = Math.floor((Math.random() * 1000000) + 1);
//   } while (colors.indexOf(color) >= 0);
//   colors.push("#" + ("000000" + color.toString(16)).slice(-6));
// }
console.log(colors);
var pickedcolor = colors[3];
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
  squares[i].addEventListener("click", displayDate);

  function displayDate() {
    var clickedcolor = this.style.backgroundColor;
    pickedcolor = (pickedcolor);
    if(clickedcolor == pickedcolor){
      alert("You Win!");
    }
    // alert(pickedcolor);
    // alert(clickedcolor);
    document.getElementById("rgb").innerHTML = clickedcolor;
  }

}
