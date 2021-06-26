import React from "react";
import { useMutation, useQuery } from "@apollo/client";
import { LOAD_TICKETS } from "../../graphql/queries";
import { Alert, Row, Spin, Col, Layout, notification } from "antd";
import { SWIMLANES } from "../../constants/index";
import Swimlane from "../Swimlane";
import { Ticket, TicketStatus } from "../../types/index";
import AppHeader from "../AppHeader";
import { UPDATE_STATUS } from "../../graphql/mutation";

const { Content } = Layout;
const HomePage = (): JSX.Element => {
  const {
    data = { tickets: [] },
    error,
    loading,
  } = useQuery<{ tickets: Ticket[] }>(LOAD_TICKETS);

  const [updateStatus, { error: statusUpdateError }] =
    useMutation(UPDATE_STATUS);

  const { tickets = [] } = data;

  const onDropTicket = async (ticket: Ticket, newLane: TicketStatus) => {
    await updateStatus({ variables: { id: ticket.id, status: newLane } });
    if (statusUpdateError) {
      notification.error({
        message: `Ooops, could not update status for ticket ${ticket.id}`,
        description: JSON.stringify(statusUpdateError),
      });
    }
  };
  if (error) {
    return <Alert type="error" message={JSON.stringify(error)} />;
  }

  return (
    <Layout>
      <AppHeader />
      <Content>
        <Spin spinning={loading}>
          <Row>
            {SWIMLANES.map((swimlane) => (
              <Col span={8} key={swimlane.status}>
                <Swimlane
                  type={swimlane.status}
                  tickets={tickets.filter(
                    (ticket) => ticket.status === swimlane.status
                  )}
                  accept={swimlane.accepts}
                  onTicketDrop={(item: Ticket) => onDropTicket(item, swimlane.status)}
                />
              </Col>
            ))}
          </Row>
        </Spin>
      </Content>
    </Layout>
  );
};

export default HomePage;
