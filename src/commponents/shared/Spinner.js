import React from 'react'
import { ActivityIndicator } from 'react-native'
import styled from 'styled-components'

import { Text } from './'
import colors from '../../utils/colors'

const Spinner = ({ color=colors.white, size='large', message }) => (
  <View>
    <Text align='center' color={colors.white}>{message}</Text>
    <ActivityIndicator size={size} color={color} />
  </View>
)

Spinner.defaultProps = {
  message: ''
}

const View = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: 'rgba(0, 0, 0, 0.5)';
  flex: 1;
  justify-content: center;
  align-items: center
`
export default Spinner
