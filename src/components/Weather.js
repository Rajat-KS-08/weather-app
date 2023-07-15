import 'bootstrap/dist/css/bootstrap.css';
import WeatherInfo from './WeatherInfo';

const Weather = (props) => {
    const location = props.location;
    return(
        <div className="p-5 mb-2 bg-secondary">
            <WeatherInfo location={location} temp={props.temp} report={props.report} />
        </div>
    );
}

export default Weather;