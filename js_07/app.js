// const box1 = document.querySelector("#box1");
// const box2 = document.querySelector("#box2");
// const box3 = document.querySelector("#box3");
// const box4 = document.querySelector("#box4");


// box1.addEventListener("click",()=>{
//     document.body.style.backgroundColor = "aqua"
// })
// box2.addEventListener("click",()=>{
//     document.body.style.backgroundColor = "blue"
// })
// box3.addEventListener("click",()=>{
//     document.body.style.backgroundColor = "blueviolet"
// })
// box4.addEventListener("click",()=>{
//     document.body.style.backgroundColor = "rgb(69, 39, 70)"
// })

const body = document.body
const box = document.querySelectorAll(".divbox");
box.forEach((btn)=>{
btn.addEventListener("click",(e)=>{

if (e.target.id == "box1") {
    body.style.backgroundColor = "aqua"
}
})
})