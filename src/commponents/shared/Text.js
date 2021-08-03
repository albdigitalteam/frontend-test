import styled, { css } from 'styled-components';

const Text = styled.Text`
  color: ${props => props.color || '#000000'};
  font-size: ${props => props.size ? props.size : 16}px;
  line-height: 24px;
  text-align: ${props => props.align};
  font-weight: ${props => props.weight};
  ${props => props.small && css`
    font-size: 10px;
    line-height: 16px;
  `}
  ${props => props.caption && css`
    font-size: 12px;
    line-height: 16px;
  `}
  ${props => props.helper && css`
    font-size: 14px;
    line-height: 20px;
  `}
  ${props => props.title && css`
    font-size: 20px;
    line-height: 32px;
  `}
  ${props => props.headline && css`
    font-size: 24px;
    line-height: 36px;
  `}
  ${props => props.link && css`
    text-decoration-line: underline;
  `}
`

Text.defaultProps = {
  align: 'left',
  weight: 'normal',
  theme: {
    text: '#000000'
  }
}

export default Text
