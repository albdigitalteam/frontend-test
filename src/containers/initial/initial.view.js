import React from 'react'
import styled from 'styled-components'

import { Container, Button, Text, Input } from '../../commponents/shared'
import { colors, validators } from '../../utils'

const InitialView = ({ controller }) => {
  const { email, handleEmail, handleLogin } = controller
  
  return (
    <Container>
      <Wrapper>
        <Text align='center' color={colors.main} title>Posts Air Liquide</Text>
        <Text align='center' helper color={colors.gray50}>para interagir é só informar o email cadastrado</Text>
        <Input
          autoFocus
          value={email}
          onChangeText={value => handleEmail(value)}
        />
        <Button
          pill
          shadow
          outline
          borderColor={colors.main}
          onPress={handleLogin}
          // disabled={validators.emailIsValid(email)}
        >
          <Text weight='bold'>Entrar</Text>
        </Button>
      </Wrapper>
    </Container>
  )
}

const Wrapper = styled.View`
  flex: 1
  justify-content: center;
  padding: 20px;
  background-color: ${colors.white};
`

export default InitialView