// document.querySelector('body').addEventListener('mousemove', (e)=>{
//     const box =document.querySelectorAll('.box');
//     let xAxis = (window.innerWidth / 2 - e.pageX) /25;
//     let yAxis = (window.innerHeight / 2 - e.pageY) /25;
//     box.style.transform = ` rotateX(${yAxis}deg) rotateY(${xAxis}deg) `;
// });

const box = document.querySelectorAll('.box');
const container = document.querySelectorAll('.container');


container[0].addEventListener("mousemove",(e)=>{
    let xAxis = (window.innerWidth / 2 - e.pageX) /25;
    let yAxis = (window.innerHeight / 2 - e.pageY) /25;
    console.log(e);
    box[0].style.transform = ` rotateX(${yAxis}deg) rotateY(${xAxis}deg) `;
});
container[1].addEventListener("mousemove",(e)=>{
    let xAxis = (window.innerWidth / 2 - e.pageX) /70;
    let yAxis = (window.innerHeight / 2 - e.pageY) /60;
    console.log(e);
    box[1].style.transform = ` rotateX(${yAxis}deg) rotateY(${xAxis}deg) `;
});
container[2].addEventListener("mousemove",(f)=>{
    let xAxis = (window.innerWidth / 2 - f.pageX) /100;
    let yAxis = (window.innerHeight / 2 - f.pageY) /100;
    console.log(f);
    box[2].style.transform = ` rotateX(${yAxis}deg) rotateY(${xAxis}deg) `;
});
