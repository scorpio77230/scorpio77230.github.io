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
    scrub: 1,
    pin: true,
    anticipatePin: 1,
    snap: 1 / 3,
    pinsSpacing: false
});

const tl2 = gsap.timeline();
tl2.from(".progress-bar",{x: -500});
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