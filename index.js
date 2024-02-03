const apiKey="a3e549bc6f66890b34c1fbf54859bdba";
const input=document.querySelector(".search input");
const button=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");
let place="bangalore"
const apiUrl=`https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;
const error=document.querySelector(".error")
const weather=document.querySelector(".weather");


async function checkWeather(){
    place=input.value;
    const response =await fetch(apiUrl+place+`&appid=${apiKey}`);
    var data=await response.json();

    console.log(data); 
if(response.status==404){
    error.style.display="block";
    weather.style.display="none";
}
else{
    weather.style.display="block";
document.querySelector(".city").innerHTML=data.name;
document.querySelector(".temp").innerHTML=Math.round(data.main.temp) +"°C";
document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
document.querySelector(".wind").innerHTML=data.wind.speed+"km/hr";

if(data.weather[0].main=="Clouds"){
    weatherIcon.src="images/clouds.png"
}
if(data.weather[0].main=="Clear"){
    weatherIcon.src="images/clear.png"
}
if(data.weather[0].main=="Rain"){
    weatherIcon.src="images/rain.png"
}
if(data.weather[0].main=="Drizzle"){
    weatherIcon.src="images/drizzle.png"
}
if(data.weather[0].main=="Mist"){
    weatherIcon.src="images/mist.png"
}
error.style.display="none";
}
}

button.addEventListener("click",()=>{
    checkWeather();
})




