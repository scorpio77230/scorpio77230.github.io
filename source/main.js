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
  this.querySelectorAll('.layer').forEach(layer =>{
    const speed = layer.getAttribute('data-speed')
    
    const x =(window.innerWidth - e.pageX* speed)/ 100
    const y =(window.innerHeight - e.pageY* speed) / 100
    
    layer.style.transform = `translateX(${x}px) translateY(${y}px)`
  })
}
