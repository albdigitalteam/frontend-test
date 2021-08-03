import React from 'react';
import { ActivityIndicator } from 'react-native'
import styled, { css } from 'styled-components'
import { Text } from './'
import { colors } from '../../utils'

const Button = styled.TouchableOpacity`
  padding: 16px 16px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${props => props.icon && css`padding: 16px;`}
  ${props => props.width && css`width: ${props.width}%;`}
  ${props => props.bgColor && css`background-color: ${props.bgColor};`}
  ${props => props.full && css`
    width: 100%;
    align-items: center;
  `}
  ${props => props.outline && css`
    border-width: 1px;
    border-color: ${props.borderColor};
    background-color: transparent;
  `}
  ${props => props.disabled && css`
    opacity: 0.4;
  `}
  ${props => props.rounded && css`
    border-radius: 4px;
  `}
  ${props => props.float && css`
    border-radius: 30px;
    position: absolute;
    top: 15px;
    right: 15px;
  `}
  ${props => props.pill && css`
    border-radius: 32px;
    padding: 4px 12px;
  `}
  ${props => props.shadow && css`
    shadow-color: gray;
    shadow-offset: 0px 0px;
    shadow-opacity: 0.5;
    shadow-radius: 4px;
  `}
`

export default ({ ...props }) => (
  <Button {...props}>
    {props.loading && <ActivityIndicator color={props.spinnerColor} />}
    {!props.loading && 
      <Text 
        weight={props?.labelWeight ? props.labelWeight : 'normal'}
        color={props?.labelColor ? props.labelColor : colors.black}
        size={props?.labelSize ? props.labelSize : 16} >
          {props.label}
      </Text>
    }
  </Button>
)
