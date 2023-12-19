import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LogoMark, { LogoSize } from '../Components/Logomark'
import FormInputGroup from '../Components/FormInputGroup'
import { BaseInputLabelColor } from '../Components/BaseLabel'
import FormCheckbox from '../Components/FormCheckbox'
import ButtonRegular, { ButtonRegularSize } from '../Components/ButtonRegular'

const login = () => {
  return (
    <View>
      <LogoMark size={LogoSize.Small} />
      <FormInputGroup color={BaseInputLabelColor.Dark} labelPrimary='Email' iconLeftInner={'mail'} value='Your@email.com' ></FormInputGroup>
      <FormInputGroup color={BaseInputLabelColor.Dark} labelPrimary='Password' iconLeftInner={'lock'} value='Your Password' ></FormInputGroup>
      <View>
        <FormCheckbox size='Medium' label='Remember me' state='Uncheck'/>
        <Text>Forgot Password?</Text>
      </View>
      <View>
        <Text>Login</Text>
      </View>
      <View>
        <ButtonRegular iconLeft='google' size={ButtonRegularSize.Large} text='Google'/>
        <ButtonRegular iconLeft='facebook' size={ButtonRegularSize.Large} text='Facebook'/>
      </View>
      <View>
        <Text>Don&apost have an account?</Text>
      </View>
    </View>
  )
}

export default login

const styles = StyleSheet.create({})