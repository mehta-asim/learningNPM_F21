//import statements go at the top
import { getData } from "./components/TheDataMiner.js";

(() => {
  const theTeam = document.querySelector("#teamSection"),
    theTemplate = document.querySelector("#bio-template").content;
  // set up a fetch fn to get some data

  // function getData() {
  //   fetch("./includes/functions.php") //go and get the data
  //     .then((res) => res.json()) //clean the data and convert it to a plain object
  //     .then((data) => {
  //       console.log(data);

  //       buildTeam(data[0]);
  //     })
  //     .catch((error) => console.error(error));
  // }

  function buildTeam(info) {
    debugger;
    //grab the keys from the data object (the names)

    info.forEach((person) => {
      let panel = theTemplate.cloneNode(true); // make a copy of template content
      let containers = panel.firstElementChild.children; //get a reference to the template content
      debugger;

      // cycle through elements inside the <section> tage in <template> tag
      // and update their attributes

      //add the image
      containers[0].querySelector("img").src = `images/${person.biopic}`;
      debugger;

      // update the text
      containers[1].textContent = person.name;
      containers[2].textContent = person.role;
      containers[3].textContent = person.nickname;

      theTeam.appendChild(panel);
    });
  }

  getData(buildTeam);
})();
