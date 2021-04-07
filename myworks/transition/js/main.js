const tl = gsap.timeline({paused: true, defaults: { duration: 0.5, ease: "rough"}})
        const container = document.querySelector('.container')

        tl.to(container, {clipPath: 'polygon(7% 7%, 93% 7%, 93% 93%, 13% 87%)'})
        tl.to(container, {clipPath: 'polygon(93% 7%, 93% 7%, 93% 93%, 93% 50%)'})
        tl.to('h1', {color: 'white'})
        tl.to('.container2',{clipPath: 'polygon(7% 7%, 93% 7%, 93% 93%, 7% 93%)'}, '-=.3')

        container.addEventListener('mouseover', () =>{
            tl.play()
        })


gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".container5").forEach((container5, i) => {
  ScrollTrigger.create({
    trigger: container5,
    start: "top top", 
    // markers: true,
    pin: true, 
    pinSpacing: false 
  });
});


ScrollTrigger.create({
  snap: 1 / 4 // snap whole page to the closest section!
});