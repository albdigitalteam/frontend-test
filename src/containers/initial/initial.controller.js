import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import { actionRequestUsers, actionGetActiveUser } from './store/initial.saga'
import InitialView from './initial.view'

const InitialController = () => {
  const dispatch = useDispatch();
  const { teste } = useSelector((state) => state.initial);
  const { reset } = useNavigation();
  const [email, setEmail] = useState('')
 
  const handleEmail = value => {
    setEmail(value)
  }

  const handleCallback = () => {
    reset({
      index: 0,
      routes: [{ name: 'Home' }],
    })
  }
 
  const handleLogin = () => {
    dispatch(actionGetActiveUser({eamil: email, callback: handleCallback()} ))
    // dispatch(actionRequestUsers())
  }

  const controller = {
    email,
    handleEmail,
    handleLogin
  }

  return <InitialView controller={controller} />
}

export default InitialController
