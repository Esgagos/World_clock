function updateTime() {
  // sydney
  const sydneyDateElement = document.querySelector("#sydneyDate");
  const sydneyTimeElement = document.querySelector("#sydneyTime");
  const sydneyDate = moment().tz("Australia/sydney");
  sydneyDateElement.innerHTML = sydneyDate.format("MMMM Do YYYY");
  sydneyTimeElement.innerHTML = sydneyDate.format("H:m:s [<small>]A[</small>]");

  // london
  const londonDateElement = document.querySelector("#londonDate");
  const londonTimeElement = document.querySelector("#londonTime");
  const londonDate = moment().tz("Europe/London");
  londonDateElement.innerHTML = londonDate.format("MMMM Do YYYY");
  londonTimeElement.innerHTML = londonDate.format("H:m:s [<small>]A[</small>]");

  // madrid
  const madridDateElement = document.querySelector("#madridDate");
  const madridTimeElement = document.querySelector("#madridTime");
  const madridDate = moment().tz("Europe/Madrid");
  madridDateElement.innerHTML = madridDate.format("MMMM Do YYYY");
  madridTimeElement.innerHTML = madridDate.format("H:m:s [<small>]A[</small>]");
}

function updateCity(event) {
  let city = event.target.value;
  if (city === "current") {
    city = moment.tz.guess();
    console.log(city);
  }
  const cityName = city.replace("_", " ").split("/")[1];
  const cityDate = moment().tz(city).format("MMMM Do YYYY");
  const cityTime = moment().tz(city).format("H:m:s [<small>]A[</small>]");

  let listContainerElement = document.querySelector("#list-container");
  listContainerElement.innerHTML = `<div class="list-container" id="list-container">
    <ul class="city-grid">
          <li class="city-name">${cityName}</li>
          <li class="time">${cityTime}<small></li>
          <li class="date">${cityDate}</li>
        </ul>
        <hr />
    </div>
    <a href="/" class="link-homepage">Back to homepage</a>`;
}
updateTime();
setInterval(updateTime, 1000);
let selectCity = document.querySelector("#cities");
let city = selectCity.addEventListener("change", updateCity);
