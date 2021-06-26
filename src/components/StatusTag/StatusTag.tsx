import { Tag } from "antd";
import React from "react";
import { TicketStatus } from "../../types/index";
import { getTagColor } from "../../utils";

type StatusTagProps = {
  status: TicketStatus;
  large?: boolean;
};
const StatusTag = ({ status, large = false }: StatusTagProps): JSX.Element => {
  const tagColor = getTagColor(status);
  return (
    <Tag color={tagColor} style={{ fontSize: large ? "20px" : "10px" }}>
      {status}
    </Tag>
  );
};

export default StatusTag;
