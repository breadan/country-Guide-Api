//1 catch element
let searchBtn = document.querySelector("#search-btn");
let countryInp = document.querySelector("#country-inp");

//3 to show data
let result = document.querySelector("#result");

// 2 create Event
searchBtn.addEventListener("click", () => {
  //catch value from input
  let countryName = countryInp.value;

  //Url
  let finalUrl = `https://restcountries.com/v3.1/name/${countryName}?fullText=true
    `;
  //To Test
  console.log(finalUrl);

  fetch(finalUrl)
    .then((Response) => Response.json())
    .then((data) => {
      //Test
      console.log(data[0]);
      console.log(data[0].capital); //
      console.log(data[0].altSpellings[1]);
      console.log(data[0].flags.svg); //
      console.log(data[0].name.common); //
      console.log(data[0].continents[0]); //
      console.log(Object.keys(data[0].currencies)[0]); //
      console.log(data[0].currencies[Object.keys(data[0].currencies)].name); //
      console.log(
        Object.values(data[0].languages).toString().split(",").join(",")
      );

      result.innerHTML = `
        <img src="${data[0].flags.svg}" class = "flag-img ">
        <h2>${data[0].name.common}</h2>
        <div class = "wrapper">
            <div class = data-wrapper>
                <h4>Capital:</h4>
                <span>${data[0].capital}</span>
            </div>
        </div>
        <div class = "wrapper">
            <div class = data-wrapper>
                <h4>Continent:</h4>
                <span>${data[0].continents[0]}</span>
            </div>
        </div>
        <div class = "wrapper">
            <div class = data-wrapper>
                <h4>Population:</h4>
                <span>${data[0].population}</span>
            </div>
        </div>
        <div class = "wrapper">
            <div class = data-wrapper>
                <h4>Currency:</h4>
                <span>${
                  data[0].currencies[Object.keys(data[0].currencies)].name
                }
                 - ${Object.keys(data[0].currencies)[0]}
                
                </span>
            </div>
        </div>
        <div class = "wrapper">
            <div class = data-wrapper>
                <h4>Common Language:</h4>
                <span>${Object.values(data[0].languages)
                  .toString()
                  .split(",")
                  .join(",")}</span>
            </div>
        </div>
        <div class = "wrapper">
            <div class = data-wrapper>
                <h4>Peoples:</h4>
                <span>${data[0].altSpellings[1]}</span>
            </div>
        </div>
        
        `;
    }).catch(() => {
        if(countryName.length == 0 ) {
            result.innerHTML = `<h3> The Input Failed</h3>`
        } else {
            result.innerHTML = `<h3> Please Enter A Name Of Country</h3>`
        }
    })
});
