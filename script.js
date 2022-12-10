window.onload = function(){
  
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');
 
  prevBtn.addEventListener("click",function(){
    prevSlide();
 });
  nextBtn.addEventListener("click",function(){
    nextSlide();
 });
  
}
let slideNumber = 0;
const prevSlide = () =>{
  const slides = document.getElementsByClassName('slides');
const slider = document.getElementById("slider");
  const currentSlide = slider.getElementsByClassName('current');
  currentSlide[0].classList.remove("current");
  if(slideNumber == 0){
    slideNumber = slides.length-1;
  }
  else{
      slideNumber = slideNumber-1;
  }
  slides[slideNumber].classList.add("current");
}
const nextSlide = () =>{
  const slides = document.getElementsByClassName('slides');
const slider = document.getElementById("slider");
  const currentSlide = slider.getElementsByClassName('current');
  currentSlide[0].classList.remove("current");
  if(slideNumber == (slides.length-1)){
    slideNumber = 0;
  }
  else{
      slideNumber = slideNumber+1;
  }
  slides[slideNumber].classList.add("current");
}


VanillaTilt.init(document.querySelectorAll(".box"), {
  max: 25,
      speed: 400,
      easing:"cubic-bezier(.03,.98,.52,.99)",
      perspective:500,
      transition:true
  });






  var content = document.querySelector('.content');
var duplicate = content.cloneNode(true);
var contentBlurred = document.createElement('div');
contentBlurred.className = 'content-blurred';
contentBlurred.appendChild(duplicate);

var header = document.querySelector('header');
header.appendChild(contentBlurred);

var contentWrapper = document.querySelector('.content-wrapper'),
translation;

contentWrapper.addEventListener('scroll',function(){
  translation = 'translate3d(0,' + (-this.scrollTop + 'px') + ',0)';
  duplicate.style['-webkit-transform'] = translation;
  duplicate.style['-moz-transform'] = translation;
  duplicate.style['-ms-transform'] = translation;
  duplicate.style['transform'] = translation;
  
  console.log(duplicate);
});

// offset to demo blurring
contentWrapper.scrollTop = 140;



// offset to demo blurring


