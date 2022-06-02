import { AppWrapper } from 'App.styled';
import { TicketItem } from 'componets/ticket/TicketItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTickets } from 'store/actions/appActions';
import { selectCurrentTickets } from 'store/selectors/app';

function App() {
  const dispatch = useDispatch();
  const tickets = useSelector(selectCurrentTickets);

  useEffect(() => {
    //axios types problems then get data local
    dispatch(getAllTickets() as any);
  }, [dispatch]);

  return (
    <div data-test='component-app'>
      <AppWrapper>
        {tickets.map((i, index) => {
          return <TicketItem index={index} item={i} />;
        })}
      </AppWrapper>
    </div>
  );
}

export default App;
