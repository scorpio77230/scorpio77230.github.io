const tl = gsap.timeline({paused: true, defaults: { duration: 0.5, ease: "rough"}})
        const container = document.querySelector('.container')

        tl.to(container, {clipPath: 'polygon(7% 7%, 93% 7%, 93% 93%, 13% 87%)'})
        .to(container, {clipPath: 'polygon(93% 7%, 93% 7%, 93% 93%, 93% 50%)'})
        .to('h1', {color: 'white'})
        .to('.container2',{clipPath: 'polygon(7% 7%, 93% 7%, 93% 93%, 7% 93%)'}, '-=.3');

        container.addEventListener('mouseover', () =>{
            tl.play()
        })


gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".container3").forEach((container3) => {
  ScrollTrigger.create({
    trigger: container3,
    start: "top top", 
    // markers: true,
    pin: true, 
    pinSpacing: false,
    endTrigger: ".slides3",
    end: "top top",
    snap: 0.1
  });
});
