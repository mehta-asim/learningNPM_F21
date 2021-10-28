function getData(cb) {
  //cb is short for callback, which is just a function we want to run when we use fetch api to retrieve some data
  fetch("./includes/functions.php") //go and get the data
    .then((res) => res.json()) //clean the data and convert it to a plain object
    .then((data) => {
      console.log(data);

      cb(data[0]);
    })
    .catch((error) => console.error(error));
}

export { getData };
