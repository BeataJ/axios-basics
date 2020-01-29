axios
  .get("https://swapi.co/api/planets/")
  .then(res => {
    console.log(res.data);
  })
  .catch(err => {
    console.log(err);
  });
