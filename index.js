const createLi = (country) => {

    const li = document.createElement('li');

    //add user details to li

    li.textContent = `${country.name}`;
    return li;
}

    const appendToDom = (countries) => {

        const ul = document.querySelector('ul');
        // iterate over all users
        countries.map (country  => {
            ul.appendChild(createLi(country))
        });
    };

    const FetchCountries = () => {

        axios.get('https://restcountries.eu/rest/v2/all')

        .then( response => {
            const countries = response.data;
            console.log (`GET list of countries`, countries);

            // append to Dom

            appendToDom(countries);
        })

        .catch(error => console.error(error));
    };

    FetchCountries();