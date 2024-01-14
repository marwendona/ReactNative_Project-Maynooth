import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import LogoMark, { LogoSize } from '../../Components/Logomark'
import FormInputGroup from '../../Components/FormInputGroup'
import { BaseInputLabelColor } from '../../Components/BaseLabel'
import FormCheckbox from '../../Components/FormCheckbox'
import ButtonRegular, { ButtonRegularColor, ButtonRegularSize, ButtonRegularState, ButtonRegularType } from '../../Components/ButtonRegular'
import Divider from '../../Components/Divider'
import { TouchableOpacity } from 'react-native-gesture-handler'
import theme from '../../Components/theme'
import { router } from 'expo-router'
import { themeGlobal } from '../../styles/themeGlobal'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { service } from '../../service'
import {useDispatch} from "react-redux";

const signIn = () => {
  const dispatch = useDispatch();
  const [ email , setEmail] = useState('')
  const [ password , setPassword] = useState('')
  const emailFn=(text:string )=>{setEmail(text)}
  const passwordFn=( text:string )=>{ setPassword(text)}
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
      await AsyncStorage.setItem("userData", JSON.stringify(data?.user));
      dispatch({ type: "SET_USER", payload: data?.user });
    } catch (e) {
    }
    router.push({
      pathname : '(tabs)/home'
      // pathname : '(tabs)/profile'
    })
    console.log(data)
  }



  return (
    <View style={styles.MainPage}>
      <View style={[{ margin: 12 }]}>
        <LogoMark size={LogoSize.Small} />
      </View>
      <View style={[{ margin: 12 }]}>
        <FormInputGroup  color={BaseInputLabelColor.Dark} labelPrimary='Email' iconLeftInner={'mail'} value='Your@email.com' content={emailFn} ></FormInputGroup>
      </View>
      <View style={[{ margin: 12 }]}>
        <FormInputGroup color={BaseInputLabelColor.Dark} labelPrimary='Password' iconLeftInner={'lock'} value='Your Password' content={passwordFn} ></FormInputGroup>
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
          <TouchableOpacity  onPress={login}>
            <Text style={styles.Logintext}>{'Log in'}</Text>
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
        <TouchableOpacity style={styles.linksignup} onPress={() => { router.push({ pathname: '/auth/signUp' }) }} ><Text>Sign up</Text></TouchableOpacity>
      </View>
    </View>
  )
}

export default signIn

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
