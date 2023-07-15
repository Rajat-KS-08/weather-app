import { WiDayCloudy, WiNightFog, WiDayThunderstorm } from "react-icons/wi";
import { RiMoonClearLine } from "react-icons/ri";
import { BsCloudSunFill, BsCloudSnowFill, BsFillCloudRainFill, BsCloudDrizzle, BsCloudHaze2Fill, BsFillCloudFog2Fill } from "react-icons/bs";

const Icon = (props) => {
  switch (props.main) {
    case "Thunderstorm":
      return <WiDayThunderstorm className="fs-1" />;
    case "Drizzle":
      return <BsCloudDrizzle className="fs-1" />;
    case "Rain":
      return <BsFillCloudRainFill className="fs-1" />;
    case "Snow":
      return <BsCloudSnowFill className="fs-1" />;
    case "Fog":
      return < WiNightFog className="fs-1" />;
    case "Clear":
      return <RiMoonClearLine className="fs-1" />;
    case "Clouds":
      return <WiDayCloudy className="fs-1" />;
    case "Haze" :
      return <BsCloudHaze2Fill className="fs-1" />;
    case "Mist" :
      return <BsFillCloudFog2Fill className="fs-1" />
    default :
    return <BsCloudSunFill className="fs-1" />;
  }
};

export default Icon;