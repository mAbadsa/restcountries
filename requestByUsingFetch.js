const getRescountries = async (countryCode) => {
    const res = await fetch('https://restcountries.eu/rest/v2/all', {});
    if (res.status === 200) {
        const data = await res.json();
        return data.find(el => {
            return el.alpha2Code === countryCode;
        });
    } else {
        throw new Error('Unable to fetch data!!!');
    }
}

const getRescountriesOld = (countryCode) => {
    return fetch('https://restcountries.eu/rest/v2/all', {}).then(res => {
        if (res.status === 200) {
            return res.json();
        } else {
            throw new Error('Unable to fetch data!!!');
        }
    }).then(data => {
        return data.find(el => {
            return el.alpha2Code === countryCode;
        });
    })
}