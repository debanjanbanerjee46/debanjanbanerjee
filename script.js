

document.querySelector('.skillcont').style.display='flex';
document.querySelector('.educont').style.display='none';
document.querySelector('.skill').style.background='rgb(199, 103, 19)';
document.querySelector('.skill').style.color='white'
document.querySelector('.skill').addEventListener("click",()=>{
    document.querySelector('.educont').style.display='none'
    document.querySelector('.skillcont').style.display='flex'
    document.querySelector('.skill').style.background='rgb(199, 103, 19)'
    document.querySelector('.skill').style.color='white'
    document.querySelector('.education').style.background='transparent'
    document.querySelector('.education').style.color='#7a7988'
    

})

let icon=document.getElementById("ham3");

       
        icon.addEventListener("click",()=>{
           if(document.querySelector('.navbar').classList.contains('navbargo')){
            document.querySelector('.navbar').classList.remove('navbargo');
            document.querySelector('.ham').classList.remove('hamgo');
           }
           else{
            document.querySelector('.navbar').classList.add('navbargo');
            document.querySelector('.ham').classList.add('hamgo');
            
           }
        })
document.querySelector('.education').addEventListener("click",()=>{
    
    document.querySelector('.skillcont').style.display='none'
    document.querySelector('.educont').style.display='flex'
    document.querySelector('.education').style.background='rgb(199, 103, 19)'
    document.querySelector('.skill').style.background='transparent'
    document.querySelector('.education').style.color='white'
    document.querySelector('.skill').style.color='#7a7988'
})
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".navbar ul li");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
});
