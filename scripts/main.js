const API_key = "122834a0f211f591543e9b0f7a38b726";

const region = document.getElementById("region");
const btn = document.getElementById('Button');
const btnName = document.getElementById('BtnName');
const panel = document.getElementById('Panel');

const temp = document.getElementById('temp');
const weath = document.getElementById('weather');
const windy = document.getElementById('wind');

const showWeatherByLocation = (pos) => {
        const coords = pos.coords;
        console.log(pos);
        const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=${API_key}`;
        fetch(URL)
        //Jeśli się uda to rób to
        .then((res) => res.json())
        .then((res) => weatherInfo(res))
        //Jeśli nie uda się to error
        .catch((err) => console.log(err))
        //Na koniec, wyświetl to, niezależnie od wyniku
        .finally(() => console.log("Udało się"));
}

const showWeatherBySearch = (txtCity) =>{
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${txtCity}&appid=${API_key}`;
        fetch(URL)
        .then((res) => res.json())
        .then((res) => weatherInfo(res))
        .catch((err) => console.log(err)) 
}

//Wyszukaj po mieście
const citySearch = document.getElementById('Input');
citySearch.addEventListener("change", (e) => showWeatherBySearch(e.target.value));

const getMyLocation = () => {
        //navigator.geolocation.getCurrentPosition((pos) => showWeatherByLocation(pos))
        navigator.geolocation.getCurrentPosition((pos) => showWeatherBySearch(pos))
}

const convertMilesToKilometers = (speed) => Math.round(speed * 1.60934)

let check = true;

const dltData = () => {
    for(let f = 0; f < infoTable.length; f++)
    {
        const text = "Child" + f;
        document.getElementById(text).outerHTML = ``;
        btnName.textContent = "Wyświetl pogodę";
    }
}

const crtData = () => {
    for(let f = 0; f < infoTable.length; f++)
    {
    const title = document.createElement('div');
    const ts = "Child" + f;
    title.setAttribute("id", ts);
    title.classList.add('title');
    title.innerHTML = `
        <p>${infoTable[f].title}:
        <p>${infoTable[f].txt}</p>
    `
    panel.appendChild(title); 
    }
}


const createDiv = () =>{

    if(region.textContent !== "")
    {
        if(check === true)
        {            
            crtData();
            check = false;
            btnName.textContent = "Zwiń";
        }
        else
        {
            dltData();
            check = true;
        }
    }
}

//getMyLocation();
btn.addEventListener('click', createDiv);



