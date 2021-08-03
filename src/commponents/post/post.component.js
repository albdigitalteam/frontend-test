import React from 'react'
import styled from 'styled-components'
import { Modal } from 'react-native'

import { CommentInput } from '../comment'
import { Button } from '../shared'
import { colors } from '../../utils'

const InputPost = ({ visible, pressCancel, handleSend, loading }) => {

  return(
    <Wrapper>
      <Modal
        animationType='none'
        visible={visible}
        onRequestClose={() => pressCancel(!visible)}
      >
        <WrapperContent>
          <Button
            label='Concelar'
            disabled={loading}
            pill
            outline
            borderColor={colors.red} 
            onPress={() => pressCancel(!visible)}
          />
          <CommentInput
            loading={loading}
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
