import styled from 'styled-components';

export default styled.ScrollView`
  flex: 1;
  padding: ${props => props.noPadding ? 0 : 16}px;
`
