const heading = document.getElementById("heading")
const named = document.getElementById("named");


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
});

