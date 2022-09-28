let loc =document.getElementById("location");
let tempicon =document.getElementById("temp-icon");
let tempvalue =document.getElementById("temp-value");
let climate = document.getElementById("climate");
let iconfile;
const searchInput =document.getElementById("search-input").value;
const searchButton =document.getElementById("search-button");


    function getresult2(){
    let long;
    let lat;
      const searchInput =document.getElementById("search-input").value;
      console.log(searchInput);
        
         const api ="https://api.openweathermap.org/data/2.5/weather?q="+searchInput+"&appid=54f9ffa09163872cb51316458c7c0e32"

     fetch(api).then((response) =>{
      console.log("sonali" +response.json()); 
        return response.json();
        
     })

     .then (data => 
        {

            const{name}=data;
            const{feels_like}=data.main;
            const{id,main}=data.weather[0];

            loc.textContent=name;
            climate.textContent=main;
            tempvalue.textContent=Math.round(feels_like-273);

             console.log("data" +data);
     })
    }

    function getresult() {
      var city = document.getElementById("search-input").value;
      var coord = getCoord(city);
      console.log(coord);
      var url = "https://api.openweathermap.org/data/2.5/weather?lat="+coord[0]+"&lon="+coord[1]+"&appid=1b697c30bd850371dd8c7c0ba2669f8a";
      var result = httpGet(url);
      console.log(result);
      var name = city;
      loc.textContent=name;
      climate.textContent=result.weather[0].main;
      tempvalue.textContent= (result.main.temp - 273.15).toFixed(2);
      // tempicon.src= result.current.condition.icon;
    }

    function httpGet(theUrl) {
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.open("GET", theUrl, false); // false for synchronous request
      xmlHttp.send(null);
      return JSON.parse(xmlHttp.responseText);
    }

    function httpGet2(theUrl) {
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.open("GET", theUrl, false); // false for synchronous request
      xmlHttp.send(null);
      var result = xmlHttp.responseText;
      result = result.slice(1,result.length-1);
      return JSON.parse(result);
    }

    function getCoord(city)
    {
      var url = "https://api.openweathermap.org/geo/1.0/direct?q="+city+"&appid=1b697c30bd850371dd8c7c0ba2669f8a";
      var result = httpGet2(url);
      console.log(result.lat,result.lon)
      var coord = [result.lat, result.lon];
      return coord;
    }
