import React, { useState } from 'react'
import styled from 'styled-components'
import { Text, Button, Input } from '../shared'
import { colors } from '../../utils'

const CommentInput = ({ postId=null, handleSend, withTitle=false, width=70, title, desc, loading }) => {
  const [message, setMessage] = useState('')
  const [postMessage, setPostMessage] = useState('')

  const handleTitle = hasTitle => {
    if (hasTitle) return (
      <Input
        titleColor={colors.main}
        title={title}
        width={width}
        multiline
        value={postMessage}
        onChangeText={value => setPostMessage(value)}
      />
    )
  }

  return (
    <Wrapper title={withTitle}>
        {handleTitle(withTitle)}
        <Input
          titleColor={colors.main}
          title={desc}
          height={80}
          width={width}
          multiline
          value={message}
          onChangeText={value => setMessage(value)}
        />
      <WrapperSend>
        <Button
          label='Enviar'
          loading={loading}
          disabled={loading}
          labelColor={colors.white}
          spinnerColor={colors.white}
          pill
          bgColor={colors.green30}
          onPress={() => {
            handleSend({body: message, postId, postMsg: postMessage})
            setMessage('')
            setPostMessage('')
          }}
        />
      </WrapperSend>
    </Wrapper>
  )
}

const Wrapper = styled.View`
  margin-top: 8px;
  padding: 12px;
  border-radius: 12px;
  border: 1px solid gray;
  flex-direction: ${props => props.title ? 'column' : 'row'};
  justify-content: space-between;
  align-items: center;
  width: 100%;
`
const WrapperSend = styled.View``

export default CommentInput
