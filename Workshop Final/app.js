console.log("working");

const personEl = document.querySelector(".person");
const shipEl = document.querySelector(".ship");
const tabeleConatainerPerson = document.querySelector(".table-containerPerson");
const tabeleConatainerShip = document.querySelector(".tablecontainerShip");

const PEOPLE_API = "https://swapi.dev/api/people/?page=1";
const SHIP_API = "https://swapi.dev/api/starships/?page=1";

function fetchStarWarsPeople(url) {
  fetch(url)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      renderPeopleTable(tabeleConatainerPerson, data);
    });
}
personEl.addEventListener("click", function () {
  fetchStarWarsPeople(PEOPLE_API);
});
function renderPeopleTable(containerEl, peopleData) {
  let tableHTML = "";

  for (let people of peopleData.results) {
    tableHTML += `
    <tr>
        <td>${people.name}</td>
        <td>${people.height}</td>
        <td>${people.mass}</td>
        <td>${people.gender}</td>
        <td>${people.birth_year}</td>
        <td>${people.films.length}</td>
    </tr>
    `;
  }

  containerEl.innerHTML = `
  <section class="table-container">
  <table class = "mainTable">
  <thead>
   <tr>
       <th>Name</th>
       <th>Height</th>
       <th>Mass</th>
       <th>Gender</th>
       <th>Birth Year</th>
       <th>Appearances</th>
   </tr>
  </thead>
  <tbody>${tableHTML}</tbody>
</table>
</section>
<button id="peoplePrevPage">PreviousPage</button>
<button id="peopleNextPage">NextPage</button>
`;

  const peoplePrevBtn = containerEl.querySelector("#peoplePrevPage");
  const peopleNextBtn = containerEl.querySelector("#peopleNextPage");

  if (!peopleData.previous) {
    peoplePrevBtn.disabled = true;
  }

  if (!peopleData.next) {
    peopleNextBtn.disabled = true;
  }

  peoplePrevBtn.addEventListener("click", function () {
    fetchStarWarsPeople(peopleData.previous);
  });
  peopleNextBtn.addEventListener("click", function () {
    fetchStarWarsPeople(peopleData.next);
  });
}

function fetchStarWarsShip(url) {
  fetch(url)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      renderShipsTable(tabeleConatainerShip, data);
    });
}
shipEl.addEventListener("click", function () {
  fetchStarWarsShip(SHIP_API);
});

function renderShipsTable(containerEl, starshipsData) {
  let tableHTML = "";

  for (let starships of starshipsData.results) {
    tableHTML += `
    <tr>
        <td>${starships.name}</td>
        <td>${starships.model}</td>
        <td>${starships.manufacturer}</td>
        <td>${starships.cost_in_credits}</td>
        <td>${starships.passengers}</td>
        <td>${starships.starship_class}</td>
    </tr>
    `;
  }

  containerEl.innerHTML = `
  <section class="tablecontainerShip">
   <table class = "mainTable">
  <thead>
   <tr>
       <th>Name</th>
       <th>Model</th>
       <th>Manufacturer</th>
       <th>Cost</th>
       <th>People Capacity</th>
       <th>Class</th>
   </tr>
  </thead>
  <tbody>${tableHTML}</tbody>
</table>
</section>
<button id="starshipsPrevPage">PreviousPage</button>
<button id="starshipsNextPage">NextPage</button>`;

  const starshipsPrevBtn = containerEl.querySelector("#starshipsPrevPage");
  const starshipsNextBtn = containerEl.querySelector("#starshipsNextPage");

  if (!starshipsData.previous) {
    starshipsPrevBtn.disabled = true;
  }

  if (!starshipsData.next) {
    starshipsNextBtn.disabled = true;
  }

  starshipsPrevBtn.addEventListener("click", function () {
    fetchStarWarsShip(starshipsData.previous);
  });
  starshipsNextBtn.addEventListener("click", function () {
    fetchStarWarsShip(starshipsData.next);
  });
}
