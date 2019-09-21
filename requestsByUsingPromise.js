const getRescountries = (countryCode) => new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', e => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText);
            const myData = data.find(el => {
                return el.alpha2Code === countryCode;
            });
            resolve(myData);
        } else if (e.target.readyState === 4) {
            reject('Unable to fetch data!');
        }
    })

    request.open('GET', 'https://restcountries.eu/rest/v2/all');
    request.send();
})