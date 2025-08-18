    function updateTime() {
        let date = new Date();
        let hours = date.getHours().toString().padStart(2, '0');
        let minutes = date.getMinutes().toString().padStart(2, '0');
        let seconds = date.getSeconds().toString().padStart(2, '0');
        let time = `${hours}:${minutes}:${seconds}`;
        document.querySelector(".tag").innerHTML =
            `Hello, I'm Federico, currently ${time} for me`;
    }

    updateTime();
    setInterval(updateTime, 1000);

const texts = [
        "Beginner-intermediate",
        'print("Hello world!")',
        "CTF Player",
        "admin' or 1=1-- ",
        "Hunting for flags",
        "Always learning",
      ];

      let date = new Date();
      let time = date.toLocaleTimeString();
      document.querySelector(".tag").innerHTML = `Hello, I'm Federico, currently ${time} for me`;

      let textIndex = 0,
        charIndex = 0,
        isDeleting = false;
      const typingEl = document.getElementById("typing");

      function typeEffect() {
        const current = texts[textIndex];
        if (isDeleting) {
          typingEl.textContent = current.substring(0, charIndex - 1);
          charIndex--;
        } else {
          typingEl.textContent = current.substring(0, charIndex + 1);
          charIndex++;
        }
        let speed = isDeleting ? 60 : 100;
        if (!isDeleting && charIndex === current.length) {
          isDeleting = true;
          speed = 1800;
        } else if (isDeleting && charIndex === 0) {
          isDeleting = false;
          textIndex = (textIndex + 1) % texts.length;
          speed = 500;
        }
        setTimeout(typeEffect, speed);
      }

      typeEffect();

      document.querySelectorAll('a[href^="#"]').forEach((a) =>
        a.addEventListener("click", (e) => {
          e.preventDefault();
          const target = document.querySelector(a.getAttribute("href"));
          if (target) target.scrollIntoView({ behavior: "smooth" });
        })
      );

      const canvas = document.getElementById("matrix");
      const ctx = canvas.getContext("2d");

      function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }

      window.addEventListener("resize", resize);
      resize();

      const cols = Math.floor(window.innerWidth / 12);
      const drops = new Array(cols).fill(0);
      const chars = "01ABCDEF@#$%*+-";

      function draw() {
        ctx.fillStyle = "rgba(0,0,0,0.06)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "rgba(0,255,106,0.85)";
        ctx.font = "12px monospace";
        for (let i = 0; i < drops.length; i++) {
          const txt = chars.charAt(Math.floor(Math.random() * chars.length));
          ctx.fillText(txt, i * 12, drops[i] * 12);
          if (drops[i] * 12 > canvas.height && Math.random() > 0.975)
            drops[i] = 0;
          drops[i]++;
        }
      }

      setInterval(draw, 40);

      document.getElementById("discord-link").addEventListener("click", (e) => {
        e.preventDefault();
        alert("You can add me with this username: @fedebosio");
      });