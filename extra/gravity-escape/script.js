// ==========================
// Canvas Setup
// ==========================

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// ==========================
// Game Variables
// ==========================

const gravity = 0.6;
let cameraX = 0;
let distance = 0;
let gameOver = false;

const bike = {
    x: 200,
    y: 300,
    width: 100,
    height: 40,
    vx: 3,
    vy: 0,
    rotation: 0
};

const ground = [];

for (let i = 0; i < 200; i++) {
    ground.push({
        x: i * 200,
        y: 400 + Math.sin(i * 0.5) * 50,
        width: 200,
        height: 200
    });
}

// ==========================
// Controls
// ==========================

const keys = {};

document.addEventListener("keydown", e => {
    keys[e.key] = true;
});

document.addEventListener("keyup", e => {
    keys[e.key] = false;
});

// ==========================
// Restart
// ==========================

document.getElementById("restartBtn").addEventListener("click", () => {
    bike.x = 200;
    bike.y = 300;
    bike.vx = 3;
    bike.vy = 0;
    bike.rotation = 0;
    distance = 0;
    gameOver = false;
});

// ==========================
// Update
// ==========================

function update() {

    if (gameOver) return;

    // Controls
    if (keys["ArrowUp"]) bike.vx += 0.1;
    if (keys["ArrowDown"]) bike.vx *= 0.98;
    if (keys["ArrowLeft"]) bike.rotation -= 0.05;
    if (keys["ArrowRight"]) bike.rotation += 0.05;

    // Gravity
    bike.vy += gravity;

    bike.x += bike.vx;
    bike.y += bike.vy;

    // Ground collision
    ground.forEach(g => {
        if (
            bike.x + bike.width > g.x &&
            bike.x < g.x + g.width &&
            bike.y + bike.height > g.y
        ) {
            bike.y = g.y - bike.height;
            bike.vy = 0;
        }
    });

    // Camera follow
    cameraX = bike.x - 200;

    // Distance score
    distance = Math.floor(bike.x / 10);
    document.getElementById("score").innerText =
        "Distance: " + distance;

    // Flip detection
    if (Math.abs(bike.rotation) > Math.PI / 2) {
        gameOver = true;
    }
}

// ==========================
// Draw
// ==========================

function draw() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.save();
    ctx.translate(-cameraX, 0);

    // Ground
    ctx.fillStyle = "#444";
    ground.forEach(g => {
        ctx.fillRect(g.x, g.y, g.width, g.height);
    });

    // Bike
    ctx.save();
    ctx.translate(bike.x + bike.width / 2, bike.y + bike.height / 2);
    ctx.rotate(bike.rotation);

    ctx.fillStyle = "#e74c3c";
    ctx.fillRect(
        -bike.width / 2,
        -bike.height / 2,
        bike.width,
        bike.height
    );

    ctx.restore();

    ctx.restore();

    if (gameOver) {
        ctx.fillStyle = "white";
        ctx.font = "40px Arial";
        ctx.fillText("GAME OVER", canvas.width / 2 - 120, 200);
    }
}

// ==========================
// Game Loop
// ==========================

function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

gameLoop();