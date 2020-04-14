import React, { useState } from "react";
import { connect } from "react-redux";
import { Card, Button } from "antd";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

import ViewMapButton from "./ViewMapButton";

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
              <ViewMapButton city={city} />
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
                º ~{" "}
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

WeatherDetails.propTypes = {
  city: PropTypes.object,
  loading: PropTypes.bool,
};

const enhancer = connect(({ city }) => ({
  city: city.selected,
  loading: city.loading,
}));

export default enhancer(WeatherDetails);
