console.log("working");

const personEl = document.querySelector(".person");
const shipEl = document.querySelector(".ship");

const personUrl = "https://swapi.dev/api/people/?page=1";

function fetchperson() {
  fetch(personUrl)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      renderPersonList(personEl, data);
    });
}
