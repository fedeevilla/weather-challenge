import React, { useEffect } from "react";
import { connect } from "react-redux";
import "antd/dist/antd.css";
import { Input } from "antd";
import Layout from "./components/Layout/Layout";
import { Content, WrapperContent } from "./styles";
import WeatherDetails from "./components/Weather/WeatherDetails";
import Recents from "./components/Weather/Recents";
import { fetchCity, loadRecents } from "./store/actions/city";
import { useTranslation } from "react-i18next";

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

export default enhancer(App);
