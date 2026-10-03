let nav = document.createElement("nav");
document.body.append(nav);

let logo = document.createElement("span");
logo.textContent = "LOGO";
logo.setAttribute("id", "logo");

let home = document.createElement("sapn");
home.textContent = "HOME";
home.setAttribute("id", "home");

let about = document.createElement("sapn");
about.textContent = "ABOUT";
about.setAttribute("id", "about");

let contact = document.createElement("sapn");
contact.textContent = "CONTACT";
contact.setAttribute("id", "contact");

nav.append(logo, home, about, contact);

nav.style.backgroundColor = "yellow";

nav.style.height = "50px";
logo.style.fontSize = "50px";
home.style.fontSize = "50px";
about.style.fontSize = "50px";
contact.style.fontSize = "50px";

nav.style.display = "flex";

home.style.marginLeft = "680px";
about.style.marginLeft = "50px";
contact.style.marginLeft = "50px";
