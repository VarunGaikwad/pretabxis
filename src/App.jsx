import { useEffect, useState } from "react";
import GlobalModel from "./common/GlobalModel";
import KnownUser from "./view/KnownUser";
import UnknownUser from "./view/UnknownUser";
import CaesarCipher from "./common/CipheringAlgorithm";
import axios from "axios";
import backgroundImage from "./common/BackgroundImage.json";

export default function App() {
  const [globalModel, setGlobalModel] = useState({
      favLinks: JSON.parse(localStorage.getItem("favLinks") || "[]"),
      displayName: CaesarCipher(localStorage.getItem("displayName") || "", -9),
      weatherInfo: JSON.parse(localStorage.getItem("weatherInfo") || "{}"),
      quotes: JSON.parse(localStorage.getItem("quotes") || "{}"),
      unsplash: JSON.parse(localStorage.getItem("unsplash") || "{}"),
    }),
    date = new Date().toISOString().split("T")[0];

  useEffect(() => {
    const weatherInfo = globalModel.weatherInfo;
    const fetchWeather = async () => {
      const {
        data: {
          current_condition: [current_info],
          nearest_area: [city_info],
        },
      } = await axios.get(`https://wttr.in/?format=j2`);

      return { ...current_info, ...city_info };
    };
    if (Object.keys(weatherInfo).length) {
      if (weatherInfo?.localObsDateTime.split(" ")[0] !== date) {
        fetchWeather().then((data) => {
          setGlobalModel((prev) => ({ ...prev, weatherInfo: data }));
          localStorage.setItem("weatherInfo", JSON.stringify(data));
        });
      }
    } else {
      fetchWeather().then((data) => {
        setGlobalModel((prev) => ({ ...prev, weatherInfo: data }));
        localStorage.setItem("weatherInfo", JSON.stringify(data));
      });
    }
  }, [globalModel.weatherInfo, date]);

  useEffect(() => {
    localStorage.setItem("favLinks", JSON.stringify(globalModel.favLinks));
  }, [globalModel.favLinks]);

  useEffect(() => {
    const fetchQuotes = async () => {
      const { data } = await axios.get("https://api.quotable.io/random");
      setGlobalModel((prev) => ({
        ...prev,
        quotes: { ...data, date },
      }));
      localStorage.setItem("quotes", JSON.stringify({ ...data, date }));
    };
    if (globalModel?.quotes?.date !== date) fetchQuotes();
  }, [globalModel.quotes, date]);

  useEffect(() => {
    if (
      globalModel.displayName &&
      Object.keys(globalModel.unsplash).length > 0
    ) {
      localStorage.setItem(
        "unsplash",
        JSON.stringify(backgroundImage[new Date().getDate()])
      );
      setGlobalModel((prev) => ({
        ...prev,
        unsplash: backgroundImage[new Date().getDate()],
      }));
    } else {
      setGlobalModel((prev) => ({
        ...prev,
        unsplash: backgroundImage[0],
      }));
    }
  }, [globalModel.unsplash, globalModel.displayName]);

  if (globalModel?.displayName) {
    return (
      <GlobalModel.Provider value={{ globalModel, setGlobalModel }}>
        <KnownUser />
      </GlobalModel.Provider>
    );
  }

  return (
    <GlobalModel.Provider value={{ globalModel, setGlobalModel }}>
      <UnknownUser />
    </GlobalModel.Provider>
  );
}
