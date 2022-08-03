const radient = document.querySelectorAll('.title-content');
      quality = document.querySelectorAll('.qualifications');
      firstWrapper = document.querySelector('.first-wrapper');
      secondeWrapper = document.querySelector('.seconde-wrapper');
      timeline = document.getElementById('timeline-wrapper');
      node = document.querySelectorAll('.wrapper-container');

var windowheight = window.innerHeight;

window.onload = function() {document.querySelector('.timeline-wrapper').style.height = document.querySelector('.right-wrapper').getBoundingClientRect().height + 'px'}

window.addEventListener('scroll', ()=> {
    var scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;  

    //TextReveal

    TextAnimation(firstWrapper);

    TextAnimation(secondeWrapper);

    TimlineAnimation(scroll);

    reveal();
});


var i = 0;

function TimlineAnimation(scroll) {
    timelineScroll = Math.max(0 , scroll-650-windowheight);
    timeline.style.height = timelineScroll + 'px';

    if(windowheight > node[i].getBoundingClientRect().bottom){
        node[i].classList.add("actived");
        i++;
        console.log(i);
    }else{
        node[i].classList.remove("actived");
        i--;
    }
}

function TextAnimation(container) {
    var elementHeight = container.getBoundingClientRect().height/2;
        elementPos = Math.min(Math.max(0, -container.getBoundingClientRect().top + window.innerHeight/2), elementHeight);
        opacite = elementPos / elementHeight;

    const translate = 80;
          rotation = 60;
    
    if (container === firstWrapper){
        var animation = rotation - (elementPos / elementHeight)*rotation;
    
        radient[0].style.transform = "rotateX("+animation+"deg)";
        radient[0].style.opacity = opacite;
    
        radient[1].style.transform = "rotateX("+ -animation+"deg)";
        radient[1].style.opacity = opacite;
    }

    if (container === secondeWrapper){
        var animation = translate - (elementPos / elementHeight)*translate;

        quality[0].style.opacity = opacite;
        quality[0].style.transform = "translateX("+animation+"px)";

        quality[1].style.opacity = opacite;
        quality[1].style.transform = "translateX("+ -animation +"px)";
    }
}

function reveal() {
  const unreveal = document.querySelectorAll('.unreveal p');

  for (var i = 0; i < unreveal.length; i++) {

    var revealtop = unreveal[i].getBoundingClientRect().top + (windowheight - 80);

    if (revealtop < windowheight) {
        unreveal[i].style.opacity = "0";
    } 
    
    else {
        unreveal[i].style.opacity = "1";
    }

  }
}