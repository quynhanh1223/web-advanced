
async function getData() {
    const listGroup = await fetch("https://restcountries.com/v3.1/all");
    const NameCountries = await listGroup.json();
    console.log(NameCountries);
    NameCountries.forEach((item, index) => {
    const name = document.createElement("ul")
    const common = document.createElement("li")
    const official = document.createElement("li")
  
      common.innerText = "Common: Christmas Island";
      official.innerText = "Official: Territory of Christmas Island";
      name.appendChild(common);
      name.appendChild(official);
  
      container.appendChild(name);
      console.log(container.name.official)
    });
  }
  
  getData();