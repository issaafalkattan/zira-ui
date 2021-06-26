import {  TicketStatus } from '../types/index';


export const StatusTypes = {
    Open: TicketStatus.Open,
    Pending: TicketStatus.Pending,
    Closed: TicketStatus.Closed,
};



export const SWIMLANES: Array<{ status: TicketStatus, accepts: TicketStatus[] }> = [
    {
        status: StatusTypes.Open,
        accepts: [],
    },
    {
        status: StatusTypes.Pending,
        accepts: [StatusTypes.Open],
    },
    {
        status: StatusTypes.Closed,
        accepts: [StatusTypes.Open, StatusTypes.Pending]
    }
]