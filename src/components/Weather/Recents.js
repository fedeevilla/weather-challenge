import React from "react";
import * as R from "ramda";
import { connect } from "react-redux";
import { Tag } from "antd";
import { useTranslation } from "react-i18next";

import { fetchCity, deleteRecent } from "../../store/actions/city";
import { WrapperRecents, Title } from "./styles";

const Recents = ({ recents, fetchCity, deleteRecent }) => {
  const { t } = useTranslation();

  return (
    <WrapperRecents>
      <Title>{t("recents:title")}</Title>
      {recents.map(({ name, id }) => (
        <p key={id}>
          <Tag
            onClick={() => fetchCity(name)}
            onClose={() => deleteRecent(id)}
            closable
          >
            {name}
          </Tag>
        </p>
      ))}
    </WrapperRecents>
  );
};

const enhancer = connect(
  ({ city }) => ({
    recents: city.recents,
  }),
  { fetchCity, deleteRecent }
);

export default enhancer(Recents);
