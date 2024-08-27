const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Stickman {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.dy = Math.random() * 2 + 1; // Velocidad de caída
    this.dx = Math.random() * 2 - 1; // Movimiento horizontal
    this.size = Math.random() * 5 + 5; // Tamaño del stickman
  }

  draw() {
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 2;
    ctx.beginPath();

    // Cabeza
    ctx.arc(this.x, this.y, this.size / 2, 0, Math.PI * 2);

    // Cuerpo
    ctx.moveTo(this.x, this.y + this.size / 2);
    ctx.lineTo(this.x, this.y + this.size * 1.5);

    // Brazos
    ctx.moveTo(this.x - this.size / 2, this.y + this.size);
    ctx.lineTo(this.x + this.size / 2, this.y + this.size);

    // Piernas
    ctx.moveTo(this.x, this.y + this.size * 1.5);
    ctx.lineTo(this.x - this.size / 2, this.y + this.size * 2);
    ctx.moveTo(this.x, this.y + this.size * 1.5);
    ctx.lineTo(this.x + this.size / 2, this.y + this.size * 2);

    ctx.stroke();
  }

  update() {
    this.y += this.dy;
    this.x += this.dx;

    // Si el stickman sale de la pantalla, reubicar en la parte superior
    if (this.y > canvas.height) {
      this.y = 0 - this.size * 2;
      this.x = Math.random() * canvas.width;
    }

    this.draw();
  }
}

const stickmen = [];

function init() {
  for (let i = 0; i < 100; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    stickmen.push(new Stickman(x, y));
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  stickmen.forEach(stickman => stickman.update());
  requestAnimationFrame(animate);
}

init();
animate();
