// Function to reveal sections on scroll
function reveal() {
    const sections = document.querySelectorAll(".section");
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight - 100) {
            section.classList.add("visible");
        } else {
            section.classList.remove("visible");
        }
    });
}

// Listen for scroll events
window.addEventListener("scroll", reveal);

// Initialize particles.js with parallax effect
particlesJS("particles-js", {
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#ffffff"
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000"
            }
        },
        opacity: {
            value: 0.5,
            random: true
        },
        size: {
            value: 5,
            random: true
        },
        move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: false
            },
            onclick: {
                enable: false
            },
            resize: true
        }
    },
    retina_detect: true
});

// Parallax effect on mouse move
document.addEventListener("mousemove", function (e) {
    const particlesCanvas = document.getElementById('particles-js').querySelector('canvas');
    const moveAmount = 0.05; // Adjust for stronger or lighter parallax

    // Calculate new positions based on mouse position
    const offsetX = (e.clientX - window.innerWidth / 2) * moveAmount;
    const offsetY = (e.clientY - window.innerHeight / 2) * moveAmount;

    particlesCanvas.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
});

// Initialize particles and reveal sections on load
document.addEventListener("DOMContentLoaded", function() {
    reveal();
});
