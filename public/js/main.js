const submitBtn = document.getElementById('submitButton');
const city = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temp_status = document.getElementById('temp_status');
const temp = document.getElementById('temp');

const getInfo = async(event) => {
    event.preventDefault();
    let cityVal = cityName.value;
    if (cityVal === "") {
        city_name.innerText = "Please write the name before press search!!";
    } else {
        try {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=d4aa5226b416c4b01fa7a3851e768449`;
            const responce = await fetch(url);
            const data = await responce.json();
            const arrData = [data];

            city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
            temp.innerText = arrData[0].main.temp;
            temp_status.innerText = arrData[0].weather[0].main;

        } catch {
            city_name.innerText = "please enter the city name";
        }
    }
}
submitBtn.addEventListener('click', getInfo);