document.getElementById("yesBtn").addEventListener("click", function () {
  startConfetti();
  alert("Yay! I love you forever! 💍💖");
});

document.getElementById("noBtn").addEventListener("mouseover", function () {
  this.style.position = "absolute";
  this.style.left = Math.random() * window.innerWidth + "px";
  this.style.top = Math.random() * window.innerHeight + "px";
});

function startConfetti() {
  const canvas = document.getElementById("confetti");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let particles = [];
  for (let i = 0; i < 300; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 5 + 2,
      d: Math.random() * 1.5,
    });
  }

  function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particles.length; i++) {
      ctx.beginPath();
      ctx.arc(
        particles[i].x,
        particles[i].y,
        particles[i].r,
        0,
        Math.PI * 2,
        false
      );
      ctx.fillStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
      ctx.fill();
    }
    updateConfetti();
  }

  function updateConfetti() {
    for (let i = 0; i < particles.length; i++) {
      particles[i].y += particles[i].d;
      if (particles[i].y > canvas.height) {
        particles[i].y = 0;
      }
    }
    requestAnimationFrame(drawConfetti);
  }

  drawConfetti();
}
