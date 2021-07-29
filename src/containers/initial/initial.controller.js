import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'

import { actionGetActiveUser } from './store/initial.saga'
import InitialView from './initial.view'

const InitialController = () => {
  const dispatch = useDispatch()
  const { loginError, initialLoading } = useSelector((state) => state.initial)
  const { reset } = useNavigation();
  const [email, setEmail] = useState('')
 
  const handleEmail = value => {
    setEmail(value)
  }

  const handleCallback = () => {
    setTimeout(() => {
      reset({
        index: 0,
        routes: [{ name: 'Home' }],
      })
    }, 2000)
  }
 
  const handleLogin = () => {
    dispatch(actionGetActiveUser({email: email, callback: handleCallback()} ))
  }

  const controller = {
    loginError,
    loading: initialLoading,
    email,
    handleEmail,
    handleLogin
  }

  return <InitialView controller={controller} />
}

export default InitialController
