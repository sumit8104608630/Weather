const button=document.querySelector(".location")
const button0=document.querySelector(".current-location")
const result=document.querySelector(".result")

button.addEventListener('click',async()=>{
    const input=document.getElementById("inputs").value

    await fetch(`https://api.weatherapi.com/v1/current.json?key=c439c42335c34f1aa75135535242405&q=${input}&aqi=yes`)
    .then((res)=>res.json()).then((data)=>{
        console.log(data)
        result.innerHTML=`Location : <i class="fa-solid fa-location-dot" style="color: #000000;"></i> <strong style="color:green"> ${data.location.name} </strong><br> Country <strong style="color:green"> ${data.location.country} </strong><br> Temperature in celsius: <i class="fa-solid fa-temperature-high" style="color: #000000;"></i><strong style="color:red"> ${data.current.temp_c} </strong><br> Temperature Fahrenheit :  <strong style="color:blue"> ${data.current.temp_f} </strong>`
        console.log(data.current.temp_c)
    })
})
async function currentWeather(position){
    await  wheather(position.coords.latitude,position.coords.longitude)
}
function errors(){
    alert("please Allow the Location")
}
 async function wheather(lat,lon){
    await fetch(`https://api.weatherapi.com/v1/current.json?key=c439c42335c34f1aa75135535242405&q=${lat},${lon}&aqi=yes`)
    .then((res)=>res.json()).then((data)=>{
        result.innerHTML=`Location : <i class="fa-solid fa-location-dot" style="color: #000000;"></i> <strong style="color:green"> ${data.location.name} </strong><br> Country <strong style="color:green"> ${data.location.country} </strong><br> Temperature in celsius: <i class="fa-solid fa-temperature-high" style="color: #000000;"></i><strong style="color:red"> ${data.current.temp_c} </strong><br> Temperature Fahrenheit :  <strong style="color:blue"> ${data.current.temp_f} </strong>`
        console.log(data.current.temp_c)

    })
}
button0.addEventListener('click',async()=>{
    navigator.geolocation.getCurrentPosition(currentWeather,errors)
  
})
