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
