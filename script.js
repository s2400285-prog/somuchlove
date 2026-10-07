const envelope = document.getElementById("envelope");
const music = document.getElementById("music");
const musicText = document.getElementById("musicText");
const answer = document.getElementById("answer");

function openLetter() {
  envelope.classList.add("open");

  createHearts();

  setTimeout(() => {
    envelope.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, 400);
}

function toggleMusic() {
  if (music.paused) {
    music.play();
    musicText.textContent = "Pause Our Song";
  } else {
    music.pause();
    musicText.textContent = "Play Our Song";
  }
}

function yesAnswer() {
  answer.innerHTML =
    "Then keep this little piece of my heart forever, Julie. ❤️🥺";
  createHeartExplosion();
}

function loveAnswer() {
  answer.innerHTML = "I knew you would. Now come here, baby. ❤️🌷";
  createHeartExplosion();
}

function createHearts() {
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("div");

    heart.innerHTML = Math.random() > 0.5 ? "❤️" : "💗";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-30px";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    heart.style.zIndex = "999";
    heart.style.pointerEvents = "none";
    heart.style.animation = `heartRise ${Math.random() * 3 + 3}s linear forwards`;

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 6000);
  }
}

function createHeartExplosion() {
  for (let i = 0; i < 35; i++) {
    const heart = document.createElement("div");

    heart.innerHTML = ["❤️", "💗", "💖", "💕", "🌸"][
      Math.floor(Math.random() * 5)
    ];

    heart.style.position = "fixed";
    heart.style.left = "50%";
    heart.style.top = "60%";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    heart.style.zIndex = "9999";
    heart.style.pointerEvents = "none";

    const x = (Math.random() - 0.5) * 700;
    const y = (Math.random() - 0.5) * 500;

    heart.animate(
      [
        {
          transform: "translate(-50%, -50%) scale(0)",
          opacity: 1,
        },
        {
          transform: `translate(${x}px, ${y}px) scale(1.4)`,
          opacity: 0,
        },
      ],
      {
        duration: 1200,
        easing: "ease-out",
      },
    );

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 1300);
  }
}

const style = document.createElement("style");

style.innerHTML = `
@keyframes heartRise {
    0% {
        transform: translateY(0) rotate(0deg);
        opacity: 1;
    }

    100% {
        transform: translateY(-110vh) rotate(360deg);
        opacity: 0;
    }
}
`;

document.head.appendChild(style);
