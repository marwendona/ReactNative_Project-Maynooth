import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Link, Redirect, Slot, router } from 'expo-router'
import { Provider, useDispatch, useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFonts } from 'expo-font'
import { service } from '../service'
import store from '../store'

const Index = () => {

  const [loaded,setLoaded] = useState(false)
  const [specData, setSpecData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [token, setToken] = useState()
  const verifToken = async () => {
    const value = await AsyncStorage.getItem('token')
    console.log(value);

    if (value) {
      setToken(JSON.parse(value).token)
      service.setSecurityData({
        headers: {
          authorization: 'Bearer ' + JSON.parse(value).token
        }

      })
    }
  }
  useEffect(() => {
    console.log('init page')
    verifToken()
    setIsLoading(false)
    console.log(token);
  }, [])


  useEffect(() => {
    console.log('init token');
    console.log(!isLoading,!token);

    if (!isLoading) {
      router.push('/auth/signIn')
      console.log(token);

    }

  }, [token])

  if (isLoading) { return<View>
    <Text>Loading</Text>
  </View>} else {
    return (
      <Provider store={store}>
        <Slot></Slot>
        <Redirect href="/OnBoardingScreens"/>

      </Provider>
    )
  }
}

export default Index

const styles = StyleSheet.create({})
