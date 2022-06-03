import { StatusEnum } from 'types/utils';
import { TicketCard } from 'componets/card/TicketCard';
import { CheckBoxWrapper, HolderTicket } from 'App.styled';
import { Checkbox } from '@mui/material';
import { Description } from 'componets/description/Description';
import { Tickets } from 'types/common';
import { Table } from 'componets/table/Table';
import { TableMultiple } from 'componets/table/TableMultiple';
import { UserTicketComponent } from 'componets/user/UserTicket';
import { Status } from 'componets/status/Status';
import { ButtonsRow } from 'componets/buttons/ButtonsRow';
import { useState } from 'react';

interface Props {
  item: Tickets;
  index: number;
}

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export const TicketItem = ({ item, index }: Props) => {
  const [checked, setChecked] = useState(false);

  return (
    <TicketCard>
      <HolderTicket>
        <div style={{ height: '100%' }}>
          <CheckBoxWrapper>
            <Checkbox onClick={() => setChecked(!checked)} checked={checked} {...label} />
          </CheckBoxWrapper>
        </div>

        <div>
          <Description
            title={item.title}
            description={item.description}
            date={item.date}
            asigner={item.assigner.photo}
          />
          <div>
            <Table label='Due Date'>
              <div> {item.dedline}</div>
            </Table>
          </div>
          <div>
            <TableMultiple
              rows={[
                {
                  label: 'Assigner',
                  children: (
                    <UserTicketComponent name={item.assigner.name} avatar={item.assigner.photo} />
                  ),
                },
                {
                  label: 'Assignee',
                  children: (
                    <UserTicketComponent name={item.assignee.name} avatar={item.assignee.photo} />
                  ),
                },
              ]}
            />
          </div>
          <Status id={index} status={item.status as StatusEnum} />
          <ButtonsRow />
        </div>
      </HolderTicket>
    </TicketCard>
  );
};
