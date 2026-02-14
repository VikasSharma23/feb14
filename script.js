const surpriseBtn = document.getElementById('surpriseBtn');
const surpriseText = document.getElementById('surpriseText');

const lines = [
  'You + Me = the only trend I need. ❤️',
  'Happy Valentine\'s Day, Prapti! Let\'s make memories forever. 🌹',
  'Vikas loves you today, tomorrow, and always. 💖',
  'Your name is my favorite notification. ✨'
];

surpriseBtn.addEventListener('click', () => {
  const randomLine = lines[Math.floor(Math.random() * lines.length)];
  surpriseText.textContent = randomLine;
});
