const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
  ctx.fillStyle = 'rgba(10, 14, 39, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  ctx.fillStyle = '#00f0ff';
  ctx.font = fontSize + 'px monospace';
  
  for (let i = 0; i < drops.length; i++) {
    const text = chars[Math.floor(Math.random() * chars.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

setInterval(drawMatrix, 50);

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

const mobileBtn = document.getElementById('mobileBtn');
const navLinks = document.getElementById('navLinks');

mobileBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      navLinks.classList.remove('active');
    }
  });
});

const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (elementTop < windowHeight - 100) {
      el.classList.add('active');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

const terminalInput = document.getElementById('terminalInput');
const terminalBody = document.getElementById('terminalBody');
const inputLine = document.getElementById('inputLine');

const commands = {
  'cat flag.txt': 'b0510{n1c3!!_n0w_3sc4l3t3_pr1v1l3g35}',
  'ls': 'flag.txt',
  'pwd': '/home/portfolio',
  'help': 'Available commands: cat, ls, pwd, whoami, clear, help',
  'whoami': 'fedebosio@RootRunners',
  'clear': 'CLEAR_TERMINAL'
};

terminalInput.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    const input = this.value.trim();
    
    if (input) {
      const cmdLine = document.createElement('div');
      cmdLine.className = 'terminal-line';
      cmdLine.innerHTML = `<span class="prompt">└─$</span> <span class="command">${input}</span>`;
      
      terminalBody.insertBefore(cmdLine, inputLine);
      
      if (commands[input]) {
        if (commands[input] === 'CLEAR_TERMINAL') {
          const lines = terminalBody.querySelectorAll('.terminal-line:not(#inputLine)');
          lines.forEach(line => line.remove());
        } else {
          const outputLine = document.createElement('div');
          outputLine.className = 'terminal-line';
          
          if (input === 'cat flag.txt') {
            outputLine.innerHTML = `<span class="output" style="color: var(--accent-green); font-weight: 700;">${commands[input]}</span>`;
          } else {
            outputLine.innerHTML = `<span class="output">${commands[input]}</span>`;
          }
          
          terminalBody.insertBefore(outputLine, inputLine);
        }
      } else {
        const errorLine = document.createElement('div');
        errorLine.className = 'terminal-line';
        errorLine.innerHTML = `<span class="output" style="color: var(--accent-purple);">bash: ${input}: command not found</span>`;
        terminalBody.insertBefore(errorLine, inputLine);
      }
      
      this.value = '';
      
      terminalBody.scrollTop = terminalBody.scrollHeight;
    }
  }
});

let mybutton = document.getElementById("logo");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  const scrollTop = document.documentElement.scrollTop;

  if (scrollTop > 20) {
    fadeText(mybutton, "return to top?");
  } else {
    fadeText(mybutton, "b0510");
  }
}

function topFunc() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function fadeText(element, newText) {
  if (element.textContent === newText) return; 

  element.style.opacity = "0";  

  setTimeout(() => {
    element.textContent = newText;
    element.style.opacity = "1"; 
  }, 200); 
}

