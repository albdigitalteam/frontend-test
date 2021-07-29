import React from 'react'

import { Container, Content, Button, Text, Spinner } from '../../commponents/shared'
import { PostCard, PostComponent } from '../../commponents/post'
import { colors } from '../../utils'

const HomeView = ({ controller }) => {
  const {
    userId,
    loading,
    posts, 
    handleSendMessage,
    setShowPostModal, 
    showPostModal, 
    handleSendPost, 
    handleRemovepost } = controller
  return (
    <Container>
      <Content>
        <PostCard
          postlist={posts} 
          pressSenMessage={data => handleSendMessage(data)}
          pressRemovePost={id => handleRemovepost(id)}
          userId={userId}
        />
      </Content>
      <Button
        bgColor={colors.main}
        float
        onPress={() => setShowPostModal(!showPostModal)}
      >
        <Text color={colors.white}  weight='bold' helper>Publicar</Text>
      </Button>
      {showPostModal && 
        <PostComponent
          handleSend={data => handleSendPost(data)}
          pressCancel={() => setShowPostModal(!showPostModal)} 
          visible={showPostModal}  
        />
      }
      {loading && <Spinner message='Atualizando posts ...' />}
    </Container>
  )
}

export default HomeView