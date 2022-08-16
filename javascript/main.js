const text = document.querySelector(".name");
const textStr = text.textContent;
const textSplit = textStr.split("");
let int = 0;
let clock = setInterval(onTick, 200);

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

const menuList = document.querySelector("#menuList");
const btn = document.querySelector(".dropdown");

// Function to toggle the menulist
function togglemenu() {
  menuList.classList.toggle("toggle");
}

btn.addEventListener("click", togglemenu);
