const infoTable = [
    {title: "Temperatura", txt: ""},
    {title: "Aktualna pogoda", txt: ""},
    {title: "Prędkość wiatru", txt: ""},
    {title: "Ciśnienie", txt: ""},
    {title: "Wschód słońca", txt: ""},
    {title: "Zachód słońca", txt: ""}
];

const weatherInfo = (info) => {
 
    const {clouds, coord, main, sys, weather, wind, name} = info;

    region.textContent = name;

    infoTable[0].txt = `${(main.temp - 273.15).toFixed(1)}°C`;
    infoTable[1].txt = weather[0].description;
    infoTable[2].txt = `${convertMilesToKilometers(wind.speed)} km/h`;
    infoTable[3].txt = `${(main.pressure)} hPa`;
    infoTable[4].txt = `${getTime(sys.sunrise)}`;
    infoTable[5].txt = `${getTime(sys.sunset)}`;

    dltData();
    crtData();
    check = false;
}


const getTime = (unix) =>{

    const date = new Date(unix * 1000);
    const hours = date.getHours();
    const minutes = "0" + date.getMinutes();
    const seconds = "0" + date.getSeconds();

    return hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
}