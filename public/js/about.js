const img2 = document.getElementById("img2");
const long = document.getElementsByClassName("long");
const span = document.getElementsByClassName("spanWords");

img2.addEventListener("click",()=>{
    navigator.clipboard.writeText("pushpendrapal9516@gmail.com"); 
    let div = document.createElement("div");
    div.classList.add("popUpDiv");
    div.innerHTML = "Email Copied !!";
    document.body.appendChild(div);
    console.log(div);
    document.body.appendChild(div);
    setTimeout(() => {
        div.style.display = "none"
    }, 3000);
});
img2.addEventListener("mouseover",()=>{
    let div = document.createElement("div");
    div.setAttribute('id',"emailDiv");
    div.innerHTML = "pushpendrapal9516@gmail.com";
    document.body.appendChild(div);
    setTimeout(() => {
        div.style.display = "none"
    }, 3000);
});

let oldValue = 0
let newValue = 0
let timer;

window.addEventListener('scroll', (e) => {

    clearTimeout(timer);

  newValue = window.pageYOffset;
  if (oldValue < newValue) {
    console.log("going down");
    for (let i = 0; i < span.length; i++) {
    span[i].style.transform = "rotate(1deg) scale(1,1.1)";
        
    }


  } else if (oldValue > newValue) {
    console.log("going up");
    for (let i = 0; i < span.length; i++) {
    span[i].style.transform = "rotate(-1deg) scale(1,1.1)";
           
       }

  }
  oldValue = newValue;

  timer = setTimeout(()=> {
    long[0].style.transform = "rotate(0deg)";
    for (let i = 0; i < span.length; i++) {
     span[i].style.transform =  " scale(1,1)";
        
    }
}, 50);

});

setInterval(() => {
    let scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    // console.log(scrollTop);
 if(scrollTop <= 29 ){
     line1.classList.add("active");
     line2.classList.remove("active");
     line3.classList.remove("active");
     line4.classList.remove("active");
     line5.classList.remove("active");
     line6.classList.remove("active");
     line7.classList.remove("active");
     line8.classList.remove("active");
 }
 if(  29 < scrollTop  && scrollTop <= 200 ){
     line1.classList.remove("active");
     line2.classList.add("active");
     line3.classList.remove("active");
     line4.classList.remove("active");
     line5.classList.remove("active");
     line6.classList.remove("active");
     line7.classList.remove("active");
     line8.classList.remove("active");
 }
 if(  200 < scrollTop  && scrollTop <= 370 ){
     line1.classList.remove("active");
     line2.classList.remove("active");
     line3.classList.add("active");
     line4.classList.remove("active");
     line5.classList.remove("active");
     line6.classList.remove("active");
     line7.classList.remove("active");
     line8.classList.remove("active");
 }
 if(  370 < scrollTop  && scrollTop <= 560 ){
     line1.classList.remove("active");
     line2.classList.remove("active");
     line3.classList.remove("active");
     line4.classList.add("active");
     line5.classList.remove("active");
     line6.classList.remove("active");
     line7.classList.remove("active");
     line8.classList.remove("active");
 }
 if(  560 < scrollTop  && scrollTop <= 738 ){
     line1.classList.remove("active");
     line2.classList.remove("active");
     line3.classList.remove("active");
     line4.classList.remove("active");
     line5.classList.add("active");  
     line6.classList.remove("active");
     line7.classList.remove("active");
     line8.classList.remove("active");
 }
 if(  738 < scrollTop  && scrollTop <= 905 ){
     line1.classList.remove("active");
     line2.classList.remove("active");
     line3.classList.remove("active");
     line4.classList.remove("active");
     line5.classList.remove("active");  
     line6.classList.add("active");
     line7.classList.remove("active");
     line8.classList.remove("active");
 }
 if(  905 < scrollTop  && scrollTop <= 1120 ){
     line1.classList.remove("active");
     line2.classList.remove("active");
     line3.classList.remove("active");
     line4.classList.remove("active");
     line5.classList.remove("active");  
     line6.classList.remove("active");
     line7.classList.add("active");
     line8.classList.remove("active");
 }
 if(  1120 < scrollTop){
     line1.classList.remove("active");
     line2.classList.remove("active");
     line3.classList.remove("active");
     line4.classList.remove("active");
     line5.classList.remove("active");  
     line6.classList.remove("active");
     line7.classList.remove("active");
     line8.classList.add("active");
 }



}, 50);
