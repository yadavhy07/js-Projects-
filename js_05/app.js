const el = document.querySelectorAll(".el");
el.forEach((el)=>{
    // console.log(el.childNodes[1]);
el.addEventListener("mouseenter", ()=>{
 el.childNodes[1].style.opacity = 1
})
el.addEventListener("mouseleave",()=>{
    el.childNodes[1].style.opacity = 0
})
el.addEventListener("mousemove",(me)=>{
    el.childNodes[1].style.left = me.x+"px"
    // el.childNodes[1].style.top = me.y+"px"
})
})