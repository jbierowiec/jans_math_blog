(() => {
  const heroImg = document.getElementById("heroImage");
  if (!heroImg) return;

  const images = Array.from({ length: 10 }, (_, i) => {
    const n = String(i + 1).padStart(2, "0");
    return `/assets/hero/math-${n}.png`;
  });

  const randomIndex = Math.floor(Math.random() * images.length);
  heroImg.src = images[randomIndex];
})();
