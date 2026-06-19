// Mostrar la galaxia al dar clic
function mostrarGalaxia() {
  document.getElementById("inicio").style.display = "none";
  document.getElementById("galaxia").style.display = "block";
  dibujarGalaxia(); // Llamamos a la función que dibuja las estrellas
}

// Dibujar galaxia con estrellas en espiral
function dibujarGalaxia() {
  const canvas = document.getElementById("galaxyCanvas");
  const ctx = canvas.getContext("2d");

  // Ajustar tamaño del canvas
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const estrellas = [];
  const numEstrellas = 500;

  // Generamos estrellas en espiral
  for (let i = 0; i < numEstrellas; i++) {
    const angulo = i * 0.1; // controla la curva
    const radio = i * 0.5;  // controla la expansión
    const x = canvas.width / 2 + radio * Math.cos(angulo);
    const y = canvas.height / 2 + radio * Math.sin(angulo);
    estrellas.push({ x, y, size: Math.random() * 2 });
  }

  // Dibujar todas las estrellas
  function dibujar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    estrellas.forEach(e => {
      ctx.beginPath();
      ctx.arc(e.x, e.y, e.size, 0, Math.PI * 2);
      ctx.fill();
    });
  }

  dibujar();
}
