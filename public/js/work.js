
const img2 = document.getElementById("img2");
const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");

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

setInterval(() => {
    let scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    if(scrollTop < 300 ){
        line1.classList.add("active");
     line2.classList.remove("active");
     line3.classList.remove("active");
    }
    else if(300<=scrollTop && scrollTop<840){
        line1.classList.remove("active");
     line2.classList.add("active");
     line3.classList.remove("active");
    }
    else if(840 <=scrollTop  && scrollTop<=1350){
        line1.classList.remove("active");
     line2.classList.remove("active");
     line3.classList.add("active");
    }
}, 50);




