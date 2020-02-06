var colors = [];
while (colors.length < 6) {
    do {
        var color = Math.floor((Math.random()*1000000)+1);
    } while (colors.indexOf(color) >= 0);
    colors.push("#" + ("000000" + color.toString(16)).slice(-6));
}
console.log(colors);

document.getElementById("one").style.backgroundColor = colors[0];
document.getElementById("two").style.backgroundColor = colors[1];
document.getElementById("three").style.backgroundColor = colors[2];
document.getElementById("four").style.backgroundColor = colors[3];
document.getElementById("five").style.backgroundColor = colors[4];
document.getElementById("six").style.backgroundColor = colors[5];
