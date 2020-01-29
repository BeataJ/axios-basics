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
axios.get("https://swapi.co/api/planets/").then(({ data }) => {
  console.log(data);
});
