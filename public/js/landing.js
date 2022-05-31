const heading = document.getElementById("heading")
const named = document.getElementById("named");
const emailDiv = document.getElementById("emailDiv")

window.addEventListener('mousemove', (event)=>{
    // console.log("pageX: ",event.pageX, 
    // "pageY: ", event.pageY, 
    // "clientX: ", event.clientX, 
    // "clientY:", event.clientY)

    let x = event.pageX - window.innerWidth/2;
    let y = event.pageY - window.innerHeight/2;

    // console.log(x, y);

    heading.style.transform = `translate(${-x/600}rem,${-y/600}rem)`;
    // heading.style.textShadow =  `${x/100}px ${y/100}px 10px #ff0000`;
});

const img2 = document.getElementById("img2");
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




