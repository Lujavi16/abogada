const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});

document.getElementById("whatsapp-button").addEventListener("click", function() {
    var phoneNumber = "+573107228029"; 
    var message = encodeURIComponent("Bienvenido a tu abogado de confianza. ¿Cuéntanos en qué te podemos asesorar?. Te saluda Alejandra Silva");
    window.open("https://api.whatsapp.com/send?phone=" + phoneNumber + "&text=" + message, "_blank");
});

document.addEventListener("DOMContentLoaded", function () {
    const words = ["Divorcios", "Sucesiones", "Pensiones", "Negligencias Médicas"];
    const wordElement = document.getElementById("word");
    let index = 3;

    setInterval(function () {
        wordElement.textContent = words[index];
        index = (index + 1) % words.length;
    }, 2500); // Cambia el valor para ajustar la velocidad de cambio
});

