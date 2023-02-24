const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "27596ff1demshf94d8f9a23713f1p10bc3ejsn3a9211a091b4",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather=(city)=>{
  
	cityName.innerHTML=city.toUpperCase();
fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+city,
  options
)
  .then((response) => response.json())
  .then((response) => {

	console.log(response)
       
    cloud_pct.innerHTML = response.cloud_pct
    temp.innerHTML = response.temp
    feels_like.innerHTML = response.feels_like
    humidity.innerHTML = response.humidity
    min_temp.innerHTML = response.min_temp
    max_temp.innerHTML = response.max_temp
    wind_speed.innerHTML = response.wind_speed
    wind_degrees.innerHTML = response.wind_degrees
    sunrise.innerHTML = response.sunrise
    sunset.innerHTML = response.sunset

  })

  .catch((err) => console.error(err));
}

const getWeatherConst=(city)=>{
	fetch(
		"https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+city,
		options
	  )
		.then((response) => response.json())
		.then((response) => {
	  
		  console.log(response)
	  
		  
		  document.getElementById(city+"cloud_pct").innerHTML = response.cloud_pct
		  document.getElementById(city+"temp").innerHTML = response.temp
		  document.getElementById(city+"feels_like").innerHTML = response.feels_like
		  document.getElementById(city+"humidity").innerHTML = response.humidity
		  document.getElementById(city+"min_temp").innerHTML = response.min_temp
		  document.getElementById(city+"max_temp").innerHTML = response.max_temp
		  document.getElementById(city+"wind_speed").innerHTML = response.wind_speed
		  document.getElementById(city+"wind_degrees").innerHTML = response.wind_degrees
		  document.getElementById(city+"sunrise").innerHTML = response.sunrise
		  document.getElementById(city+"sunset").innerHTML = response.sunset
	  
		})
	  
		.catch((err) => console.error(err));
}

submit.addEventListener("click",(e)=>{
	e.preventDefault();
	getWeather(cityValue.value);
})

getWeatherConst("lucknow");
getWeatherConst("noida");
getWeatherConst("bangalore");
getWeatherConst("mumbai");

getWeather("Delhi");