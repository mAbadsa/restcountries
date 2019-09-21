const getRescountries = (countryCode) => {
    return fetch('https://restcountries.eu/rest/v2/all', {}).then(res => {
        if(res.status === 200) {
            return res.json();
        } else {
            throw new Error('Unable to fetch data!!!');
        }
    }).then(data => {
        return data.find(el => {
            return el.alpha2Code === countryCode;
        });
        // return myData;
    })
}