console.log("works");

const inputCountryName = document.querySelector("#site-search");
const buttonSearch = document.querySelector(".button");
const cardContainer = document.querySelector(".card-container");

const COUNTRY_URL = "https://restcountries.com/v3.1/all";

const fetchCountry = async () => {
  try {
    const res = await fetch(`${COUNTRY_URL}`);
    const countryData = await res.json();
    console.log(countryData);
  } catch (error) {
    console.error(error);
  }
};

fetchCountry();
// const generateCountry = (country) => {
//   const cardCountryHTML = country.filter((country) => {
//     return `
//     <section class="cards-container">
//     <div class="card">
//         <div class="flag"><img src="" alt="" /></div>
//         <div>
//         <div>
//           <p> ${country.name} Name:</p>
//           <p> ${country.population}Population:</p>
//           <p> ${country.capital} Capital:</p>
//           <p> ${country.area} Area:</p>
//         </div>
//         </div>
//       </section>
//         `;
//   });
// };

// buttonSearch.addEventListener("click", () => {
//   console.log("Search clicked");
//   fetchCountry("");
// });
