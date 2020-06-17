const c = document.getElementById("myCanvas");
const ctx = c.getContext("2d");
const CANVAS_WIDTH = c.width;
const CANVAS_THIRD = CANVAS_WIDTH / 3;

start();


function start() {
    drawLines();
    c.addEventListener("click", findClick);
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

function findClick() {
    findClickX();
    findClickY();
    const rect = c.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    console.log("x: " + x + " y: " + y)
}