import { Button } from '@mui/material';
import { ButtonsWrapper } from './Buttons.styled';

export const ButtonsRow = () => {
  return (
    <ButtonsWrapper>
      <Button
        data-test='alert-button'
        variant='text'
        onClick={() => alert('Left button is clicked')}
      >
        Left button
      </Button>
      <Button
        data-test='alert-button'
        variant='text'
        onClick={() => alert('Right button is clicked')}
      >
        Right button
      </Button>
    </ButtonsWrapper>
  );
};
