// 按鈕到區域 https://codepen.io/GreenSock/pen/bGVjLwG
gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ease: "none", duration:2});

const tl = gsap.timeline();
tl.from(".slide1",{yPercent: 100})
  .from(".slide2",{yPercent: -100})
  .from(".slide3",{yPercent: 100});


ScrollTrigger.create({
    animation: tl,
    ease: "expo.inout",
    trigger: "#scroll",
    start: "top top",
    end: "+=4000",
    scrub: true,
    pin: true,
    anticipatePin: 1,
    snap: 1 / 3,
    pinsSpacing: false
});

const tl2 = gsap.timeline();
tl2.from(".progress-bar",{x: -500, duration:1.5, stagger:0.5});
ScrollTrigger.create({
  animation: tl2,
  ease: "expo.inout",
  trigger: ".values",
})
// const pageBg = document.querySelector("#welcomePage");
// pageBg.style.backgroundPosition = "50% 0px";
// gsap.to(pageBg, {
//     backgroundPosition: `50% ${innerHeight / 2}px`,
//     ease: "none",
//     scrollTrigger: {
//       trigger: pageBg,
//       start: "top top", 
//       end: "bottom top",
//       scrub: true
//     }
//   });
const logo = document.querySelector('.logo');
const head = document.querySelector('.headline');

// const tl3 = gsap.timeline();
// tl3.from(logo, {opacity:0, x:-100, duration:1})
//     .from(head, {opacity:0, y:100, duration:2}, "-=.5");

const ani = document.querySelector('.ani');
const ani2 = document.querySelector('.ani2');
const ani3 = document.querySelector('.ani3');
const ani4 = document.querySelector('.ani4');
const wel = gsap.timeline({ defaults: {ease:"slow (0.7, 0.7, false)"}})
wel.from(logo, {opacity:0, x:-100, duration:1})
  .from(head, {opacity:0, y:100, duration:2}, "-=.5")
  .to(ani4, {clipPath:'polygon(100% 0, 100% 0%, 100% 100%, 100% 100%)'})  
  .to(ani3, {clipPath: 'polygon(100% 0, 100% 0%, 100% 100%, 100% 100%)'}) 
  .to(ani2, {clipPath: 'polygon(100% 0, 100% 0%, 100% 100%, 100% 100%)'})
  .to(ani2, {clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 0% 100%)'}, "-=1")
  .to(ani3, {clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 0% 100%)'}, "-=1")
  .to(ani4, {clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 0% 100%)'}, "-=1")
  
