const coutryEl = document.querySelector('#countries');

const request = new XMLHttpRequest();

request.addEventListener('readystatechange', e => {
    if(e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText);
        // console.log(data[171]);
        const countryCode = "PS";
        const myData = data.find(el => {
            return el.alpha2Code === countryCode;
        })
        console.log(myData);
        coutryEl.innerHTML = "The name : " + "<span class=\"name-country\">" + myData.altSpellings[1] + "</span>" + "<br>" + " Alpha 2 Code : " + "<span class=\"name-country\">" + myData.alpha2Code + "</span>";
    } else if (e.target.readyState === 4) {
        console.log('An error has been ocyrred!');
    }
})

request.open('GET', 'https://restcountries.eu/rest/v2/all');
request.send();