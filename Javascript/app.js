setInterval(function () {
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
}, 1000);
