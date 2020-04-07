import styled from 'styled-components';

export const SVG = styled.svg`
  width: ${props => `${props.size}px`};
  height: ${props => `${props.size}px`};

  path {
    fill: #0562dc;
    stroke: #000;
    stroke-width: 5;
  }
`;
