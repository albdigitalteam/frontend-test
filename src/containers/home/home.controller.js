import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { 
  actionGetPosts, 
  actionSetNewComment, 
  actionSetLoading, 
  actionSetLoadingRemovePost,
  actionSetLoadingNewComment } from './store/home.saga'
import HomeView from './home.view'

const HomeController = () => {
  const { posts, loadingPosts, loadingRemovePost, loadingNewComment } = useSelector((state) => state.home)
  const [updatedPosts, setUpdatedPosts] = useState(posts)
  const [showPostModal, setShowPostModal] = useState(false)
  const { activeUser } = useSelector((state) => state.initial)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionGetPosts())
  }, [])

  useEffect(() => {
    handleUpdateList(posts)
  }, [posts])

  const handleUpdateList = posts => {
    setUpdatedPosts(posts)
  }

  const handleSendMessage = data => {
    dispatch(actionSetLoadingNewComment(true))
    try {
      setTimeout(() => {
        const index = posts.findIndex(( it => it.id === data.postId ))
        if (!posts[index].commentList[0].length) {
          let list = [...posts]
          list[index].commentList[0].push({
            ...data,
            name: activeUser?.name,
            email: activeUser?.email,
            id: 1
          })
          dispatch(actionSetNewComment(list))
        } else {
          let comments = posts[index].commentList[0]
          comments.splice(0,0,{
            ...data,
            name: activeUser?.name,
            email: activeUser?.email,
            id: posts[index].commentList[0].length + 1
          })
          comments.join()
          posts[index].commentList[0] = comments
          dispatch(actionSetNewComment(posts))
        }
        dispatch(actionSetLoadingNewComment(false))
      }, 1000)
    } catch(error) {}
  }

  const handleSendPost = data => {
    dispatch(actionSetLoading(true))
    setTimeout(() => {
      try {
        let newList = []
        newList = [{
          user: activeUser,
          body: data.body,
          userId: activeUser?.id,
          title: data.postMsg,
          id: posts.length + 1,
          commentList: [[]]
        }, ...posts]
      const newOrder = newList.sort((a, b) => b.id - a.id)
      
      dispatch(actionSetNewComment(newOrder))
      setShowPostModal(!showPostModal)
      dispatch(actionSetLoading(false))
      } catch(error) {}
    }, 1000)
  }

  const handleRemovepost = id => {
    dispatch(actionSetLoadingRemovePost(true))
    setTimeout(() => {
      try {
        let newList = []  
        newList = posts
        const index = newList.findIndex(( it => it.id === id ))
        if (index > -1) {
          newList.splice(index, 1);
        }
        dispatch(actionSetNewComment(newList))
        dispatch(actionSetLoadingRemovePost(false))
      } catch(error) {}
    }, 1000)

  }

  const controller = {
    handleRemovepost,
    handleSendMessage,
    setShowPostModal,
    handleSendPost,
    posts: updatedPosts,
    showPostModal,
    loadingPosts,
    loadingNewComment,
    loadingRemovePost,
    userId: activeUser?.id
  }

  return <HomeView controller={controller} />
}

export default HomeController
