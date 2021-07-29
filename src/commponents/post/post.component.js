import React from 'react'
import styled from 'styled-components'
import { Modal } from 'react-native'

import { CommentInput } from '../comment'
import { Button, Text } from '../shared'
import { colors } from '../../utils'

const InputPost = ({ visible, pressCancel, handleSend }) => {

  return(
    <Wrapper>
      <Modal
        animationType='none'
        visible={visible}
        onRequestClose={() => pressCancel(!visible)}
      >
        <WrapperContent>
          <Button
            pill
            outline
            borderColor={colors.red} 
            onPress={() => pressCancel(!visible)}>
            <Text color={colors.red} weight='bold' helper>Concelar</Text>
          </Button>
          <CommentInput
            title='Titulo de seu post'
            desc='Conteúdo de seu post'
            width={100}
            withTitle
            handleSend={handleSend}
          />
        </WrapperContent>
      </Modal>
    </Wrapper>
  )
}

const Wrapper = styled.View`
  background-color: ${colors.white};
  flex: 1;
`
const WrapperContent = styled.View`
  padding: 16px;
  margin-top: 22px;
`

export default InputPost
