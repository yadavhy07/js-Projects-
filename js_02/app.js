const btn = document.querySelector("button");
let fleg = 0;
btn.addEventListener("click",()=>{
if (fleg==0) {
   let p = document.querySelector("h4")
    p.innerHTML = "friend♥";
    console.log("friend");
    fleg=1;
}else{
    let p=document.querySelector("h4")
    p.innerHTML = "unfriend🙇‍♀️";
    console.log("unfriend");
    fleg=0
}
})