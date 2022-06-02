import styled from '@emotion/styled';
import { COLORS } from 'constants/colors';

export const StatusWrapper = styled.div`
  border: 1px solid ${COLORS.defaultWhite};
  width: auto;
  border-radius: 4px;
  margin: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.03);
  border-radius: 8px;
  max-width: 252px;
  min-height: 14px;
  svg {
    width: 14px;
    margin-right: 5px;
  }
  span {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
  }
`;

export const StatusElementButton = styled.div<{isActive: boolean, color: string}>`
  display: flex;
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;
  svg {
    color: ${({isActive, color}) => isActive ? color:  COLORS.whiteLight };
  }
  span {
    color: ${({isActive, color}) => isActive ? COLORS.neutralDarkest:  COLORS.whiteLight };
  }
`;
