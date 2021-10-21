(() => {
  const theTeam = document.querySelector("#teamSection"),
    theTemplate = document.querySelector("#bio-template").content;
  // set up a fetch fn to get some data

  function getData() {
    fetch("./data.json") //go and get the data
      .then((res) => res.json()) //clean the data and convert it to a plain object
      .then((data) => {
        console.log(data);

        buildTeam(data);
      })
      .catch((error) => console.error(error));
  }

  function buildTeam(info) {
    //grab the keys from the data object (the names)
    const people = Object.keys(info);

    people.forEach((person) => {
      let panel = theTemplate.cloneNode(true); // make a copy of template content
      let containers = panel.firstElementChild.children; //get a reference to the template content

      // cycle through elements inside the <section> tage in <template> tag
      // and update their attributes

      //add the image
      containers[0].querySelector("img").src = `images/${info[person].biopic}`;

      // update the text
      containers[1].textContent = info[person].name;
      containers[2].textContent = info[person].role;
      containers[3].textContent = info[person].nickname;

      theTeam.appendChild(panel);
    });
  }

  getData();
})();
