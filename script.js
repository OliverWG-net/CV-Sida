document.addEventListener("DOMContentLoaded", function () {
    let currentPage = window.location.pathname.split("/").pop() || "index.html";


    let navLinks = document.querySelectorAll(".navbar ul li a");

    navLinks.forEach(link => {
        let linkPath = link.getAttribute("href");

        if (currentPage === linkPath) {
            link.classList.add("active");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const invertButton = document.getElementById("invertButton");
    const body = document.body;
    
    invertButton.addEventListener("click", function () {
        body.classList.toggle("inverted");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let inputSequence = [];
    const secretCode = "1337"; 

    document.addEventListener("keydown", function (event) {
        inputSequence.push(event.key); 

        
        if (inputSequence.length > secretCode.length) {
            inputSequence.shift();
        }

        
        if (inputSequence.join("") === secretCode) {
            activateEasterEgg();
        }
    });
    let beat = new Audio('mustard-kendrick-lamar-made-with-Voicemod.mp3');
    function activateEasterEgg() {
        document.body.classList.toggle("easterEgg");
        beat.play();
    }
    console.log(beat);
});
