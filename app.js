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
axios
  .get("https://swapi.co/api/planets/")
  .then(({ data }) => {
    console.log(data);
    console.log("FIRST PAGE");
    for (let planet of data.results) {
      console.log(planet.name);
    }
    return axios.get(data.next);
  })
  .then(({ data }) => {
    console.log("SECOND PAGE");
    for (let planet of data.results) {
      console.log(planet.name);
    }
  })
  .catch(err => {
    console.log(err);
  });
