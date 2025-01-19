let planets = document.querySelectorAll('.planet');
let planetSpeeds = {
    mercury: 1.5,
    venus: 3,
    earth: 4,
    mars: 5,
    jupiter: 8,
    saturn: 9,
    uranus: 6,
    neptune: 7
};


function setPlanetSpeeds() {
    planets.forEach(planet => {
        let planetClass = planet.classList[1];
        let orbitDuration = planetSpeeds[planetClass];
        planet.style.animationDuration = `${orbitDuration}s`;
    });
}

setPlanetSpeeds();

let userControls = document.createElement('div');
userControls.style.position = 'absolute';
userControls.style.bottom = '20px';
userControls.style.color = '#fff';
userControls.style.fontSize = '16px';

userControls.innerHTML = `
    <label for="speed-control">Speed Control (1-10):</label>
    <input type="range" id="speed-control" min="1" max="10" value="5">
`;
document.body.appendChild(userControls);

let speedControl = document.getElementById('speed-control');
speedControl.addEventListener('input', (e) => {
    let newSpeed = e.target.value;
    document.querySelector('.solar-system').style.animationDuration = `${60 / newSpeed}s`;
});
