console.log("working");

const personEl = document.querySelector(".person");
const shipEl = document.querySelector(".ship");

const PEOPLE_API = "https://swapi.dev/api/people/?page=1";

function fetchStarWars(url) {
  fetch(url)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      renderPeopleTable(personEl, data);
    });
}
personEl.addEventListener("click", function () {
  fetchStarWars(PEOPLE_API);
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
  <h1 class="people">StarWars People</h1>
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
    fetchStarWars(peopleData.previous);
  });
  peopleNextBtn.addEventListener("click", function () {
    fetchStarWars(peopleData.next);
  });
}

/*function renderStarShipsTable(containerEl, starshipsData) {
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
 
 <div class="preload" >
</div>
<h1 class="peopleHeading">StarWars StarShips</h1>
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
}*/
