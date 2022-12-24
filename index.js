document.querySelector(".btn").addEventListener("click", see_weather);

function see_weather(){
  let now = new Date().toLocaleDateString('en-us', { weekday:"long", month:"long", day:"numeric"});
  document.getElementsByClassName("container")[0].style.display = "block";
  var cityName = document.getElementById("cityName").value;
  var measurement = document.getElementById("measurement").value;
  if(measurement=="imperial"){
    document.getElementsByClassName("degree")[0].innerHTML = "F";
  }
  else{
    document.getElementsByClassName("degree")[0].innerHTML = "C";
  }
  var link= "https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid=6af564f09172c974760c3acab6ba7a21&units="+ measurement;
  var request = new XMLHttpRequest();
  request.open('GET',link,true);
  request.onload =function(){
    var obj = JSON.parse(this.response);
    document.getElementById('weather').innerHTML = obj.weather[0].description;
    document.getElementById('location').innerHTML = obj.name;
    document.getElementById('date').innerHTML = now;
    document.getElementById('temp').innerHTML = Math.round(obj.main.temp);
    document.getElementById('icon').src = "https://openweathermap.org/img/w/" + obj.weather[0].icon +".png"

  }
  if(request.status>=200 && request.status < 400){
    var temp = obj.main.temp;
  }
  else{
    console.log("the city is not available");
  }
  request.send();
}