const { createCanvas, Image  } = require("canvas");
const fs = require("fs");

function addText(context, fSize,text,x,y) {
    context.font = fSize+"px Arial";
    context.fillText(text, x, y);
}


const WIDTH = 360;
const HEIGHT = 600;

const canvas = createCanvas(WIDTH, HEIGHT);
const ctx = canvas.getContext("2d");

ctx.fillStyle = "#FFFFFF";
ctx.fillRect(0, 0, WIDTH, HEIGHT);

const img = new Image()
img.onload = () => ctx.drawImage(img, 30,10,300,70)
img.onerror = err => { throw err }
img.src = './Desert.jpg'

ctx.fillStyle = "#000000";

addText(ctx, 18, "Hello World 1", 90, 200);
addText(ctx, 19, "Hello World 2", 90, 220);

const buffer = canvas.toBuffer("image/jpeg");
fs.writeFileSync("test.jpg", buffer);
