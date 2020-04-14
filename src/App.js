import React, { useEffect } from "react";
import { connect } from "react-redux";
import "antd/dist/antd.css";
import { Input } from "antd";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import Layout from "./components/Layout/Layout";
import WeatherDetails from "./components/Weather/WeatherDetails";
import Recents from "./components/Weather/Recents";
import { fetchCity, loadRecents } from "./store/actions/city";
import { Content, WrapperContent } from "./styles";

const { Search } = Input;

const App = ({ fetchCity, loading, loadRecents }) => {
  const { t } = useTranslation();

  useEffect(() => loadRecents());

  return (
    <Layout>
      <Content>
        <Search
          placeholder={t("searchBox:placeholder")}
          onSearch={(value) => fetchCity(value)}
          enterButton
          style={{ width: 600 }}
          loading={loading}
        />
        <WrapperContent>
          <WeatherDetails />
          <Recents />
        </WrapperContent>
      </Content>
    </Layout>
  );
};

const enhancer = connect(
  ({ city }) => ({
    loading: city.loading,
  }),
  { fetchCity, loadRecents }
);

App.propTypes = {
  fetchCity: PropTypes.func,
  loading: PropTypes.bool,
  loadRecents: PropTypes.func,
};

export default enhancer(App);
