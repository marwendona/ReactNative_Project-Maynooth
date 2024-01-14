import React, { useEffect, useState } from 'react'
import { Slot } from 'expo-router'
import { Provider } from 'react-redux'
import store from '../store'
import * as Font from 'expo-font';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { service } from '../service';

const Layout = () => {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [token, setToken] = useState()
  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Satoshi Variable': require('../assets/fonts/Satoshi-Variable.ttf'),
      });
      setFontLoaded(true);
    }

    loadFonts();
  }, []);
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

    console.log(token);
  }, [])
  if (!fontLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <Slot />
    </Provider>
  );
}

export default Layout
