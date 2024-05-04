const menuicon = document.querySelector("#menu-icon");
const navebar = document.querySelector('.navebar');

menuicon.oneclick = () => {
    menuicon.classList.toggle{'bx-x'};
    navebar.classList.toggle{'active'};
}