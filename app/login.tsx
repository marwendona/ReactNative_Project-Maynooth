import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import LogoMark, { LogoSize } from '../Components/Logomark'
import FormInputGroup from '../Components/FormInputGroup'
import { BaseInputLabelColor } from '../Components/BaseLabel'
import FormCheckbox from '../Components/FormCheckbox'
import ButtonRegular, { ButtonRegularColor, ButtonRegularSize, ButtonRegularState, ButtonRegularType } from '../Components/ButtonRegular'
import Divider from '../Components/Divider'
import { TouchableOpacity } from 'react-native-gesture-handler'
import theme from '../Components/theme'
import { router } from 'expo-router'
import { themeGlobal } from '../styles/themeGlobal'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { service } from '../service'

const login = () => {

  const [ email , setEmail] = useState('admin@gmail.com')
  const [ password , setPassword] = useState('admin')

  const login = async() => {

    console.log(email, password)

    const {data} = await service.login.loginCreate({email, password})
    let value = data?.tokens?.access
    service.setSecurityData({
      headers: {
        authorization: 'Bearer '+data?.tokens?.access.token
      }

    })

    try {
      await AsyncStorage.setItem('token', JSON.stringify(value));
    } catch (e) {
      // saving error
    }
    router.push({
      pathname : 'SearchResult/SearchResult'
    })
    console.log(data)
  }



  return (
    <View style={styles.MainPage}>
      <View style={[{ margin: 12 }]}>
        <LogoMark size={LogoSize.Small} />
      </View>
      <View style={[{ margin: 12 }]}>
        <FormInputGroup color={BaseInputLabelColor.Dark} labelPrimary='Email' iconLeftInner={'mail'} value='Your@email.com' ></FormInputGroup>
      </View>
      <View style={[{ margin: 12 }]}>
        <FormInputGroup color={BaseInputLabelColor.Dark} labelPrimary='Password' iconLeftInner={'lock'} value='Your Password' ></FormInputGroup>
      </View>
      <View style={styles.Login}>
        <View style={[{ margin: 12 }]}>
          <FormCheckbox size='Medium' label='Remember me' state='Uncheck' />
        </View>
        <View style={[{ margin: 12 }]}>
          <Text style={styles.linksignup}>Forgot Password?</Text>
        </View>
      </View>
      <View style={[{ margin: 12 }, styles.buttonlogin]} >
        <View style={styles.buttontextwrapper}>
          <TouchableOpacity style={styles.Logintext} onPress={login}>
            {'Log in'}
          </TouchableOpacity>
        </View>
      </View>
      <View >
        <Divider text='or continue with' type='Horizontal' />
      </View>
      <View style={[{ margin: 12 }, styles.Login]} >
        <View style={[{ margin: 12, borderColor: theme.colors.gray20, borderWidth: 1, borderRadius: 12 }]}>
          <ButtonRegular iconLeft='google' size={ButtonRegularSize.Large} text='Google' color={ButtonRegularColor.Light} type={ButtonRegularType.Filled} state={ButtonRegularState.Default} />
        </View>
        <View style={[{ margin: 12, borderColor: theme.colors.gray20, borderWidth: 1, borderRadius: 12 }]}>
          <ButtonRegular iconLeft='facebook' size={ButtonRegularSize.Large} text='Facebook' color={ButtonRegularColor.Light} type={ButtonRegularType.Filled} state={ButtonRegularState.Default} />
        </View>
      </View>
      <View style={styles.Login}>
        <Text style={themeGlobal.themeGlobalText.bodyMedium}>Don't have an account? </Text>
        <TouchableOpacity style={styles.linksignup} onPress={() => { router.push({ pathname: 'signUp' }) }} >Sign up</TouchableOpacity>
      </View>
    </View>
  )
}

export default login

const styles = StyleSheet.create({
  MainPage: {
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'flex-start',
    overflow: 'hidden',
    flexDirection: 'column',
    height: '100%',
    width: '100%'
  },
  Login: {
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'flex-start',
    overflow: 'hidden',
    flexDirection: 'row',
    width: '80%'
  },
  buttonlogin: {
    alignSelf: 'stretch',
    flexShrink: 0,
    backgroundColor: 'rgba(9, 17, 31, 1)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 4,
    padding: 10,
    borderRadius: 12
  },
  buttontextwrapper: {
    flexShrink: 0,
    flexDirection: 'row',
    alignItems: 'flex-start',
    columnGap: 0,
    paddingVertical: 0,
    paddingHorizontal: 4
  },
  Logintext: {
    flexShrink: 0,
    textAlign: 'left',
    color: 'rgba(255, 255, 255, 1)',
    fontFamily: 'Satoshi Variable',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0,
    lineHeight: 20
  },
  linksignup: {
    flexShrink: 0,
    textAlign: 'left',
    color: 'rgba(9, 17, 31, 1)',
    fontFamily: 'Satoshi Variable',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0,
    lineHeight: 20
  }
}
)
