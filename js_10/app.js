
function randomPassword() {
    let password = "";
    let length = 12;
    let charater = "'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+'";

    for (let i = 0; i < length; i++) {
        let random = Math.floor(Math.random()* charater.length)
        password += charater[random];
    }
 document.querySelector("#inp").value = password
}

let btn = document.querySelector("#btn")
btn.addEventListener("click",()=>{
    randomPassword()
})

let charater = "'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+'";

console.log(charater);

