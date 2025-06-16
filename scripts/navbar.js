const menuToggle = document.getElementById("menuToggle");
const navBar = document.getElementById("navBar");
const menuIcon = document.getElementById("menuIcon");

menuToggle.addEventListener("click", () => {
    if(navBar.classList.value == "active") {
        navBar.classList.value = "inactive";
        menuIcon.src = "../assets/iconos/menu-2.svg";
    }
    else {
        navBar.classList.value = "active";
        menuIcon.src = "../assets/iconos/x.svg";
    }
});