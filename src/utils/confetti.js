import confetti from "canvas-confetti";

export function fireConfetti() {
  const time = 3000;
  const stop = Date.now() + time;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 1000 };

  const interval = setInterval(() => {
    const timeLeft = stop - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 100 * (timeLeft / time);

    confetti({
      ...defaults,
      particleCount,
      origin: { x: Math.random(), y: Math.random() - 0.2 },
      colors: ['#37AEAB', '#da527f', '#231F42']
    });
  }, 350);
}