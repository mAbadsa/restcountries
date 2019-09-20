const getRescountries = (countryCode = 'PS', callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', e => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText);
            const myData = data.find(el => {
                return el.alpha2Code === countryCode;
            });
            callback(null, myData);
        } else if (e.target.readyState === 4) {
            callback('Unable to fetch data!', null);
        }
    })

    request.open('GET', 'https://restcountries.eu/rest/v2/all');
    request.send();
}