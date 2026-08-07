const termInput = document.getElementById('termInput');
const termOutput = document.getElementById('termOutput');

const randomHexString = length => {
    let result = [];
    let hexRef = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    for (let n = 0; n < length; n++) {
        result.push(hexRef[Math.floor(Math.random() * hexRef.length)]);
    }
    return result.join('');
};

hex = randomHexString(12)

const commands = {
  whoami: 'b0510@RootRunners',
  ls: 'flag.txt  interests.txt  projects/  writeups/',
  pwd: '/home/b0510',
  help: 'commands: whoami  ls  pwd  cat  clear  help',
  'cat flag.txt': `b0510{g0Od_j0B_g3Ett1Ng_tH15_oN3_N0w_F1nD_Th3_0tHer_0n3_` + hex + '}',
  'cat interests.txt': 'low-level / software security / ctf competitions',
  'uname -a': 'Linux b0510 6.6.0-ctf #1 SMP x86_64 GNU/Linux',
  'env': '1: 59628838',
  clear: '__CLEAR__'
};

termInput.addEventListener('keydown', function (e) {
  if (e.key !== 'Enter') return;
  const val = this.value.trim();
  if (!val) return;

  const isFlag = val === 'cat flag.txt';

  if (commands[val] === '__CLEAR__') {
    termOutput.innerHTML = '';
    this.value = '';
    return;
  }

  const result = commands[val];
  const outColor = isFlag ? 'term-flag' : 'term-out';
  const errStyle = 'color:#c0392b;';
  const line = `<span class="term-prompt">$</span> <span class="term-cmd">${escHtml(val)}</span>\n` +
    (result
      ? `<span class="${outColor}">${escHtml(result)}</span>\n`
      : `<span class="term-out" style="${errStyle}">bash: ${escHtml(val)}: command not found</span>\n`);

  termOutput.innerHTML += line;
  this.value = '';
  termOutput.scrollTop = termOutput.scrollHeight;
});

function escHtml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
  });
});

