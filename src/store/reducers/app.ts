import { APP_ACTION_TYPES, AppAction } from 'store/actions/appActions';
import { Tickets } from 'types/common';

interface AppState {
  tickets: Tickets[];
  isFetching: boolean;
}

const initialState: AppState = {
  tickets: [],
  isFetching: false,
};

export default function app(state = initialState, action: AppAction): AppState {
  switch (action.type) {
    case APP_ACTION_TYPES.GET_ALL_TICKETS: {
      return {
        ...state,
        tickets: action.tickets,
      };
    }

    case APP_ACTION_TYPES.CHANGE_STATUS: {
      let newStateTickers = state.tickets;
      newStateTickers[action.id].status = action.newStatus
      return  {
        ...state,
        tickets: [...newStateTickers]
      };
    }

    default: {
      return state;
    }
  }
}
