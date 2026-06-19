function mostrarGalaxia() {
  document.getElementById("inicio").style.display = "none";
  document.getElementById("galaxia").style.display = "block";
  iniciarGalaxia3D();
}

function iniciarGalaxia3D() {
  // Crear escena
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    2000
  );
  camera.position.z = 500;

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById("galaxyContainer").appendChild(renderer.domElement);

  // Crear estrellas en espiral
  const geometry = new THREE.BufferGeometry();
  const numStars = 2000;
  const positions = [];

  for (let i = 0; i < numStars; i++) {
    const angle = i * 0.1;
    const radius = i * 0.3;
    const x = radius * Math.cos(angle);
    const y = (Math.random() - 0.5) * 200; // dispersión vertical
    const z = radius * Math.sin(angle);
    positions.push(x, y, z);
  }

  geometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(positions, 3)
  );
  const material = new THREE.PointsMaterial({ color: 0xffffff, size: 2 });
  const stars = new THREE.Points(geometry, material);
  scene.add(stars);

  // Controles para mover la cámara
  const controls = new THREE.OrbitControls(camera, renderer.domElement);

  // Animación
  function animate() {
    requestAnimationFrame(animate);
    stars.rotation.y += 0.0005; // rotación lenta de la galaxia
    controls.update();
    renderer.render(scene, camera);
  }
  animate();
}
