import "./style.css";

const binaryToDecimal = (bin) => {
  let dec = 0;

  for (let i = bin.length - 1, j = 0; i >= 0; i--, j++) {
    dec += bin[i] === "1" ? Math.pow(2, j) : 0;
  }

  return dec;
};

const decDiv = document.querySelector("#dec");

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  const bin = document.querySelector("#bin").value;
  event.preventDefault();
  decDiv.textContent = binaryToDecimal(bin);
});
