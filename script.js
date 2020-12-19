window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    const header = document.getElementById("header");
    const navbar = document.getElementById("navbarID");
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        header.style.height = "0px";
        navbar.style.marginTop = "0px";
        navbar.style.height = "100vh";
    } else {
        header.style.height = "var(--header-hight)";
        navbar.style.marginTop = "var(--header-hight)";
        navbar.style.height = "calc(100vh - var(--header-hight))";
    }
}

const darkButton = document.getElementById('button-theme-dark');
const lightButton = document.getElementById('button-theme-light');

darkButton.onclick = () => {
    body.classList.replace('light', 'dark')
};

lightButton.onclick = () => {
    body.classList.replace('dark', 'light')
};