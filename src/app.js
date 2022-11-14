import axios from "axios";

console.log('Hallo daar! Dit is een nieuw stuk tekst voor een nieuwe pull request');

const list = document.getElementById("countries-list")

//Data fetchen

//Assynchrone functie maken
//Try Catch blok met een catch om alle errors af te vangen
//Try Blok om de response van een API op te vangen met behulp van axios
async function dataFetchen(){


    try{

        const response = await axios.get('https://restcountries.com/v2/all')
        const countries = response.data
        console.log(response.data[0].name)
    //    referentie maken naar ul in HTML
        const countryList = document.getElementById("countries-list")
    //    Aanmaken van li item in onze ul via string interpolation data injecteren in elk li item
        //    Via string interpolation de populatie injecteren met de volgende tekstHas a population of [amount] people
        //Mappen door de array van countries en de html per country weergeven

        //Sort array methode om van de landen van laag naar hoog te sorteren
        countries.sort((a, b)=>{
            return a.population - b.population
        })


        countries.map(( country )=>{
            countryList.innerHTML +=
                `<li>
                <h3 class="countries-${ country.region }"> ${ country.name }</h3>
                <p>Has a popualtion of ${country.population} people </p>
                <img src="${country.flags.png}" alt="${country.name}"/>
                </li>`
        })



    } catch (err){
        console.err(err)
        const errMessage = document.getElementById("error-message")
    //    Check welke error er wordt gegeven
        if (err.response.status === 404){
            errMessage.textContent = "Page not found | 404"
        }
        if (err.response.status === 500){
            errMessage.textContent = "Internal server error | 500"
        }
    }

}

dataFetchen()
