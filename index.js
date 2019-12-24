
const fs = require("fs");
const { createCanvas, Image  } = require("canvas");

const WIDTH = 300;
const HEIGHT = 600;

const canvas = createCanvas(WIDTH, HEIGHT);
const ctx = canvas.getContext("2d");

ctx.fillStyle = "#FFFFFF";
ctx.fillRect(0, 0, WIDTH, HEIGHT);


// From a local file path:
const img = new Image()
img.onload = () => ctx.drawImage(img, 40,10,100,100)
img.onerror = err => { throw err }
img.src = './Desert.jpg'

ctx.fillStyle = "#000000";
ctx.font = "18px Arial";
ctx.fillText("Hello", 90, 140);

// ctx.font = "22px Arial";
// ctx.fillText("Hello", 13, 55);

const buffer = canvas.toBuffer("image/png");
fs.writeFileSync("test.png", buffer);