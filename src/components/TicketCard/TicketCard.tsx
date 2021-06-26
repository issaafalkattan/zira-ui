import { Card, Typography } from 'antd';
import React from "react";
import { useDrag } from "react-dnd";
import { Ticket } from "../../types";
import StatusTag from "../StatusTag";

const { Text } = Typography;

type TicketCardProps = {
  ticket: Ticket;
};
const TicketCard = ({ ticket }: TicketCardProps): JSX.Element => {
  const [{ opacity }, drag] = useDrag(
    () => ({
      type: ticket.status,
      item: ticket,
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.4 : 1,
      }),
    }),
    [ticket]
  );

  return (
    <div ref={drag}>
      <Card
        style={{ opacity, width: "400px", marginTop: '20px',  cursor: "grab"}}
        title={ticket.title}
        bordered={false}
        extra={<StatusTag status={ticket.status} />}
      >
        {ticket?.description ?? <Text italic>This ticket does have a description</Text>}
      </Card>
    </div>
  );
};

export default TicketCard;
