const radient = document.querySelectorAll('.title-content');
      qualif = document.querySelectorAll('.qualifications .tall-title');
      firstWrapper = document.querySelector('.first-wrapper');
      secondeWrapper = document.querySelector('.seconde-wrapper');
      timeline = document.querySelector('.timeline-wrapper-line');
      fixtimeline = document.querySelector('.timeline-wrapper');
      wrapperContainerNode = document.querySelectorAll('.wrapper-container');

var windowheight = window.innerHeight;

window.addEventListener('load', timelineHeight);
window.addEventListener('resize', timelineHeight);

function timelineHeight(){
    var timelineHeight = document.querySelector('.right-wrapper').getBoundingClientRect().height - firstWrapper.getBoundingClientRect().height;

    fixtimeline.style.height = timelineHeight + 'px';
    timeline.style.maxHeight = timelineHeight + 'px';
}

window.addEventListener('scroll', ()=> {
    var scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;  

    //TextReveal

    TextAnimation(firstWrapper);

    TextAnimation(secondeWrapper);

    TimlineAnimation(scroll);

    reveal();
});

var j = 0;

function TimlineAnimation(scroll) {
    var wh = window.innerHeight;

    if (-timeline.getBoundingClientRect().top+wh/2 > 0){
        timeline.style.height = -timeline.getBoundingClientRect().top + wh/2 + 'px';
    }

    if (wrapperContainerNode[j].getBoundingClientRect().top < 0){
        wrapperContainerNode[j].classList.add("actived");
        j++;
    }else{
        wrapperContainerNode[j].classList.remove("actived");
        j--;
    }

    if (j < 0){
        j++;
    }
    if(j > length.wrapperContainerNode){
        j--;
    }
}

function TextAnimation(container) {
    var elementHeight = container.getBoundingClientRect().height/2;
        elementPos = Math.min(Math.max(0, -container.getBoundingClientRect().top + window.innerHeight/2), elementHeight);
        opacite = elementPos / elementHeight;

    const translate = 150;
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

        qualif[0].style.opacity = opacite;
        qualif[0].style.transform = "translateX("+animation+"px)";
    }
}

/* function reveal() {
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
} */