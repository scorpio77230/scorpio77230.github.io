$(document).ready(function(){
    $(".fancy").fancybox({
        openSpeed:300,
        closeSpeed:300,
        openEffect:"Elastic",
        closeEffect:"fade",
        padding:8,
        maxWidth	: 1600,
        maxHeight	: 1200, 
        width		: '80%',
        height		: '90%',
        fitToView	: true,
        autoSize	: true,
    });
});

document.addEventListener("mousemove", parallax);
function parallax(e){
  this.querySelectorAll('.box').forEach(box =>{
    const speed = box.getAttribute('data-speed')
    
    const x =(window.innerWidth - e.pageX* speed)/200
    const y =(window.innerHeight - e.pageY* speed) /200
    
    box.style.transform = `translateX(${x}px) translateY(${y}px)`
  })
}
