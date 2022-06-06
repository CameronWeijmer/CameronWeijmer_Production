const text = document.querySelector(".name");
const textStr = text.textContent;
const textSplit = textStr.split("");
let int = 0;
let clock = setInterval(onTick, 100);

text.textContent = "";
for (let i = 0; i < textSplit.length; i++) {
  text.innerHTML += "<span>" + textSplit[i] + "</span>";
}

function onTick() {
  const span = text.querySelectorAll("span")[int];
  span.classList.add("cover");
  int++;

  if (int === textSplit.length) {
    done();
    return;
  }
}

function done() {
  clearInterval(clock);
  clock = null;
}
