import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Slot, Stack, router } from 'expo-router'

const AuxLayout = () => {
  return (
      <Stack 
      screenOptions={{
        headerLeft: (props) =>{ return <TouchableOpacity onPress={()=>{router.back()}}><Text>go back</Text></TouchableOpacity>
          
        },
      }}
      >



      </Stack>
  )
}

export default AuxLayout

const styles = StyleSheet.create({})