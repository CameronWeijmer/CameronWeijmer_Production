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
const about_name = document.getElementById("content");

// Function to toggle the menulist
function togglemenu() {
  menuList.classList.toggle("toggle");
  about_name.classList.toggle("hide-content");
}

btn.addEventListener("click", () => {
  togglemenu();
});

// navbar scroll

function onScroll() {
  console.log(window.scrollY);

  if (window.scrollY > 1) {
    const navigation = document.getElementById("nav_id");
    navigation.classList.remove("toAnimate");
    navigation.classList.add("fadeIn");
  }

  if (window.scrollY <= 0) {
    const navigation = document.getElementById("nav_id");
    navigation.classList.remove("fadeIn");
  }

  // if (window.scrollY >= 900) {
  //   const element1 = document.getElementById("nav_a_id1");
  //   const element2 = document.getElementById("nav_a_id2");
  //   const element3 = document.getElementById("nav_a_id3");
  //   const element4 = document.getElementById("nav_a_id4");
  //   element1.style.color = "#000";
  //   element2.style.color = "#000";
  //   element3.style.color = "#000";
  //   element4.style.color = "#000";
  // }

  if (window.scrollY >= 1900) {
    const element1 = document.getElementById("nav_a_id1");
    const element2 = document.getElementById("nav_a_id2");
    const element3 = document.getElementById("nav_a_id3");
    const element4 = document.getElementById("nav_a_id4");
    element1.style.color = "#000";
    element2.style.color = "#000";
    element3.style.color = "#000";
    element4.style.color = "#000";
  }

  if (window.scrollY >= 3570) {
    const element1 = document.getElementById("nav_a_id1");
    const element2 = document.getElementById("nav_a_id2");
    const element3 = document.getElementById("nav_a_id3");
    const element4 = document.getElementById("nav_a_id4");
    element1.style.color = "#fff";
    element2.style.color = "#fff";
    element3.style.color = "#fff";
    element4.style.color = "#fff";
  }

  if (window.scrollY < 900) {
    const element1 = document.getElementById("nav_a_id1");
    const element2 = document.getElementById("nav_a_id2");
    const element3 = document.getElementById("nav_a_id3");
    const element4 = document.getElementById("nav_a_id4");
    element1.style.color = "#fff";
    element2.style.color = "#fff";
    element3.style.color = "#fff";
    element4.style.color = "#fff";
  }
}
