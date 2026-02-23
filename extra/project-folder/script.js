// ===============================
// Canvas Setup
// ===============================

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// ===============================
// Game Variables
// ===============================

const gravity = 0.5;
const friction = 0.98;

let cameraY = 0;
let maxHeight = 0;

const player = {
    x: 300,
    y: 500,
    radius: 30,
    vx: 0,
    vy: 0
};

const hammer = {
    length: 120,
    angle: 0
};

const obstacles = [
    { x: 200, y: 600, width: 300, height: 40 },
    { x: 600, y: 450, width: 200, height: 40 },
    { x: 300, y: 300, width: 250, height: 40 },
    { x: 700, y: 150, width: 300, height: 40 }
];

// ===============================
// Mouse Control
// ===============================

canvas.addEventListener("mousemove", (e) => {
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    hammer.angle = Math.atan2(
        mouseY - canvas.height / 2,
        mouseX - canvas.width / 2
    );
});

// ===============================
// Restart
// ===============================

document.getElementById("restartBtn").addEventListener("click", () => {
    player.x = 300;
    player.y = 500;
    player.vx = 0;
    player.vy = 0;
    maxHeight = 0;
});

// ===============================
// Collision Detection
// ===============================

function checkCollision(rect) {
    if (
        player.x + player.radius > rect.x &&
        player.x - player.radius < rect.x + rect.width &&
        player.y + player.radius > rect.y &&
        player.y - player.radius < rect.y + rect.height
    ) {
        player.vy = 0;
        player.y = rect.y - player.radius;
    }
}

// ===============================
// Game Update
// ===============================

function update() {

    // Gravity
    player.vy += gravity;

    // Apply velocity
    player.x += player.vx;
    player.y += player.vy;

    // Friction
    player.vx *= friction;

    // Hammer tip position
    const hammerX = player.x + Math.cos(hammer.angle) * hammer.length;
    const hammerY = player.y + Math.sin(hammer.angle) * hammer.length;

    // Hammer pushing physics
    obstacles.forEach(rect => {
        if (
            hammerX > rect.x &&
            hammerX < rect.x + rect.width &&
            hammerY > rect.y &&
            hammerY < rect.y + rect.height
        ) {
            player.vx -= Math.cos(hammer.angle) * 1.5;
            player.vy -= Math.sin(hammer.angle) * 1.5;
        }

        checkCollision(rect);
    });

    // Camera follow
    cameraY = player.y - canvas.height / 2;

    // Height score
    const height = Math.max(0, 500 - player.y);
    if (height > maxHeight) maxHeight = height;

    document.getElementById("score").innerText =
        "Height: " + Math.floor(maxHeight);
}

// ===============================
// Draw
// ===============================

function draw() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.save();
    ctx.translate(0, -cameraY);

    // Obstacles
    ctx.fillStyle = "#444";
    obstacles.forEach(rect => {
        ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
    });

    // Player (Pot)
    ctx.beginPath();
    ctx.fillStyle = "#3498db";
    ctx.arc(player.x, player.y, player.radius, 0, Math.PI * 2);
    ctx.fill();

    // Hammer
    ctx.beginPath();
    ctx.strokeStyle = "#aaa";
    ctx.lineWidth = 6;
    ctx.moveTo(player.x, player.y);
    ctx.lineTo(
        player.x + Math.cos(hammer.angle) * hammer.length,
        player.y + Math.sin(hammer.angle) * hammer.length
    );
    ctx.stroke();

    ctx.restore();
}

// ===============================
// Game Loop
// ===============================

function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

gameLoop();