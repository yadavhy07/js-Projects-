const apikey = "ecf318d8ce8e73ae6560907cd686b8af";
// const city = "delhi"
async function Wederinfo(city) {
   const apicall = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`)
   const responsh = await apicall.json()
   console.log(responsh);

   document.querySelector("#cityandtym h1").innerHTML = responsh.name;

   document.querySelector("#deg h2").innerHTML =Math.round(responsh.main.temp) + "°C "
   
   

    
}
const inp = document.querySelector("#input-box")
const btn = document.querySelector("#searchbtn")

btn.addEventListener("click",()=>{
    Wederinfo(inp.value)
})

const cuurentDate = new Date
const ind = cuurentDate.toLocaleString()
const tym = document.querySelector("#cityandtym p")
tym.innerHTML = ind;

