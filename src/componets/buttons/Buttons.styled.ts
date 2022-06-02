import styled from '@emotion/styled';
import { COLORS } from 'constants/colors';

export const ButtonsWrapper = styled.div`
  border-top: 1px solid ${COLORS.defaultWhite};
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    text-transform: uppercase;
    color: ${COLORS.neutralDarkest};
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 2px;
  }
`;

export const TableMultipleWrapper = styled.div`
  border: 1px solid ${COLORS.defaultWhite};
  border-radius: 4px;
  margin: 15px;
`;

export const LabelHolder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 3px 10px;
  gap: 10px;
  background-color: ${COLORS.defaultWhite};
  border-radius: 2px;
  margin: 5px 10px;
  font-size: 12px;
`;

export const ChildrenWrapper = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  margin: 5px 10px;
`;

export const ChildrenComponetWrapper = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  margin: 5px 10px;
  display: flex;
  justify-content: space-between;
`;

export const TableRow = styled.div`
  border-bottom: 1px solid ${COLORS.defaultWhite};
  display: flex;
  justify-content: space-between;
  &:last-child {
    border-bottom: none;
  }
`;
