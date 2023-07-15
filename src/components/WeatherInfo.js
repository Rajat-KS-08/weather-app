import Icon from "./Icon";
import "bootstrap/dist/css/bootstrap.css";

const WeatherInfo = (props) => {
  const main = props.report.main;
  const description = props.report.description;
  return (
    <div className=" card text-center">
      <div className="card-header">
        <h1 className="text-uppercase fw-bolder">{props.location}</h1>
      </div>
      <div className="card-body">
        <h3 className="card-title font-monospace"> Temperature : {props.temp.temp} °C</h3>
        <p className="card-text font-monospace">
        Max. Temperature : {props.temp.temp_min} °C
        </p>
        <p className="card-text font-monospace">
        Min. Temperature : {props.temp.temp_max} °C
        </p>
        <p className="card-text font-monospace">
        Weather : {description}
        </p>
      </div>
      <div className="card-footer text-danger">{main} <Icon main={main} /> </div>
    </div>
  );
};

export default WeatherInfo;