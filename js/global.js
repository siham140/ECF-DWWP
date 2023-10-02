 const tickets=document.querySelector('.tickets');
const imageTicket=document.querySelector('.image_ticket');
const cart=document.querySelector('.cart');
const menuBar=document.querySelector('.menu-bar');
const imageMasquee=document.querySelector('.image-masquee');
const checkGreenIcon=document.querySelector('.check_green_icon');
const btnSecondery=document.querySelector('.btn-secondery');
const text=document.querySelector('.text');
const footer=document.querySelector('.footer');


tickets.addEventListener("click", () => {
  });
  imageTicket.addEventListener("click", () => {
    imageTicket.style.display ="none";
    imageMasquee.style.display ="block";
    text.style.display ="flex";
   });
   imageMasquee.addEventListener("click", () => {
    checkGreenIcon.style.display ="block";
    btnSecondery.style.display="flex";
    text.style.display ="flex";
   });
   btnSecondery.addEventListener("click", () => {
    const nouvellePage="troisiemePage.html";
    window.location.href=nouvellePage;
   });
  //  cart.addEventListener("click", () => {
  //   const nouvellePage="troisiemePage.html";
  //   window.location.href=nouvellePage;
  //  });
 
         