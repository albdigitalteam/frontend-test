import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { actionGetPosts } from './store/home.saga'
import HomeView from './home.view'

const HomeController = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(actionGetPosts())
  }, [])

  const controller = {

  }

  return <HomeView controller={controller} />
}

export default HomeController
