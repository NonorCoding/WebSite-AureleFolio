const page1 = document.querySelector('.section-one'); 
const main = document.querySelector('.main-container'); 
const background1 = document.querySelector('.img-background'); 
const bodyPage = document.querySelector('body');

window.addEventListener('scroll', () => {
    var scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (scroll < 500){
        main.style.position = 'fixed';
        main.style.top = '0px';
    }else{
        main.style.position = 'relative';
        main.style.top = '500px';
    }
    
    main.style.padding = Math.max(0, Math.min(30, (scroll/12))) + 'px';
    background1.style.borderRadius = Math.max(0, Math.min(20, (scroll/12))) + 'px';
})