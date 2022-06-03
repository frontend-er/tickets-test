import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import { ReactNode } from 'react';

export const TicketCard = ({ children }: { children: ReactNode }) => {
  return (
    <Box sx={{ minWidth: 275, margin: 1 }}>
      <Card variant='outlined'>{children}</Card>
    </Box>
  );
};
