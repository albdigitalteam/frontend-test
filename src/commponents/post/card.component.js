import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { Text, Button } from '../shared'
import { CommentInput } from '../comment'
import { colors } from '../../utils'

const handleComments = (list=[], show, pressSenMessage, postId) => {
  return(
    <ViewWrapper>
      {<ViewWrapper>
        {show && <CommentInput postId={postId} handleSend={pressSenMessage} desc='comentar no post...' />}
        {list.length ? list[0].map((item, ix) => (
          <BoxPost key={ix}>
            <Text color={colors.main2} weight='bold' helper> por: {item.email}</Text>
            <Text color={colors.gray50} weight='bold' helper> {item.body}</Text>
          </BoxPost>
        )) :  <Text align='center' color={colors.gray50}>Post Sem comentários!</Text>} 
      </ViewWrapper>}
    </ViewWrapper>
  )
}

const PostCard = ({ postlist = [], pressSenMessage, pressRemovePost, userId }) => {
  const [itemOpen, setItemOpen] = useState({index:'', cmt: [], boxComment: false })

  const handleShowComments = (ix, commentList, isOpen, boxMessage) => {
    if (!isOpen && !boxMessage) return setItemOpen({ index: ix, cmt: commentList, boxComment: false })
    if ((!isOpen && boxMessage) || (isOpen && boxMessage)) return setItemOpen({ index: ix, cmt: commentList, boxComment: true })
    setItemOpen({ index: '', cmt: [], boxComment: false })
  }

  return postlist.map((post, ix) => {
    const isOpen = itemOpen.index === ix
    return (
      <ViewWrapper key={ix}>
        <Wrapper>
          <WrapperProfile>
            <Profile />
            <ViewWrapper>
              <Text color={colors.main} weight='bold' helper>Autor:</Text>
              <Text color={colors.main} weight='bold' title>{post.user.name}</Text>
            </ViewWrapper>
          </WrapperProfile>
          <BoxPost isPost>
            {(userId === post.userId) &&
              <ButtonBox remove>
                <Button
                  pill
                  outline
                  borderColor={colors.red} 
                  onPress={() => pressRemovePost(post.id)}>
                  <Text color={colors.red} weight='bold' helper> Excluir post</Text>
                </Button>
              </ButtonBox>
            }
            <Text color={colors.main2} weight='bold' helper align='center'>{post.title}</Text>
            <Text color={colors.gray50} weight='bold'>{post.body}</Text>
          </BoxPost>
          <WrapperProfile>
            <ButtonBox see>
              <Button
                pill
                outline
                borderColor={colors.green30}
                width={49}
                onPress={() => handleShowComments(ix, post.commentList, isOpen, false)}>
                <Text color={colors.green30} weight='bold' helper>
                  {isOpen ? 'Ocutar' : 'Ver' } Comentários
                </Text>
              </Button>
              {(userId !== post.userId) &&
                <Button
                  pill
                  outline
                  borderColor={colors.green30}
                  width={49}
                  onPress={() => handleShowComments(ix, post.commentList, isOpen, !itemOpen.boxComment)}>
                  <Text color={colors.green30} weight='bold' helper> Comentar </Text>
                </Button>
              }
            </ButtonBox>
          </WrapperProfile>
          {isOpen && handleComments(itemOpen.cmt, itemOpen.boxComment, pressSenMessage, post.id)}
        </Wrapper>
      </ViewWrapper>
    )
  })
}

const Wrapper = styled.View`
  borderBottomWidth: 1px;
  borderBottomColor: ${colors.main};
  padding-bottom: 8px;
  margin-top: 12px;
`
const WrapperProfile = styled.View`
  flex-direction: row;
  align-items: center;
`
const ViewWrapper = styled.View``
const ButtonBox = styled.View`
  margin-top: 8px;
  ${props => props.remove && css`
    width: 100%;
    padding-left: 20%;
    padding-right: 20%;
    align-items: center;
  `}
  ${props => props.see && css`
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  `}
`
const Profile = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  border: 1px solid ${colors.main};
  margin-right: 16px;
`
const BoxPost = styled.View`
  margin-top: 8px;
  padding: 4px;
  width: 100%;
  ${props => props.isPost && css`
    border-width: 1px;
    border-color: ${colors.gray50}
    border-radius: 12px;
  `}
  ${props => !props.isPost && css`
    borderBottomWidth: 1px;
    borderBottomColor: ${colors.gray40};
    padding: 24px;
  `}
`

export default PostCard
