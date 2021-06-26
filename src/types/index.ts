export type Ticket = {
    id: string,
    title: string,
    description?: string,
    status: TicketStatus,
};

export enum TicketStatus {
    Open = 'OPEN',
    Pending = 'PENDING',
    Closed = 'CLOSED'
}