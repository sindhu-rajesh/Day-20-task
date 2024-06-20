const response = fetch("https://dogapi.dog/api/facts"); //using fetch to get data from api
response
  .then((data) => data.json()) //converting the readable stream
  .then((result) => {
    document.getElementsByClassName("fact")[0].innerHTML = `${result.facts}`; //adding the dog fact in paragraph tag
  });
const button = document.getElementsByClassName("button")[0]; //using a button to reload whenever we reload we will get a new fact from api.
button
  .addEventListener("click", () => {
    window.location.reload();
  })
  .catch((error) => error.alert("No facts right now come again later...")); //if promise get rejected it alert will displayed.