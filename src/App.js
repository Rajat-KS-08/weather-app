import React, { useState } from "react";
import Weather from "./components/Weather";
import {FcSearch} from "react-icons/fc";
import "bootstrap/dist/css/bootstrap.css";


function App() {
  const [searchLocation, setSearchLocation] = useState("Pune");
  const [weatherInfo, setWeatherInfo] = useState([]);
  const [tempInfo, setTempInfo] = useState([]);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchLocation}&units=metric&appid=2af23e7fe5ac47eba599763024fc5343`;
  //useEffect( () => {
  //  const fetchApi = async () => {
    //  const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchLocation}&appid=2af23e7fe5ac47eba599763024fc5343`;
      //const response = await fetch(url);
      //const responseJson = await response.json();
      //console.log(responseJson);
      
   // }

    //fetchApi();
  //});

  //Alternate way of fetch request
  //const locationHandler = async () => {
  //  const response = await fetch(url);
  //  //Converting the response into json format
  //  const data = await response.json();
  //  setWeatherInfo(data.weather[0]);
  //  setTempInfo(data.main);
  //  console.log(data.weather);
  //  console.log(data.weather[0].main);
  //}

  const locationHandler = (event) => {
    event.preventDefault();
    console.log(searchLocation);
    fetch(url).then(
      (response) => {
        //console.log(response.json());
        return response.json();
      }).then(
        (data) => {
          
          setWeatherInfo(data.weather[0]);
          setTempInfo(data.main);
          console.log(data.weather);
          console.log(data.weather[0].main);
        }
    );
    
  };

  const locationChangeHandler = (event) => {
    setSearchLocation(event.target.value);
  };

  return (
    <React.Fragment>
      <div className=" container-fluid  bg-info text-muted p-5 ">
        <div>
          <h1 className="d-flex justify-content-center">Weather_APP</h1>
        </div>
        <div className=" my-3">
          <input
            className=" form-control"
            type="text"
            onChange={locationChangeHandler}
          ></input>
          <div className="d-flex justify-content-center m-1">
            <button
              className="d-block btn btn-success p-2"
              type="submit"
              onClick={locationHandler}
            >
              Fetch Report <span className="fs-4"> <FcSearch /> </span>
            </button>
          </div>
        </div>
      </div>
      <Weather location={searchLocation} report={weatherInfo} temp={tempInfo} />
    </React.Fragment>
  );
}

export default App;
