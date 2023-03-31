export async function getHellWeather() {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=19.378968076108695&lon=-81.40625040163788&appid=0fe5a3a9cdbc817ea2294d9f2eaa840f`);
      const data = await response.json();
      return await data;
    } catch (e) {
      console.error(e);
    }
  }