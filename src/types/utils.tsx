import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { COLORS } from 'constants/colors';

export type ValueOf<T> = T[keyof T];
export enum StatusEnum {
  open = 'open',
  closed = 'closed',
  inProgress = 'inProgress',
}

export const getIconStatus = (status: StatusEnum) => {
  console.log(status);

  switch (status) {
    case StatusEnum.open:
      return <CheckCircleIcon style={{ color: COLORS.open }} />;
    case StatusEnum.closed:
      return <ErrorIcon style={{ color: COLORS.closed }} />;
    case StatusEnum.inProgress:
      return <FormatListBulletedIcon style={{ color: COLORS.inProgress }} />;
    default:
      return '';
  }
};
