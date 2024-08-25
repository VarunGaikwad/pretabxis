import PropTypes from "prop-types";
import {
  Cloud,
  CloudDrizzle,
  CloudFog,
  CloudRain,
  CloudRainWind,
  CloudSnow,
  CloudSun,
  FileQuestion,
  Sun,
} from "lucide-react";
import GlobalModel from "../common/GlobalModel";
import { useContext } from "react";

export default function Weather() {
  const {
    globalModel: {
      weatherInfo: {
        temp_C,
        weatherDesc: [{ value: desc }],
        areaName: [{ value: cityName }],
        country: [{ value: countryName }],
      },
    },
  } = useContext(GlobalModel);

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex gap-2 items-center">
        <WeatherIcon weatherDesc={desc} />
        <span className="text-2xl font-semibold">{temp_C}&deg;C</span>
      </div>
      <span>
        {cityName}, {countryName}
      </span>
    </div>
  );
}

WeatherIcon.propTypes = {
  weatherDesc: PropTypes.string,
};

function WeatherIcon({ weatherDesc }) {
  if (weatherDesc.includes("clear")) {
    return <Sun className="size-10" />;
  }

  if (weatherDesc.includes("cloud")) {
    return <Cloud className="size-10" />;
  }

  if (weatherDesc.includes("rain")) {
    return <CloudRain className="size-10" />;
  }

  if (weatherDesc.includes("snow")) {
    return <CloudSnow className="size-10" />;
  }

  if (
    weatherDesc.includes("fog") ||
    weatherDesc.includes("haze") ||
    weatherDesc.includes("dust") ||
    weatherDesc.includes("sand") ||
    weatherDesc.includes("mist")
  ) {
    return <CloudFog className="size-10" />;
  }

  if (weatherDesc.includes("drizzle")) {
    return <CloudDrizzle className="size-10" />;
  }

  if (
    weatherDesc.includes("wind") ||
    weatherDesc.includes("thunderstorm") ||
    weatherDesc.includes("tornado") ||
    weatherDesc.includes("storm")
  ) {
    return <CloudRainWind className="size-10" />;
  }

  if (weatherDesc.includes("sunny")) {
    return <CloudSun className="size-10" />;
  }

  if (weatherDesc.includes("hail")) {
    return <CloudSnow className="size-10" />;
  }

  return <FileQuestion className="size-10" />;
}
