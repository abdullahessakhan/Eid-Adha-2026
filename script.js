const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const image = new Image();
image.src = "image/eidadha.png";

/* Load only the image at start */
image.onload = function(){

canvas.width = image.width;
canvas.height = image.height;

ctx.drawImage(image,0,0);

}

/* Name appears ONLY after clicking Generate */

function generate(){

ctx.clearRect(0,0,canvas.width,canvas.height);
ctx.drawImage(image,0,0);

let name = document.getElementById("nameInput").value;

/* Large font size */
ctx.font = "90px Arial";

ctx.fillStyle = "#8b5e3c";

ctx.textAlign = "center";

/* Position between text and mosque */
ctx.fillText(name, canvas.width/2, canvas.height * 0.63);


/* Hide input + generate button */
document.getElementById("nameInput").style.display = "none";
document.getElementById("generateBtn").style.display = "none";

}
function downloadImage(){

const link = document.createElement("a");

link.download = "image/eidadha.png";
link.href = canvas.toDataURL();

link.click();

}