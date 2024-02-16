const box = document.querySelector("#box");
const i = document.querySelector("i");
box.addEventListener("dblclick", () => {

  
    i.style.transform = 'translate(-50%,-50%) scale(1)'
 
    setTimeout(()=>{
        
        i.style.transform = 'translate(-50%,-50%) scale(0)'
        i.style.display = "none"

    },1000)



})