const c = document.getElementById("myCanvas");
const ctx = c.getContext("2d");
const CANVAS_WIDTH = c.width;
const CANVAS_THIRD = CANVAS_WIDTH / 3;

start();


function start() {
    drawLines();
}

function drawLines() {
    ctx.beginPath();
    ctx.moveTo(CANVAS_THIRD, 0);
    ctx.lineTo(CANVAS_THIRD, CANVAS_WIDTH);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(CANVAS_THIRD * 2, 0);
    ctx.lineTo(CANVAS_THIRD * 2, CANVAS_WIDTH);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, CANVAS_THIRD);
    ctx.lineTo(CANVAS_WIDTH, CANVAS_THIRD);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, CANVAS_THIRD * 2);
    ctx.lineTo(CANVAS_WIDTH, CANVAS_THIRD * 2);
    ctx.stroke();
}