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
        
         const api ="http://api.openweathermap.org/data/2.5/weather?q="+searchInput+"&appid=54f9ffa09163872cb51316458c7c0e32"

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
      var url =
        "http://api.weatherapi.com/v1/current.json?key=d404d3fe4605434c9dc181853220709&q=" +
        city +
        "&aqi=no";
      var result = httpGet(url);
   
      console.log(result["current"]);
      var name = result.location.name;
      loc.textContent=name;
      climate.textContent=result.current.condition.text;
      tempvalue.textContent= result.current.temp_c;
      tempicon.src= result.current.condition.icon;
    }
    function httpGet(theUrl) {
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.open("GET", theUrl, false); // false for synchronous request
      xmlHttp.send(null);
      return JSON.parse(xmlHttp.responseText);
    }