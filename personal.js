const date = document.getElementById('date');
date.innerHTML= `${new Date().getFullYear()}`;
const navToggle = document.querySelector('.nav-toggle');
const linksContainer=  document.querySelector('.link-container');
const link= document.querySelector('.links');
const slide = document.querySelectorAll('.slides img');
const slider =document.querySelectorAll('.slider')
const btn = document.querySelectorAll('.btn ')
const vI = document.getElementById('imgview');
let slideindex=0;
let intervalId=null;


window.addEventListener('scroll',()=>{
    const upbtn = document.getElementById('upbtn');
    if(window.scrollY>200){
        upbtn.style.display="block";

    }
    else{
        upbtn.style.display="none";

    }
})



    vI.addEventListener('click',()=>{
       vI.classList.toggle('viewbtn');
       
        Initialslider();
        btn[0].classList.toggle('vis');
        btn[1].classList.toggle('vis');

        if (vI.textContent === "View Images") {
            vI.textContent = "Close";
        } else {
            vI.textContent = "View Images";
        }
        

        
       
       
       
    })
    



function Initialslider(){
    if(slide.length>0){
        slide[slideindex].classList.toggle('displayimg');
        
    }
       

}
function showSlide(index){

    if(index>=slide.length){
        slideindex=0;

    }
    else if(index<0){
        slideindex=slide.length-1;
    }

    slide.forEach(slide=>{
        slide.classList.remove("displayimg");
    });
    slide[slideindex].classList.add("displayimg");
}

function prevSlide(){
    slideindex--;
    showSlide(slideindex);

}

function nextSlide(){
    slideindex++;
    showSlide(slideindex);


}
navToggle.addEventListener('click',()=>{
    linksContainer.classList.toggle('show-links')
})