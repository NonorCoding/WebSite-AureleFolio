var WindowWidht = window.innerWidth;
var WindowHeight = window.innerHeight;

const background = document.querySelector('.img-background');

const canvas = document.getElementById('canvas');
if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
}

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.filter = 'blur(200px)';


ctx.fillStyle = '#4880f8';
ctx.fillRect(-WindowWidht, -WindowHeight/1.2, WindowWidht*3, WindowHeight);

/* function textTapping(scroll){
    var txt = 'Hello ! Welcome in my portfolio !';
    i = 0;
    const texte = document.getElementById("title-texte");
    if (scroll > (windowheight + 200)){
        cursorAnimation()
        if (executed === false) {    
            for (var i=0; i < txt.length; i++) {
                (function(ind)                
                    {setTimeout(function(){texte.innerHTML += txt.charAt(ind);}, 100*ind);}
                )(i);
            }
            executed = true;
        }
    }else{
        tappingText.style.opacity = 1;
    }
};

function cursorAnimation() {
    document.getElementById("cursor-text").animate([
        { opacity: '0' },
        { opacity: '1' }
    ], {
        duration: 1000,
        iterations: Infinity
      });
}; */