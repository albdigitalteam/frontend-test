import React from 'react'

import { Container, Content, Button, Text } from '../../commponents/shared'
import { PostCard } from '../../commponents/post'
import { colors } from '../../utils'

const HomeView = ({ controller }) => {
  const { posts } = controller
  return (
    <Container>
      <Content>
        <PostCard postlist={posts} />
      </Content>
      <Button
        bgColor={colors.main}
        float
        onPress={() => {}}
      >
        <Text color={colors.white}  weight='bold' helper>Publicar</Text>
      </Button>
    </Container>
  )
}

export default HomeView