(()=>{const e=document.querySelector("[data-condition]"),t=document.querySelector("[data-location]"),r=document.querySelector("[data-degrees]"),n=document.querySelector("[data-feels-like]"),c=document.querySelector("[data-wind-mph]"),o=document.querySelector("[data-humidity]"),u=document.querySelector("[data-error-msg]"),i=document.querySelector("[data-submit]"),a=document.querySelector("[data-submit] input");function d(i){fetch(`//api.weatherapi.com/v1/forecast.json?key=19784bba1e964c2d9bb233359231206&q=${i}`,{mode:"cors"}).then((e=>e.json())).then((i=>{i.error?u.style.display="block":function(u){let i=function(e){return{city:e.name,state:e.region}}(u.location),a=function(e){return{currentTime:e.last_updated,currentTemp:e.temp_f,currentWeather:e.condition.text,currentHumidity:e.humidity,currentWind:e.wind_mph,currentFeelsLike:e.feelslike_f}}(u.current);t.innerText=`${i.city}, ${i.state}`,e.innerText=a.currentWeather,r.innerText=parseInt(a.currentTemp),n.innerText=`FEELS LIKE: ${parseInt(a.currentFeelsLike)}`,c.innerText=`WIND: ${a.currentWind} MPH`,o.innerText=`HUMIDITY: ${a.currentHumidity}`}(i)})).catch((e=>console.error(e)))}i.addEventListener("submit",(e=>{e.preventDefault(),u.style.display="none",d(a.value)})),d("London, UK")})();