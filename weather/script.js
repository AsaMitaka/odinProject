const inputSearchElement = document.querySelector('.main__search');
const weatherTitleElement = document.querySelector('.main__title');
const weatherTitleCityElement = document.querySelector('.main__title-city');
const weatherCloudElement = document.querySelector('.main__weather-cloud');
const weatherHumidityElement = document.querySelector('.main__weather-humidity');
const weatherTempCElement = document.querySelector('.main__weather-tempC');
const weatherVisKmElement = document.querySelector('.main__weather-visKm');
const weatherImgBlockElement = document.querySelector('.main__weather-img');
const weatherDateElement = document.querySelector('.main__weather-localtime');

const __url = 'http://api.weatherapi.com/v1';
const __apikey = 'a02bc0268d5e4593bf4171253231304';

const fetchData = async (q = 'London') => {
  try {
    const data = await fetch(`${__url}/current.json?key=${__apikey}&q=${q}`);
    const resjson = await data.json();
    const weatherData = {
      localtime: resjson.location.localtime.replaceAll('-', ' '),
      country: resjson.location.country,
      region: resjson.location.region,
      city: resjson.location.name,

      humidity: resjson.current.humidity,
      temp_c: resjson.current.temp_c,
      vis_km: resjson.current.vis_km,
      cloud: resjson.current.cloud,

      imageSrc: resjson.current.condition?.icon,
      imageAlt: resjson.current.condition?.text,
    };

    return weatherData;
  } catch (error) {
    throw new Error(error);
  }
};

const resetWeather = () => {
  weatherTitleElement.textContent = 'Error';
  weatherTitleCityElement.textContent = '';
  weatherCloudElement.textContent = '';
  weatherHumidityElement.textContent = '';
  weatherTempCElement.textContent = '';
  weatherVisKmElement.textContent = '';
  weatherDateElement.textContent = '';
  weatherImgBlockElement.innerHTML = '';
};

const renderWeather = (data) => {
  if (!data) {
    resetWeather();
    return;
  }

  weatherTitleElement.textContent = data.city ? `${data.city}` : '';
  weatherTitleCityElement.textContent =
    data.country && data.region ? `${data.country}, ${data.region}` : '';
  weatherHumidityElement.textContent = `Humidity: ${data.humidity}`;
  weatherDateElement.textContent = data.localtime ? `Date: ${data.localtime}` : '';
  weatherCloudElement.textContent = `Cloud: ${data.cloud} %`;
  weatherTempCElement.textContent = `Temperature: ${data.temp_c} C`;
  weatherVisKmElement.textContent = `Vis Km: ${data.vis_km} km`;

  if (data.imageSrc) {
    weatherImgBlockElement.textContent = '';
    weatherImgBlockElement.innerHTML = `<img src=${data.imageSrc} alt=${data.imageAlt} />`;
  }
};

const handleSearchInput = async (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    const query = inputSearchElement.value;
    if (!query) return;

    try {
      const weatherData = await fetchData(query);
      renderWeather(weatherData);
      inputSearchElement.value = '';
    } catch (error) {
      resetWeather();
      inputSearchElement.value = '';
    }
  }
};

const init = async () => {
  try {
    const data = await fetchData();
    renderWeather(data);
    inputSearchElement.addEventListener('keypress', handleSearchInput);
  } catch (error) {
    resetWeather();
  }
};

init();
