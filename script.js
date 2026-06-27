// Parallax del carro
document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 10;
    const wrapper = document.querySelector('.car-wrapper');
    if (wrapper) {
        wrapper.style.transform = `translateY(${-10 + y}px) rotateX(${4 - y * 0.3}deg) rotateY(${x * 0.5}deg)`;
    }
});

// Navegación 
function irA(id) {
    const seccion = document.getElementById(id);
    if (seccion) {
        seccion.scrollIntoView({ behavior: 'smooth' });
    }
}