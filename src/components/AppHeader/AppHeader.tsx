import { Layout, Typography } from "antd";
import React from "react";
import { COLORS } from "../../constants/colors";

const { Header } = Layout;
const { Title } = Typography;

const AppHeader = (): JSX.Element => {
  return (
    <Header style={{ background: COLORS.gunmetal, padding: "16px 10px" }}>
      <Title keyboard level={4} style={{ color: COLORS.pastelpink }}>
        Zira, the future of todo lists.{" "}
      </Title>
    </Header>
  );
};

export default AppHeader;