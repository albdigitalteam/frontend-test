import styled from 'styled-components';

type StyleProps = {
  highlight?: boolean;
}

export const Container = styled.span<StyleProps>`
  font-size: ${({highlight}) => highlight ? "20" : "16"}px;

`

export const Image = styled.img`
  width: 200px;
`;
