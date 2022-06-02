import styled from '@emotion/styled';
import { centeredFlex, getDefaultFontfamily } from 'commonStyles';
import { COLORS } from 'constants/colors';

export const AppWrapper = styled.div`
  background-color: ${COLORS.white};
  flex-direction: column;
  ${centeredFlex}
  ${getDefaultFontfamily}
  color: ${COLORS.neutralDarkest};
`;

export const HolderTicket = styled.div`
  display: flex;
  min-height: 305px;
  max-width: 964px;
  align-items: flex-start;
`;

export const CheckBoxWrapper = styled.div`
  min-height: 305px;
  align-self: flex-start;
  height: 100%;
  border-right: 1px solid ${COLORS.whiteLight};
  background-color: ${COLORS.whiteSea};
`;
