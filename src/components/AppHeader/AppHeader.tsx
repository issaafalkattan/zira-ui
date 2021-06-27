import { Layout, Typography, Button } from "antd";
import React from "react";
import { COLORS } from "../../constants/colors";
import { PlusCircleOutlined } from "@ant-design/icons"
const { Header } = Layout;
const { Title } = Typography;


type AppHeaderProps = {
  toggleForm: () => void;
}
const AppHeader = ({ toggleForm }: AppHeaderProps): JSX.Element => {
  return (
    <Header style={{ background: COLORS.gunmetal, padding: "16px 10px", display: "flex", justifyContent: "space-between" }}>
      <Title keyboard level={4} style={{ color: COLORS.pastelpink }}>
        Zira, the future of todo lists.{" "}
      </Title>
      <Button icon={<PlusCircleOutlined />} onClick={toggleForm}>New Ticket</Button>
    </Header>
  );
};

export default AppHeader;
