import React, { useEffect, useState } from 'react'
import { Slot, Tabs, router } from 'expo-router'
import { Provider } from 'react-redux'
import store from '../store'
import { service } from '../service'
import Card1 from '../components/Card1'
import { Text } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFonts } from 'expo-font'

const Layout = () => {
  const [specData, setSpecData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [token, setToken] = useState()
  const [fontsLoaded] = useFonts({
    'Satoshi Variable': require('../assets/fonts/Satoshi-Variable.ttf')
  })
  const verifToken = async () => {
    const value = await AsyncStorage.getItem('token')
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
  }, [])

  useEffect(() => {
    if (!isLoading) {
      if (!token) {
        router.push('login')
      }
    }
  }, [isLoading])

  useEffect(() => {
    if (!isLoading) {
      router.push('signUp')
    }
  }, [isLoading])

  /* useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await service.products.productsList();
        const fetchedSpecData = data.data.paginatedResult;
        setSpecData(fetchedSpecData);
        console.log(fetchedSpecData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);  */

  if (isLoading) { return <Text>is Loading ...</Text> } else {
    return (
      <Provider store={store}>
        <Slot></Slot>

      </Provider>
    )
  }
}

export default Layout
