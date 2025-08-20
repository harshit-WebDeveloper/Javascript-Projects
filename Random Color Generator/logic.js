const btn = document.querySelector("#generate-btn");
const colrCode = document.querySelector("#color-code");
const colrBox = document.querySelector(".color-box");

function colorChanger() {
  const hex = "0123456789abcdef";
  let code = "";
  for (let i = 0; i < 6; i++) {
    code += hex[Math.floor(Math.random() * hex.length)];
  }
  colrCode.textContent = `#${code}`;
  colrBox.style.background = `#${code}`;
}
btn.addEventListener("click", colorChanger);
