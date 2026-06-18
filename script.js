// Rotación suave de las ruedas
const car = document.querySelector('.car');

// Efecto parallax suave al mover el mouse
document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 10;
    const y = (e.clientY / window.innerHeight - 0.5) * 10;

    document.querySelector('.car-wrapper').style.transform =
        `translateY(${-10 + y}px) rotateX(${4 - y * 0.3}deg) rotateY(${x * 0.5}deg)`;
});