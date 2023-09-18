// "use strict";

// const textTitles = Array.from(document.querySelectorAll("h1"));
// console.log(textTitles);

// const phoneTrigger = document.querySelector(".phone");
// const textLastTrigger = document.querySelector(".text__last");
// const phoneClasses = document.querySelectorAll(".phone");

// phoneTrigger.addEventListener("scroll", () => {
//   const phoneRect = phoneTrigger.getBoundingClientRect();
//   const textLastRect = textLastTrigger.getBoundingClientRect();

//   if (
//     phoneRect.top <= window.innerHeight / 2 &&
//     phoneRect.bottom >= window.innerHeight / 2
//   ) {
//     phoneClasses.forEach((phoneClass, i) => {
//       phoneClass.classList.remove(`phone${i - 1}`);
//     });
//   } else {
//     phoneClasses.forEach((phoneClass, i) => {
//       phoneClass.classList.add(`phone${i - 1}`);
//     });
//   }
// });

// textTitles.forEach((title, i) => {
//   title.style.opacity = 0;

//   const titleTrigger = title;
//   const titleRect = title.getBoundingClientRect();

//   window.addEventListener("scroll", () => {
//     const scrollPosition = window.scrollY;
//     const windowHeight = window.innerHeight;

//     if (
//       titleRect.top + scrollPosition <= windowHeight * 0.55 &&
//       titleRect.top + scrollPosition >= windowHeight * 0.1
//     ) {
//       title.style.opacity = 1;
//     } else {
//       title.style.opacity = 0;
//     }
//   });
// });
// const canvas = document.querySelector("canvas");
// const ctx = canvas.getContext('2d');

// // for intro motion
// let mouseMoved = false;

// let mouse = {
//     x: .5 * window.innerWidth,
//     y: .5 * window.innerHeight,
//     tX: 0,
//     tY: 0
// }
// let params = {
//     pointsNumber: 40,
//     widthFactor: .3,
//     mouseThreshold: .6,
//     spring: .4,
//     friction: .5
// };

// const touchTrail = new Array(params.pointsNumber);
// for (let i = 0; i < params.pointsNumber; i++) {
//     touchTrail[i] = {
//         x: mouse.x,
//         y: mouse.y,
//         vx: 0,
//         vy: 0,
//     }
// }

// window.addEventListener("click", e => {
//     updateMousePosition(e.pageX, e.pageY);
// });
// window.addEventListener("mousemove", e => {
//     mouseMoved = true;
//     updateMousePosition(e.pageX, e.pageY);
// });
// window.addEventListener("touchmove", e => {
//     mouseMoved = true;
//     updateMousePosition(e.targetTouches[0].pageX, e.targetTouches[0].pageY);
// });

// function updateMousePosition(eX, eY) {
//     mouse.tX = eX;
//     mouse.tY = eY;
// }

// setupCanvas();
// updateBubbles(0);
// window.addEventListener('resize', () => {
//     setupCanvas();
// });


// function updateBubbles(t) {

//     // for intro motion
//     if (!mouseMoved) {
//         mouse.tX = (.5 + .3 * Math.cos(.002 * t) * (Math.sin(.005 * t))) * window.innerWidth;
//         mouse.tY = (.5 + .2 * (Math.cos(.005 * t)) + .1 * Math.cos(.01 * t)) * window.innerHeight;
//     }

//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.beginPath();

//     touchTrail.forEach((p, pIdx) => {
//         if (pIdx === 0) {
//             p.x = mouse.x;
//             p.y = mouse.y;
//             ctx.moveTo(p.x, p.y);
//         } else {
//             p.vx += (touchTrail[pIdx - 1].x - p.x) * params.spring;
//             p.vy += (touchTrail[pIdx - 1].y - p.y) * params.spring;
//             p.vx *= params.friction;
//             p.vy *= params.friction;

//             p.x += p.vx;
//             p.y += p.vy;
//         }
//     });

//     for (let i = 1; i < touchTrail.length - 1; i++) {
//         const xc = .5 * (touchTrail[i].x + touchTrail[i + 1].x);
//         const yc = .5 * (touchTrail[i].y + touchTrail[i + 1].y);
//         ctx.quadraticCurveTo(touchTrail[i].x, touchTrail[i].y, xc, yc);
//         ctx.lineWidth = params.widthFactor * (params.pointsNumber - i);
//         ctx.stroke();
//     }
//     ctx.lineTo(touchTrail[touchTrail.length - 1].x, touchTrail[touchTrail.length - 1].y);
//     ctx.stroke();

//     mouse.x += (mouse.tX - mouse.x) * params.mouseThreshold;
//     mouse.y += (mouse.tY - mouse.y) * params.mouseThreshold;

//     window.requestAnimationFrame(updateBubbles);
// }

// function setupCanvas() {
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
// }