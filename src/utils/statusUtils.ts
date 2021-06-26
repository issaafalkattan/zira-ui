import { TicketStatus } from '../types/index';


export const getTagColor = (status: TicketStatus): string => {
    switch (status) {
      case "OPEN":
        return "magenta";
      case "PENDING":
        return "cyan";
      case "CLOSED":
        return "green";
      default:
        return "red";
    }
  };