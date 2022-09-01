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

window.addEventListener("load", () => {
  setTimeout(function () {
    const arrowImg = document.getElementById("arrow_img");
    arrowImg.classList.remove("remove_me");
    arrowImg.classList.add("arrow_fade");
  }, 3000);
});

function clearForm() {
  document.getElementById("empyForm").reset();
}

// navbar scroll

function onScroll() {
  console.log(window.scrollY);

  if (window.scrollY <= 1) {
    const nav = document.getElementById("nav_id");
    nav.style.backgroundColor = "#ffffff00";
    const element1 = document.getElementById("nav_a_id1");
    const element2 = document.getElementById("nav_a_id2");
    const element3 = document.getElementById("nav_a_id3");
    const element4 = document.getElementById("nav_a_id4");
    element1.style.color = "#fff";
    element2.style.color = "#fff";
    element3.style.color = "#fff";
    element4.style.color = "#fff";
    const logo = document.getElementById("home_logo");
    logo.style.color = "#fff";
  }

  if (window.scrollY > 1) {
    const nav = document.getElementById("nav_id");
    nav.style.backgroundColor = "#fff";
    const element1 = document.getElementById("nav_a_id1");
    const element2 = document.getElementById("nav_a_id2");
    const element3 = document.getElementById("nav_a_id3");
    const element4 = document.getElementById("nav_a_id4");
    element1.style.color = "#000";
    element2.style.color = "#000";
    element3.style.color = "#000";
    element4.style.color = "#000";
    const logo = document.getElementById("home_logo");
    logo.style.color = "#f300b4";
  }

  // if (window.scrollY < 900) {
  //   const logo = document.getElementById("home_logo");
  //   logo.style.color = "#fff";
  //   const element1 = document.getElementById("nav_a_id1");
  //   const element2 = document.getElementById("nav_a_id2");
  //   const element3 = document.getElementById("nav_a_id3");
  //   const element4 = document.getElementById("nav_a_id4");
  //   element1.style.color = "#fff";
  //   element2.style.color = "#fff";
  //   element3.style.color = "#fff";
  //   element4.style.color = "#fff";
  // }

  if (window.scrollY >= 300) {
    const element = document.getElementById("about_fade");
    element.classList.add("fadeIn");
    element.classList.remove("title_img");
  }

  if (window.scrollY >= 600) {
    const element = document.getElementById("animate_text");
    element.classList.add("fadeup");
    element.classList.remove("about-text");
  }

  // if (window.scrollY >= 900) {
  //   const logo = document.getElementById("home_logo");
  //   logo.style.color = "#000";
  // }

  if (window.scrollY >= 1300) {
    const element = document.getElementById("project_title2");
    element.classList.add("fadeup_project");
    element.classList.remove("projects-header");
  }

  if (window.scrollY >= 1548) {
    const element = document.getElementById("all_projects_id");
    element.classList.add("fadeup_project");
    element.classList.remove("all-projects");
  }

  // if (window.scrollY <= 1848) {
  //   const element1 = document.getElementById("nav_a_id1");
  //   const element2 = document.getElementById("nav_a_id2");
  //   const element3 = document.getElementById("nav_a_id3");
  //   const element4 = document.getElementById("nav_a_id4");
  //   element1.style.color = "#fff";
  //   element2.style.color = "#fff";
  //   element3.style.color = "#fff";
  //   element4.style.color = "#fff";
  // }

  // if (window.scrollY >= 1835) {
  //   const element1 = document.getElementById("nav_a_id1");
  //   const element2 = document.getElementById("nav_a_id2");
  //   const element3 = document.getElementById("nav_a_id3");
  //   const element4 = document.getElementById("nav_a_id4");
  //   const logo = document.getElementById("home_logo");
  //   logo.style.color = "#f300b4";
  //   element1.style.color = "#000";
  //   element2.style.color = "#000";
  //   element3.style.color = "#000";
  //   element4.style.color = "#000";
  // }

  if (window.scrollY >= 2384) {
    const element = document.getElementById("top-bar-id");
    element.classList.add("contact_fadeIn");
    element.classList.remove("top-bar");
  }

  // if (window.scrollY >= 3105) {
  //   const element1 = document.getElementById("nav_a_id1");
  //   const element2 = document.getElementById("nav_a_id2");
  //   const element3 = document.getElementById("nav_a_id3");
  //   const element4 = document.getElementById("nav_a_id4");
  //   const logo = document.getElementById("home_logo");
  //   logo.style.color = "#1498d5";
  //   element1.style.color = "#fff";
  //   element2.style.color = "#fff";
  //   element3.style.color = "#fff";
  //   element4.style.color = "#fff";
  // }
}
