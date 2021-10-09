let baseURL = "https://wttr.in/";
// Detroit
// " ?format=j1";
let form = document.querySelector("form#weather-selector");


form.addEventListener("submit", (e)=>{
    e.preventDefault();
    let userInput = e.target["input"].value;
    let errMessage = document.querySelector("#error-message")

    // console.log(userInput.join(" "))

    let url = `${baseURL}${userInput}?format=j1`
    console.log(url)

    if(input !== ""){
        fetch(url)
        .then((res)=> {
            return res.json();
            }).then((data) =>{
                console.log(data);
                let currentLocation = document.querySelector("#current-location-data")
                currentLocation.innerHTML = 
                `<div id="city-data-title">
                <h3>New York City</h3>
            </div>
            <ul id="current-location-list-items">
                <li id="area-data">Area: Queens</li>
                <li id="region-data">State: New York</li>
                <li id="country-data">Country: USA</li>
                <li id="feels-like-data">Currently: Feels Like 92°</li>
            </ul>`
            let previousSearch = document.querySelector("#previous-searches-data")
                previousSearch.innerHTML = 
                `<h3>Previous Searches</h3>
                <div id="previous-searches-data-list">
                    <ul id="previous-searches-data-list-items">
                        <li>Melbourne - 37°F</li>
                    </ul>
                </div>`
            let dayData = document.querySelector("#day-data");
                dayData.innerHTML = 
                `<div id="todays-data">
                <div id="todays-data-title">
                    <h3>Today<h3>
                </div>
                <ul id="todays-temperature-data" class="list-items">
                    <li><strong>Average Temperature:</strong> 54°F </li>
                    <li><strong>Max Temperature:</strong> 60°F </li>
                    <li><strong>Min Temperature:</strong> 49°F </li>
                </ul>
            </div>
            <div id="tomorrow-data">
                <div id="tomorrow-data-title">
                    <h3>Tomorrow<h3>
                </div>
                <ul id="tomorrow-temperature-data" class="list-items">
                    <li><strong>Average Temperature: </strong> 54°F </li>
                    <li><strong>Max Temperature: </strong> 60°F </li>
                    <li><strong>Min Temperature: </strong> 49°F </li>
                </ul>
            </div>
            <div id="day-after-tomorrow-data">
                <div id="day-after-tomorrow-title">
                    <h3>Day After Tomorrow<h3>
                </div>
                <ul id="day-after-tomorrow-temperature-data" class="list-items">
                    <li><strong>Average Temperature: </strong> 54°F </li>
                    <li><strong>Max Temperature: </strong> 60°F </li>
                    <li><strong>Min Temperature: </strong> 49°F </li>
                </ul>
            </div>`
            }).catch((err)=>{
                console.log(err);
            })
    }

})
