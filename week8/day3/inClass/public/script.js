const main = document.querySelector(".main");
const topnav = document.querySelector(".topnav");
const home = document.createElement("a");
const about = document.createElement("a");

home.innerText = "Home";
home.href = "http://localhost:3000/home";
about.innerText = "About";
about.href = "http://localhost:3000/about";

topnav.append(about);
topnav.append(home);
