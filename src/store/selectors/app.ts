import { createSelector } from 'reselect';
import { RootState } from 'store/configureStore';

const selectAppReducer = (state: RootState) => state.app;

const selectCurrentTickets = createSelector(selectAppReducer, (data) => data.tickets);
const selectAppIsFetching = createSelector(selectAppReducer, (data) => data.isFetching);

export { selectAppIsFetching, selectCurrentTickets };
