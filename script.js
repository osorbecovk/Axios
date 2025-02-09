let country = document.querySelector(".country");
let more = document.querySelector(".more");
let countries = []; 
let count = 3;

function get() {
    axios(`https://restcountries.com/v3.1/all`)
        .then((res) => {
            countries = res.data;
            countries.sort((a, b) => a.name.common.localeCompare(b.name.common));
            view(countries);
        })
}

function view(arr) {
    let slice = arr.slice(0, count); 
    let html = ""; 
    slice.forEach((el) => {
        html += `
        <div class="card">
            <img src="${el.flags.svg}" alt="Флаг ${el.name.common}">
            <h1>Страна: ${el.name.common}</h1> 
            <h1>Регион: ${el.region}</h1>
            <h1>Площадь: ${el.area.toLocaleString()} км<sup>2</sup></h1>
            <h1>Население: ${el.population.toLocaleString()} чел</h1>
            <a href="${el.maps.googleMaps}" target="_blank">Посмотреть на карте</a>
        </div>r
        `;
    });
    country.innerHTML = html;
}
more.addEventListener("click", () => {
    count += 3; 
    view(countries); 
});

get(); 
