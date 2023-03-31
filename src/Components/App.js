import Header from "./Header";
import Main from "./Main";
import "../App.css"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { getHellWeather } from "../services/owm-api";
import { useState, useEffect } from "react";


function App() {
  library.add(fab)
  const [weather, setWeather] = useState({});
  useEffect(() => {
    const fetchData = async () => {
        const data = await getHellWeather();
        console.log(data);
        setWeather(data);
      };
    fetchData();
  }, []);
  return (
    <div className="App">
      <Header weather={weather}/>
      <Main />
    </div>
  );
}

export default App;
