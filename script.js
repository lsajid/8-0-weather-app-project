let baseURL = "https://wttr.in/";
// Detroit
// " ?format=j1";
function callBackData (cityInput, shouldAdd){
    let errMessage = document.querySelector("#error-message")

    console.log(cityInput)

    let url = `${baseURL}${cityInput}?format=j1`
    console.log(url)

    if(input !== ""){
        fetch(url)
        .then((res)=> {
            return res.json();
            }).then((data) =>{

                console.log(data);
                let input = document.querySelector("#input");
                input.value = ""; 
                let inputArea = data.nearest_area[0].areaName[0].value;
                let inputState = data.nearest_area[0].region[0].value;
                let inputCountry = data.nearest_area[0].country[0].value;
                let inputTemp = data.current_condition[0].FeelsLikeF;

                let todayAverage = data.weather[0].avgtempF;
                let todayMax = data.weather[0].maxtempF;
                let todayMin = data.weather[0].mintempF;

                let tomorrowAverage = data.weather[1].avgtempF;
                let tomorrowMax = data.weather[1].maxtempF;
                let tomorrowMin = data.weather[1].mintempF;

                let afterAverage = data.weather[2].avgtempF;
                let afterMax = data.weather[2].maxtempF;
                let afterMin = data.weather[2].mintempF;

                let currentLocation = document.querySelector("#current-location-data");

            currentLocation.innerHTML = 
                `<div id="city-data-title">
                <h3>${inputArea}</h3>
            <ul id="current-location-list-items">
                <li id="area-data"><strong>Area:</strong> ${inputArea}</li>
                <li id="region-data"><strong>State:</strong> ${inputState}</li>
                <li id="country-data"><strong>Country:</strong> ${inputCountry}</li>
                <li id="feels-like-data"><strong>Currently:</strong> Feels Like ${inputTemp}°F</li>
            </ul>
            </div>
            <div id ="day-data"></div>
            `
            let dayData = document.querySelector("#day-data");
            dayData.innerHTML =
            `<div id="todays-data">
                <div id="todays-data-title">
                    <h3>Today<h3>
                </div>
                <ul id="todays-temperature-data" class="list-items">
                    <li><strong>Average Temperature:</strong> ${todayAverage}°F </li>
                    <li><strong>Max Temperature:</strong> ${todayMax}°F </li>
                    <li><strong>Min Temperature:</strong> ${todayMin}°F </li>
                </ul>
            </div>
            <div id="tomorrow-data">
                <div id="tomorrow-data-title">
                    <h3>Tomorrow<h3>
                </div>
                <ul id="tomorrow-temperature-data" class="list-items">
                    <li><strong>Average Temperature: </strong> ${tomorrowAverage}°F </li>
                    <li><strong>Max Temperature: </strong> ${tomorrowMax}°F </li>
                    <li><strong>Min Temperature: </strong> ${tomorrowMin}°F </li>
                </ul>
            </div>
            <div id="day-after-tomorrow-data">
                <div id="day-after-tomorrow-title">
                    <h3>Day After Tomorrow<h3>
                </div>
                <ul id="day-after-tomorrow-temperature-data" class="list-items">
                    <li><strong>Average Temperature: </strong> ${afterAverage}°F </li>
                    <li><strong>Max Temperature: </strong> ${afterMax}°F </li>
                    <li><strong>Min Temperature: </strong> ${afterMin}°F </li>
                </ul>
            </div>`

            if(shouldAdd){
                let preSearchData = document.querySelector(".history");
                let preSearchListContainer = document.createElement("div");
                preSearchListContainer.classList.add("previous-searches-data-container");
                let ul = document.createElement("ul");
                let li = document.createElement("li");
                li.textContent = ` - ${inputTemp}˚F`
                let anchorTag = document.createElement("a");
                anchorTag.textContent = inputArea;
                anchorTag.setAttribute("href", "#")
                
                let placeholder = document.querySelector("#previous-searches-place");
                li.prepend(anchorTag)
    
                if(placeholder){
                    placeholder.remove();
                }
                ul.append(li);
                preSearchData.append(ul);
    
                anchorTag.addEventListener("click", (event)=>{
                    console.log(event.target.textContent);
                    callBackData(event.target.textContent, false)
                })
            }
            

            })
            .catch((err)=>{
                console.log(err);
            })
    } else {
        errMessage.textContent = "Please Choose an Area."
    }

}


let form = document.querySelector("form#weather-selector");


form.addEventListener("submit", (e)=>{
    e.preventDefault();
    let userInput = e.target["input"].value;
    callBackData(userInput, true)
})