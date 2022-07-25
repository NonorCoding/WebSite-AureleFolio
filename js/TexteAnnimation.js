const radient = document.querySelectorAll('.title-content');
const section = document.querySelector('.wrapper-container');
const timeline = document.getElementById('timeline-wrapper');
const timelineTransparent = document.getElementById('timeline-wrapper-transparent');
const node = document.querySelectorAll('.node');
var windowheight = window.innerHeight;

const unreveal = document.querySelectorAll('.unreveal');

window.addEventListener('scroll', ()=> {
    var scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;  

    //TextReveal
    var elementHeight = section.getBoundingClientRect().height;
    var elementPos = Math.min(Math.max(0, -section.getBoundingClientRect().top + window.innerHeight), elementHeight);

    var rotation = 60 - (elementPos / elementHeight)*60;
    var opacite = elementPos / elementHeight;

    radient[0].style.transform = "rotateX("+rotation+"deg)";
    radient[0].style.opacity = opacite;

    radient[1].style.transform = "rotateX("+ -rotation+"deg)";
    radient[1].style.opacity = opacite;

    //Timeline annimation
    timeline.style.height = Math.max(0 , scroll-windowheight*1.2) + 'px';
    timelineTransparent.style.height = Math.max(0 , scroll-windowheight*1.2) + 'px';

    //Timeline dots annimation
    if( timelineTransparent.getBoundingClientRect().bottom > node[0].getBoundingClientRect().bottom){
        node[0].style.setProperty("--color", "#4880f8");
        node[0].classList.add("actived");
    }
    else{
        node[0].style.setProperty("--color", "#fff");
        node[0].classList.remove("actived");
    }

    if( timelineTransparent.getBoundingClientRect().bottom > node[1].getBoundingClientRect().bottom){
        node[1].style.setProperty("--color", "#4880f8");
        node[1].classList.add("actived");
    }
    else{
        node[1].style.setProperty("--color", "#fff");
        node[1].classList.remove("actived");
    }

    if( timelineTransparent.getBoundingClientRect().bottom > node[2].getBoundingClientRect().bottom){
        node[2].style.setProperty("--color", "#4880f8");
        node[2].classList.add("actived");
    }
    else{
        node[2].style.setProperty("--color", "#fff");
        node[2].classList.remove("actived");
    }

    if( timelineTransparent.getBoundingClientRect().bottom > node[3].getBoundingClientRect().bottom){
        node[3].style.setProperty("--color", "#4880f8");
        node[3].classList.add("actived");
    }
    else{
        node[3].style.setProperty("--color", "#fff");
        node[3].classList.remove("actived");
    }

    if( timelineTransparent.getBoundingClientRect().bottom > node[4].getBoundingClientRect().bottom){
        node[4].style.setProperty("--color", "#4880f8");
        node[4].classList.add("actived");
    }
    else{
        node[4].style.setProperty("--color", "#fff");
        node[4].classList.remove("actived");
    }

    if( timelineTransparent.getBoundingClientRect().bottom > node[5].getBoundingClientRect().bottom){
        node[5].style.setProperty("--color", "#4880f8");
        node[5].classList.add("actived");
    }
    else{
        node[5].style.setProperty("--color", "#fff");
        node[5].classList.remove("actived");
    }
});