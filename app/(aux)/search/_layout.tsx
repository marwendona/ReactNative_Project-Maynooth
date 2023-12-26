import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Stack, router } from 'expo-router'
import Icon from '../../../Components/Icon'
import theme from '../../../Components/theme'

const _layout = () => {
  return (
    <Stack 
      screenOptions={{
        headerLeft: (props) =>{ return <TouchableOpacity onPress={()=>{router.back()}}><Icon iconName='arrow_back' color={theme.colors.gray100} size='Small'/></TouchableOpacity>
          
        },
      }}
      >
      </Stack>
  )
}

export default _layout

const styles = StyleSheet.create({})