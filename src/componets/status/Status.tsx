import { StatusEnum } from 'types/utils';
import { StatusElementButton, StatusWrapper } from './Status.styled';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { COLORS } from 'constants/colors';
import { useDispatch } from 'react-redux';
import { changeStatus } from 'store/actions/appActions';
interface Props {
  status: StatusEnum;
  id: number;
}

export const Status = ({ id, status }: Props) => {
  const dispath = useDispatch();

  return (
    <StatusWrapper>
      <StatusElementButton
        onClick={() => dispath(changeStatus({ id, newStatus: StatusEnum.inProgress }))}
        isActive={status === StatusEnum.inProgress}
        color={COLORS.inProgress}
      >
        <FormatListBulletedIcon />
        <span>In progress</span>
      </StatusElementButton>
      <StatusElementButton
        onClick={() => dispath(changeStatus({ id, newStatus: StatusEnum.open }))}
        isActive={status === StatusEnum.open}
        color={COLORS.open}
      >
        <ErrorIcon /> <span>Open</span>
      </StatusElementButton>
      <StatusElementButton
        onClick={() => dispath(changeStatus({ id, newStatus: StatusEnum.closed }))}
        isActive={status === StatusEnum.closed}
        color={COLORS.closed}
      >
        <CheckCircleIcon /> <span>Closed</span>
      </StatusElementButton>
    </StatusWrapper>
  );
};
