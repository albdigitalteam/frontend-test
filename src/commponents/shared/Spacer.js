import styled from 'styled-components'

export default styled.View`
  height: ${props => props.height ? props.height : 0}px;
  width: ${props => props.width ? props.width : 0}px;
`