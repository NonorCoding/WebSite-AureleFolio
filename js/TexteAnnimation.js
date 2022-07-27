const radient = document.querySelectorAll('.title-content');
      quality = document.querySelectorAll('.qualifications');
      firstWrapper = document.querySelector('.first-wrapper');
      secondeWrapper = document.querySelector('.seconde-wrapper');
      timeline = document.getElementById('timeline-wrapper');
      timelineTransparent = document.getElementById('timeline-wrapper-transparent');
      node = document.querySelectorAll('.node');

var windowheight = window.innerHeight;

window.addEventListener('scroll', ()=> {
    var scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;  

    //TextReveal

    TextAnimation(firstWrapper);

    TextAnimation(secondeWrapper);

    //Timeline annimation
    timeline.style.height = Math.max(0 , scroll-windowheight*1.2) + 'px';
    timelineTransparent.style.height = Math.max(0 , scroll-windowheight*1.2) + 'px';

    TimlineAnimation();

    reveal();
});

function TextAnimation(container) {
    var elementHeight = container.getBoundingClientRect().height;
        elementPos = Math.min(Math.max(0, -container.getBoundingClientRect().top + window.innerHeight), elementHeight);
        opacite = elementPos / elementHeight;

    const translate = 80;
          rotation = 60;
    
    if (container === firstWrapper){
        var animation = rotation - (elementPos / elementHeight)*rotation;
    
        radient[0].style.transform = "rotateX("+animation+"deg)";
        radient[0].style.opacity = opacite;
    
        radient[1].style.transform = "rotateX("+ -animation+"deg)";
        radient[1].style.opacity = opacite;

        console.log(elementHeight + 1, elementPos);

        if (elementHeight < elementPos+1){
            document.querySelector('.title-content:nth-child(2)').classList.add('actived');
        }else{
            document.querySelector('.title-content:nth-child(2)').classList.remove('actived');
        }
    }

    if (container === secondeWrapper){
        var animation = translate - (elementPos / elementHeight)*translate;

        quality[0].style.opacity = opacite;
        quality[0].style.transform = "translateX("+animation+"px)";

        quality[1].style.opacity = opacite;
        quality[1].style.transform = "translateX("+ -animation +"px)";
    }
}


function TimlineAnimation(){
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
}


function reveal() {
  const unreveal = document.querySelectorAll('.unreveal p');

  for (var i = 0; i < unreveal.length; i++) {

    var vh = window.innerHeight;
    var revealtop = unreveal[i].getBoundingClientRect().top + (vh - 80);

    if (revealtop < vh) {
        unreveal[i].style.opacity = "0";
    } 
    
    else {
        unreveal[i].style.opacity = "1";
    }

  }
}