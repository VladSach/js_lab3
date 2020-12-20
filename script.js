if (window.screen.width > 483){
    window.onscroll = function() {scrollFunction()};
}

function scrollFunction() {
    const header = document.getElementById("header");
    const navbar = document.getElementById("navbarID");
    if (document.body.scrollTop > convertRemToPixels(5) || document.documentElement.scrollTop > convertRemToPixels(5)) {
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
    if (document.body.scrollTop > convertRemToPixels(6.25) || document.documentElement.scrollTop > convertRemToPixels(6.25)) {
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

function convertRemToPixels(rem) {    
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

