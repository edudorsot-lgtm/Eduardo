// Función para mostrar la galaxia
function mostrarGalaxia() {
  document.getElementById("inicio").style.display = "none";
  document.getElementById("galaxia").style.display = "block";
  dibujarGalaxia(); // Llamamos a la función que dibuja las estrellas
}

// Función para dibujar la galaxia con estrellas
function dibujarGalaxia() {
  const canvas = document.getElementById("galaxyCanvas");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const estrellas = [];
  const numEstrellas = 500;

  // Generamos estrellas distribuidas en espiral
  for (let i = 0; i < numEstrellas; i++) {
    const angulo = Math.random() * Math.PI * 2;
    const radio = Math.sqrt(Math.random()) * (canvas.width / 2);
    const x = canvas.width / 2 + radio * Math.cos(angulo);
    const y = canvas.height / 2 + radio * Math.sin(angulo);
    estrellas.push({ x, y, size: Math.random() * 2 });
  }

  // Dibujamos las estrellas
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



