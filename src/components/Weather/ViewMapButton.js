import React from "react";
import { Button, Popover } from "antd";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

const ViewMapButton = ({ city }) => {
  const { t } = useTranslation();

  return (
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
  );
};

ViewMapButton.propTypes = {
  city: PropTypes.object,
};

export default ViewMapButton;
