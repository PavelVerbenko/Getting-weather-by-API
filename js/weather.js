/* weather.js */
import FetchWrapper from "./fetch-wrapper.js";

  // Do NOT modify the code below
  const result = document.querySelector("#result");
  const showTemperature = temperature => {
    result.textContent = `It's ${temperature} degrees celsius.`;
  }
 
export const getWeather = async city => {
    // your code
  const req = new FetchWrapper('https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/weatherstack/')
 
  const data = await req.get(`${city}.json`)
  showTemperature(data.current.temperature)
  }