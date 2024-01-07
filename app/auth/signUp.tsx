import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import LogoMark, { LogoSize } from '../../Components/Logomark'
import FormInputGroup from '../../Components/FormInputGroup'
import BaseLabel, { BaseInputLabelColor } from '../../Components/BaseLabel'
import ButtonRegular, { ButtonRegularSize, ButtonRegularColor, ButtonRegularState, ButtonRegularType } from '../../Components/ButtonRegular'
import { router } from 'expo-router'
import Divider from '../../Components/Divider'
import theme from '../../Components/theme'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { service } from '../../service'

const SignUp = () => {
  const [ email , setEmail] = useState('')
  const [ password , setPassword] = useState('')
  const emailFn=( text:string )=>{setEmail(text)  }
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
    } catch (e) {
      // saving error
    }
    router.push({
      pathname : '(tabs)/home'
    })
    console.log(data)
  }

  return (
        <View style={[styles.MainPage]}>
            <LogoMark size={LogoSize.Small} />
            <View style={[styles.buttonsocialwrapper, styles.col]}>
                <View style={styles.buttonsocial}>
                <ButtonRegular
                    color={ButtonRegularColor.Light}
                    state={ButtonRegularState.Default}
                    size={ButtonRegularSize.Large}
                    type={ButtonRegularType.Filled}
                    iconLeft="google"
                    text="Continue with Google"
                />
                </View>
                <View style={styles.buttonsocial}>
                <ButtonRegular
                    color={ButtonRegularColor.Light}
                    state={ButtonRegularState.Default}
                    size={ButtonRegularSize.Large}
                    type={ButtonRegularType.Filled}
                    iconLeft="facebook"
                    text="Continue with Facebook"
                />
                </View>
            </View>
            <View style={styles.divider}>
                <Divider text={'or'} type={'Horizontal'} />
            </View>
            <View style={[styles.formsignup, styles.col]}>
                <FormInputGroup
                    color={BaseInputLabelColor.Dark}
                    labelPrimary="Email"
                    iconLeftInner="mail"
                    value="your@email.com"
                    content={emailFn}

                />
                <FormInputGroup
                    color={BaseInputLabelColor.Dark}
                    labelPrimary="Password"
                    iconLeftInner="lock"
                    value="Your password"
                    content={passwordFn}
                />
                <View style={styles.buttonsignupwrapper}>
                    <View style={styles.buttonsignup}>
                      <TouchableOpacity onPress={login}>
                        <ButtonRegular
                            size={ButtonRegularSize.Large}
                            color={ButtonRegularColor.Dark}
                            state={ButtonRegularState.Default}
                            type={ButtonRegularType.Filled}
                            text="Create account"/>
                      </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.ctasignupwrapper}>
                <Text style={styles.alreadyhaveanaccount}>Already have an account?</Text>
                <TouchableOpacity onPress={() => { router.push({ pathname: '/auth/signIn' }) }}>
                    <Text style={styles.linksignup}>Log in</Text>
                </TouchableOpacity>
            </View>
        </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
  signUp: {
    flexShrink: 0,
    height: 800,
    width: 360,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    alignItems: 'center',
    justifyContent: 'center',
    rowGap: 24,
    paddingVertical: 88,
    paddingHorizontal: 0
  },
  buttonsocialwrapper: {
    alignSelf: 'stretch',
    flexShrink: 0,
    alignItems: 'flex-start',
    rowGap: 24,
    paddingVertical: 0,
    paddingHorizontal: 24,
    margin: 12
  },
  divider: {
    alignSelf: 'stretch',
    flexShrink: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 0,
    paddingVertical: 0,
    paddingHorizontal: 0
  },
  formsignup: {
    alignSelf: 'stretch',
    flexShrink: 0,
    alignItems: 'flex-start',
    rowGap: 24,
    paddingVertical: 0,
    paddingHorizontal: 24
  },
  buttonsignupwrapper: {
    alignSelf: 'stretch',
    flexShrink: 0,
    paddingBottom: 0,
    alignItems: 'flex-start',
    rowGap: 0,
    paddingHorizontal: 0
  },
  buttonsignup: {
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
  ctasignupwrapper: {
    flexShrink: 0,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    columnGap: 4
  },
  alreadyhaveanaccount: {
    flexShrink: 0,
    textAlign: 'left',
    color: 'rgba(9, 17, 31, 1)',
    fontFamily: 'Satoshi Variable',
    fontSize: 14,
    fontWeight: '400',
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
  },
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
  col: {
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'flex-start',
    overflow: 'hidden',
    flexDirection: 'column'
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
  buttonsocial: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: theme.colors.gray20,
    borderWidth: 1,
    borderRadius: 12,
    width:'100%'
  }
}

)
