import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'

import { actionGetActiveUser, actionLoading } from './store/initial.saga'
import InitialView from './initial.view'

const InitialController = () => {
  const dispatch = useDispatch()
  const { loginError, initialLoading, activeUser } = useSelector((state) => state.initial)
  const { reset } = useNavigation();
  const [email, setEmail] = useState('')
 
  const handleEmail = value => {
    setEmail(value)
  }

  const handleNavigation = () => {
    reset({
      index: 0,
      routes: [{ name: 'Home' }],
    })
    dispatch(actionLoading(false))
  }
 
  const handleLogin = () => {
    dispatch(actionGetActiveUser({email: email, callback: handleNavigation} ))
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
