import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { actionGetPosts } from './store/home.saga'
import HomeView from './home.view'

const HomeController = () => {
  const { posts } = useSelector((state) => state.home);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionGetPosts())
  }, [])

  const controller = {
    posts
  }

  return <HomeView controller={controller} />
}

export default HomeController
