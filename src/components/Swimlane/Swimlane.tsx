import { List } from "antd";
import React, { useState, useEffect } from "react";
import { Ticket, TicketStatus } from "../../types/index";
import TicketCard from "../TicketCard";
import { useDrop } from "react-dnd";
import { COLORS } from "../../constants/colors";
import StatusTag from "../StatusTag";

type SwimlaneProps = {
  type: TicketStatus;
  accept: string[];
  tickets: Ticket[];
  onTicketDrop: (item: Ticket) => void;
};
const Swimlane = ({
  type,
  accept,
  tickets,
  onTicketDrop,
}: SwimlaneProps): JSX.Element => {
  const [backgroundColor, setBackgroundColor] = useState<string>(
    COLORS.tuscany
  );
  const [{ isOver, canDrop }, drop] = useDrop({
    accept,
    drop: onTicketDrop,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });
  const isActive = isOver && canDrop;

  useEffect(() => {
    if (isActive) {
      setBackgroundColor(COLORS.pastelpink);
    } else if (canDrop) {
      setBackgroundColor(COLORS.apricot);
    } else setBackgroundColor(COLORS.tuscany);
  }, [canDrop, isActive]);

  return (
    <div ref={drop} role="list">
      <List<Ticket>
        style={{
          backgroundColor,
          padding: "24px 24px",
          minHeight: "90vh",
          color: "white",
          border: "1px solid white",
        }}
        header={<StatusTag status={type} large />}
        itemLayout="vertical"
        dataSource={tickets}
        renderItem={(ticket) => (
          <List.Item key={ticket.id}>
            <TicketCard ticket={ticket} />
          </List.Item>
        )}
        locale={{
          emptyText: "No tickets in this lane.",
        }}
      />
    </div>
  );
};

export default Swimlane;
