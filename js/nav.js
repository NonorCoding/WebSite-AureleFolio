const bar = document.querySelector('.bar-menu');

const first = document.querySelector('.nav-menu-items li:nth-child(1)');
const second = document.querySelector('.nav-menu-items li:nth-child(2)');
const third = document.querySelector('.nav-menu-items li:nth-child(3)');
const fourth = document.querySelector('.nav-menu-items li:nth-child(4)');

const secondLeft = 19 + 16 + first.offsetWidth;
const thirdLeft = secondLeft + 16 + second.offsetWidth;
const fourthLeft = thirdLeft + 16 + third.offsetWidth;

function navigation(value){
  if (value === 1){
    bar.style.width = first.offsetWidth + "px";
    bar.style.left = "19px";
    window.scrollTo(0, 0);
  }

  if (value === 2){
    bar.style.width = second.offsetWidth + "px";
    bar.style.left = secondLeft + "px";
    window.scrollTo(0, 1424);
  }

  if (value === 3){
    bar.style.width = third.offsetWidth + "px";
    bar.style.left = thirdLeft + "px";
    // window.scrollTo(0, 2000);
  }

  if (value === 4){
    bar.style.width = fourth.offsetWidth + "px";
    bar.style.left = fourthLeft + "px";
    // window.scrollTo(0, 3000);
  }
}

window.addEventListener("wheel", EventBarScroll)
window.addEventListener("load", EventBarScroll)


function EventBarScroll(){
  var scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;  

  if (scroll <= 500){
    bar.style.width = first.offsetWidth + "px";
    bar.style.left = "19px";
  }

  if (scroll >= 500 && scroll <= 2000){
    bar.style.width = second.offsetWidth + "px";
    bar.style.left = secondLeft + "px";
  }

  if (scroll >= 2000 && scroll <= 3000){
    bar.style.width = third.offsetWidth + "px";
    bar.style.left = thirdLeft + "px";
  }

  if (scroll >= 3000 && scroll <= 4000){
    bar.style.width = fourth.offsetWidth + "px";
    bar.style.left = fourthLeft + "px";
  }
} 