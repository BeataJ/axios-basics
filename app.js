// **** Axios basics ***
// axios
//   .get("https://swapi.co/api/planets/")
//   .then(res => {
//     console.log(res.data);
//   })
//   .catch(err => {
//     console.log("IN CATCH");
//     console.log(err);
//   });

// ******* Axios chain request ******

const fetchNextPlanets = (url = "https://swapi.co/api/planets/") => {
  return axios.get(url);
};

const printPlanets = ({ data }) => {
  console.log(data);
  console.log("**********");
  for (let planet of data.results) {
    console.log(planet.name);
  }
  return Promise.resolve(data.next);
};

fetchNextPlanets()
  .then(printPlanets)
  .then(fetchNextPlanets)
  .then(printPlanets)
  .then(fetchNextPlanets)
  .then(printPlanets)
  .catch(err => {
    console.log(err);
  });
