axios
  .get("https://swapi.co/api/planets500/")
  .then(res => {
    console.log(res.data);
  })
  .catch(err => {
    console.log("IN CATCH");
    console.log(err);
  });
