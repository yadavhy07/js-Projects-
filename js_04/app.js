const curser = document.querySelector("#curser");
const main = document.querySelector("#main");
main.addEventListener("mousemove",(e)=>{
   curser.style.left = e.x+"px"
   curser.style.top = e.y+"px"
})