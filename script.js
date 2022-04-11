let villeChoisie;
// recevoirTemperature(villeChoisie);

if ("geolocation" in navigator) {
    navigator.geolocation.watchPosition((position) =>{
        const url = 'https://api.openweathermap.org/data/2.5/weather?lon=' + position.coords.longitude + '&lat=' + position.coords.latitude + '&appid=59720dc89a1714b9ab598f9476bef072&units=metric';
        console.log(url);
        let requete = new XMLHttpRequest();
        requete.open ('GET', url),
        requete.responseType = 'json';
        requete.send();


        requete.onload = function () {
            if (requete.readyState === XMLHttpRequest.DONE) {
                if (requete.status === 200) {
                    let reponse = requete.response ;
                    let temperature = reponse.main.temp;
                    let ville = reponse.name;
                    document.querySelector('#temperature_label').textContent = temperature;
                    document.querySelector('#ville').textContent = ville;
                }
                else {
                    alert('Un problème est intervenu, merci de revenir plus tard.');
                }
            }
        }
    }, erreur, options);
}
else {
    villeChoisie = 'Paris';
    recevoirTemperature(villeChoisie);
}

var options = {
    enableHighAccuracy: true
}

let button = document.querySelector('#changer');
button.addEventListener('click', () => {
    villeChoisie = prompt('choisissez une ville');
    recevoirTemperature(villeChoisie);
});

function erreur() {
    villeChoisie = "Paris";
    recevoirTemperature(villeChoisie);
};

function recevoirTemperature (ville) {
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=59720dc89a1714b9ab598f9476bef072&units=metric';

    let requete = new XMLHttpRequest();
    requete.open ('GET', url),
    requete.responseType = 'json';
    requete.send();


    requete.onload = function () {
        if (requete.readyState === XMLHttpRequest.DONE) {
            if (requete.status === 200) {
                let reponse = requete.response ;
                let temperature = reponse.main.temp;
                let ville = reponse.name;
                document.querySelector('#temperature_label').textContent = temperature;
                document.querySelector('#ville').textContent = ville;
            }
            else {
                alert('Un problème est intervenu, merci de revenir plus tard.');
            }
        }
    }
}


