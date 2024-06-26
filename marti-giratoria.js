// Particles
particlesJS("particles-js", {
	particles: {
		number: { value: 80, density: { enable: true, value_area: 800 } },
		color: { value: "#4a081b" },
		shape: {
			type: "circle",
			stroke: { width: 0, color: "#000000" },
			polygon: { nb_sides: 5 },
			image: { src: "img/github.svg", width: 100, height: 100 },
		},
		opacity: {
			value: 0.5,
			random: false,
			anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
		},
		size: {
			value: 3,
			random: true,
			anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
		},
		line_linked: {
			enable: false,
			distance: 150,
			color: "#ffffff",
			opacity: 0.4,
			width: 1,
		},
		move: {
			enable: true,
			speed: 6,
			direction: "none",
			random: false,
			straight: false,
			out_mode: "out",
			bounce: false,
			attract: { enable: false, rotateX: 600, rotateY: 1200 },
		},
	},
	interactivity: {
		detect_on: "canvas",
		events: {
			onhover: { enable: true, mode: "repulse" },
			onclick: { enable: true, mode: "push" },
			resize: true,
		},
		modes: {
			grab: { distance: 400, line_linked: { opacity: 1 } },
			bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
			repulse: { distance: 200, duration: 0.4 },
			push: { particles_nb: 4 },
			remove: { particles_nb: 2 },
		},
	},
	retina_detect: true,
});
var count_particles, stats, update;

// Girar imagen

const martiImg = document.querySelector('.marti-img');
const leftButton = document.querySelector('.left');
const rightButton = document.querySelector('.right');
const martiFrases = ["A ver, y a donde concho fuisteis ayer?", "Todo muy mal muy mal muy mal", "Y donde concho estan mis galletotas Principe?", "Donde esta papi?", "Donde esta mami?"]

// Variable that stores the amount flips
let n = 0;

leftButton.addEventListener('click', () => {
    martiImg.style.transform += 'rotate(-15deg)';
	const randomIndex = Math.floor(Math.random() * martiFrases.length);
	n++;
	console.log(`Right now n = ${n}`)
	if (n === 5) {
		alert(`Marti Giratoria dice:\n\n${martiFrases[randomIndex]}`);
		n = 0;
		console.log(`N is reainitialized as 0 ==> ${n}`)
	}
})

rightButton.addEventListener('click', () => {
    martiImg.style.transform += 'rotate(15deg)';
	const randomIndex = Math.floor(Math.random() * martiFrases.length);
	n--;
	console.log(`Right now n = ${n}`);
	if (n === -5) {
		alert(`Marti Giratoria dice:\n\n${martiFrases[randomIndex]}`);
		n = 0
		console.log(`N is reainitialized as 0 ==> ${n}`)
	};
})