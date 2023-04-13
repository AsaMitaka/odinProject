const inputSearch = document.querySelector('.main__search');
const weatherTitle = document.querySelector('.main__title');
const weatherTitleCity = document.querySelector('.main__title-city');
const weatherCloud = document.querySelector('.main__weather-cloud');
const weatherHumidity = document.querySelector('.main__weather-humidity');
const weatherTempC = document.querySelector('.main__weather-tempC');
const weatherVisKm = document.querySelector('.main__weather-visKm');
const weatherImgBlock = document.querySelector('.main__weather-img');

const __url = 'http://api.weatherapi.com/v1';
const __apikey = 'a02bc0268d5e4593bf4171253231304';

const fetchData = async (q = 'London') => {
  try {
    const data = await fetch(`${__url}/current.json?key=${__apikey}&q=${q}`);
    const resjson = await data.json();
    const weatherData = {
      localtime: resjson.location.localtime,
      country: resjson.location.country,
      region: resjson.location.region,
      city: resjson.location.name,

      humidity: resjson.current.humidity,
      temp_c: resjson.current.temp_c,
      vis_km: resjson.current.vis_km,
      cloud: resjson.current.cloud,

      imageSrc: resjson.condition?.icon,
      imageAlt: resjson.condition?.text,
    };

    return weatherData;
  } catch (error) {
    throw new Error(error);
  }
};

const renderWeather = (data) => {
  if (!data) {
    titleElement.textContent = 'Error';
    cityElement.textContent = '';
    cloudElement.textContent = '';
    humidityElement.textContent = '';
    tempElement.textContent = '';
    visElement.textContent = '';
    imageElement.innerHTML = '';
    return;
  }

  weatherTitle.textContent = data.city ? `${data.city}` : '';
  weatherTitleCity.textContent =
    data.country && data.region ? `${data.country}, ${data.region}` : '';
  weatherHumidity.textContent = `Humidity: ${data.humidity}`;
  weatherCloud.textContent = `Cloud: ${data.cloud} %`;
  weatherTempC.textContent = `Temperature: ${data.temp_c} C`;
  weatherVisKm.textContent = `Vis Km: ${data.vis_km} km`;

  if (data.imageSrc) {
    weatherImgBlock.textContent = '';
    weatherImgBlock.innerHTML = `<img src=${data.imageSrc} alt=${data.imageAlt} />`;
  }
};

const handleInput = async (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    const query = inputSearch.value;
    console.log(query);

    const weatherData = await fetchData(inputValue);
    renderWeather(weatherData);
    inputSearch.value = '';
  }
};

const init = async () => {
  try {
    const data = await fetchData();
    renderWeather(data);
    searchInput.addEventListener('keypress', handleSearchInput);
  } catch (error) {
    console.log(error.message);
  }
};

init();
