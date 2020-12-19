if (window.screen.width > 482){
    window.onscroll = function() {scrollFunction()};
}else{
        header.style.height = "0px";
        navbar.style.marginTop = "0px";
        navbar.style.height = "5rem";
        navbar.style.width = "100vw";
}

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

    const box = document.getElementById('hand-box');
    const left_hand =  document.getElementById('left-hand-id');
    const right_hand =  document.getElementById('right-hand-id');
    let animationShown = false;
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        if (!animationShown){
            left_hand.style.left = '-19vw';
            right_hand.style.right = '-19vw';
            
            box.style.animation = 'handBoxHid 6s';
            left_hand.style.animation = 'leftHandOut 1s';
            right_hand.style.animation = 'rightHandOut 1s';
            animationShown = true;
        }
    }

    box.style.opacity = '0';
    
}


const darkButton = document.getElementById('button-theme-dark');
const lightButton = document.getElementById('button-theme-light');

darkButton.onclick = () => {
    body.classList.replace('light', 'dark')
};

lightButton.onclick = () => {
    body.classList.replace('dark', 'light')
};