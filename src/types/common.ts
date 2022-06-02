export interface Tickets {
  id: string,
  title: string,
  date: string,
  description: string,
  dedline: string,
  assigner: {
    name: string,
    photo: string
  },
  assignee: {
    name: string,
    photo: string
  },
  status?: Status;
}

export type Status = "closed" | 'inProgress' | 'open'