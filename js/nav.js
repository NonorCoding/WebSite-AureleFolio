const bar = document.querySelector('.bar-menu');

const first = document.querySelector('.nav-menu-items li:nth-child(1)');
const second = document.querySelector('.nav-menu-items li:nth-child(2)');
const third = document.querySelector('.nav-menu-items li:nth-child(3)');
const fourth = document.querySelector('.nav-menu-items li:nth-child(4)');

function navigation(value){
  if (value === 1){
    bar.style.width = first.offsetWidth + "px";
    bar.style.left = "21px";
    window.scrollTo(0, 0);
  }

  if (value === 2){
    bar.style.width = second.offsetWidth + "px";
    bar.style.left = "84px";
    window.scrollTo(0, 1424);
  }

  if (value === 3){
    bar.style.width = third.offsetWidth + "px";
    bar.style.left = "147px";
    window.scrollTo(0, 2000);
  }

  if (value === 4){
    bar.style.width = fourth.offsetWidth + "px";
    bar.style.left = "224px";
    window.scrollTo(0, 3000);
  }
}

window.addEventListener("wheel", EventBarScroll)
window.addEventListener("load", EventBarScroll)


function EventBarScroll(){
  var scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;  

  if (scroll <= 500){
    bar.style.width = first.offsetWidth + "px";
    bar.style.left = "21px";
  }

  if (scroll >= 500 && scroll <= 2000){
    bar.style.width = second.offsetWidth + "px";
    bar.style.left = "84px";
  }

  if (scroll >= 2000 && scroll <= 3000){
    bar.style.width = third.offsetWidth + "px";
    bar.style.left = "147px";
  }

  if (scroll >= 3000 && scroll <= 4000){
    bar.style.width = fourth.offsetWidth + "px";
    bar.style.left = "224px";
  }
} 