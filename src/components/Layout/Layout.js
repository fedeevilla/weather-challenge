import React from "react";
import { Layout as AntdLayout, Avatar, Tooltip } from "antd";
import { useTranslation } from "react-i18next";

import { Container, Content, Title } from "./styles";
import ContainerContext from "./ConteinerContext";

const { Header } = AntdLayout;

const Layout = ({ children }) => {
  const containerRef = React.useRef(null);
  const { t } = useTranslation();
  const locale = window.localStorage.getItem("locale");

  return (
    <Container>
      <Header className="layout-header">
        <Title>{t("layout:title")}</Title>
        <Tooltip title={t("layout:language")} placement="bottomLeft">
          <Avatar
            style={{ backgroundColor: "gray" }}
            onClick={() => {
              locale === "SPA"
                ? window.localStorage.setItem("locale", "ENG")
                : window.localStorage.setItem("locale", "SPA");

              window.location.reload();
            }}
          >
            {locale}
          </Avatar>
        </Tooltip>
      </Header>
      <ContainerContext.Provider value={containerRef}>
        <Content ref={containerRef}>{children}</Content>
      </ContainerContext.Provider>
    </Container>
  );
};

export default Layout;
