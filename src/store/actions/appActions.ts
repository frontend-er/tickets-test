import axios from "axios";
import { Dispatch } from "redux";
import { Status, Tickets } from "types/common";

export enum APP_ACTION_TYPES {
  GET_ALL_TICKETS = 'APP::GET_ALL_TICKETS',
  CHANGE_STATUS = 'APP::CHANGE_STATUS'
}

export type AppAction =
  | { type: APP_ACTION_TYPES.GET_ALL_TICKETS; tickets: Tickets[] }
  | { type: APP_ACTION_TYPES.CHANGE_STATUS; id: number; newStatus: Status }

export const setAllTickets = ({tickets}: { tickets: Tickets[]}): AppAction => {
  return { type: APP_ACTION_TYPES.GET_ALL_TICKETS, tickets };
};

export const changeStatus = ({id, newStatus}: { id: number,newStatus: Status }): AppAction => {
  return { type: APP_ACTION_TYPES.CHANGE_STATUS, id, newStatus  };
};

export const getAllTickets = () => {
  return (dispatch: Dispatch) => {
    return axios.get('data.json').then((response) => {
        return dispatch(setAllTickets({tickets: response.data }))
      })
  };
};
