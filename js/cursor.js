const cursor = document.querySelector(".cursor-inner");
      cursor2 = document.querySelector(".cursor-outer");
      anchor = document.querySelectorAll("a");
      allElements = document.querySelector("*");

window.addEventListener("load", () => {
  var isMobile = navigator.userAgent.toLowerCase().match(/mobile/i);
 
  if (isMobile){
    console.log("Is mobile device");
    cursor.remove();
    cursor2.remove();
    allElements.style.cursor = "";
  }
  else { 
    console.log("Not mobile device");
  }
});

document.addEventListener("mousemove", (e) =>{
  let x = e.pageX;
      y = e.pageY;

    cursor.style.top = e.y + "px";
    cursor.style.left = e.x + "px";

    cursor2.style.top = e.y + "px";
    cursor2.style.left = e.x + "px";
})

anchor.forEach((anc) => {
  anc.addEventListener("mouseover", () => {
    cursor2.style.width = '0px';
    cursor2.style.height = '0px';
    cursor2.style.opacity = '0';
    cursor.style.mixBlendMode = 'difference';
  });
  anc.addEventListener("mouseleave", () => {
    cursor2.style.width = '50px';
    cursor2.style.height = '50px';
    cursor2.style.opacity = '1';
    cursor.style.mixBlendMode = '';
  });
});