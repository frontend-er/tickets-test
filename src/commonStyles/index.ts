import { css } from '@emotion/react';

export const centeredFlex = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const hideScrollbar = css`
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome and Safari */
  }
`;

export const threeDotsText = css`
  overflow: clip;
  display: inline-block;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const getDefaultFontfamily = css`
  font-family: Roboto;
`;
