const img2 = document.getElementById("img2");
img2.addEventListener("click",()=>{
    navigator.clipboard.writeText("pushpendrapal9516@gmail.com"); 
    let div = document.createElement("div");
    div.classList.add("popUpDiv");
    div.innerHTML = "Email Copied !!";
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
