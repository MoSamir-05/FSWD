let scene, camera, renderer;
let bike, speed = 0, distance = 0;
let keys = {};
let timer = 60;
let nitroActive = false;
let obstacles = [];
let trafficCars = [];
let aiBikes = [];
let isNight = true;

init();

function init() {

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(
        75, window.innerWidth/window.innerHeight, 0.1, 2000
    );

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    document.body.appendChild(renderer.domElement);

    createLights();
    createCity();
    createBike();
    createTraffic();
    createAI();

    animate();
}