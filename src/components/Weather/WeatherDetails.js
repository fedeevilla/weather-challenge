import React, { useState } from "react";
import { connect } from "react-redux";
import { Card, Popover, Button } from "antd";
import { useTranslation } from "react-i18next";
import { GoogleMap, Marker } from "@react-google-maps/api";

import {
  Title,
  WrapperIcon,
  WrapperDetails,
  WrapperTitle,
  WrapperInfo,
} from "./styles";
import { toFahrenheit, toCelsius } from "../../utils/selector";

const WeatherDetails = ({ city, loading }) => {
  const { t } = useTranslation();
  const [fahrenheit, setFahrenheit] = useState(false);

  return (
    <Card style={{ width: 450, height: 220 }} loading={loading}>
      {!city ? (
        <Title>{t("weatherDetails:city")}</Title>
      ) : (
        <>
          <WrapperTitle>
            <Title>{city.name}</Title>
            <div>
              <Button
                type="link"
                shape="round"
                size="small"
                onClick={() => setFahrenheit(!fahrenheit)}
              >
                {fahrenheit
                  ? t("weatherDetails:convertToC")
                  : t("weatherDetails:convertToF")}
              </Button>

              <Popover
                placement="bottomLeft"
                title={city.name}
                content={
                  <GoogleMap
                    mapContainerStyle={{
                      height: "240px",
                      width: "500px",
                      borderRadius: 5,
                    }}
                    clickableIcons={false}
                    zoom={14}
                    center={{
                      lat: city.coord.lat,
                      lng: city.coord.lon,
                    }}
                  >
                    <Marker
                      position={{
                        lat: city.coord.lat,
                        lng: city.coord.lon,
                      }}
                    />
                  </GoogleMap>
                }
                trigger="click"
              >
                <Button
                  type="default"
                  shape="round"
                  size="small"
                  style={{ marginLeft: 5 }}
                >
                  {t("weatherDetails:viewMap")}
                </Button>
              </Popover>
            </div>
          </WrapperTitle>
          <WrapperInfo>
            <WrapperDetails>
              <p>
                <b>{t("weatherDetails:humidity")}:</b> {city.main.humidity}%
              </p>
              <p>
                <b>{t("weatherDetails:pressure")}:</b> {city.main.pressure}mbar
              </p>
              <p>
                <b>{t("weatherDetails:minMax")}: </b>
                {fahrenheit
                  ? toFahrenheit(city.main.temp_min)
                  : toCelsius(city.main.temp_min)}
                º ~
                {fahrenheit
                  ? toFahrenheit(city.main.temp_max)
                  : toCelsius(city.main.temp_max)}
                º
              </p>
              <p>
                <b>{t("weatherDetails:wind")}:</b> {city.wind.speed} km/h
              </p>
            </WrapperDetails>
            <WrapperIcon>
              {fahrenheit
                ? toFahrenheit(city.main.temp)
                : toCelsius(city.main.temp)}
              º
              <img
                src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}
                alt="icon"
              />
            </WrapperIcon>
          </WrapperInfo>
        </>
      )}
    </Card>
  );
};

const enhancer = connect(({ city }) => ({
  city: city.selected,
  loading: city.loading,
}));

export default enhancer(WeatherDetails);
