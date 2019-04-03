import { css } from 'styled-components/macro';

const sizes = {
  desktop: 1440,
  laptop: 1024,
  tablet: 768,
  phone: 425,
  smallPhone: 375,
};

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});
