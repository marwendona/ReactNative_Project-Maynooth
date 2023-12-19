import { StyleSheet, Text, Touchable, View } from 'react-native'
import React from 'react'
import { Tabs, router } from 'expo-router'
import { TouchableOpacity } from 'react-native-gesture-handler'

const HomeLayout = () => {
  return (
    <Tabs> 
      <Tabs.Screen
      name='home'
      options={{
        headerLeft: ()=><Text>header left</Text>,
        headerRight: ()=><TouchableOpacity onPress={()=>{router.push({pathname: "(aux)/notification"})}}><Text>header right</Text></TouchableOpacity>,
        tabBarIcon : ({focused})=>{return (<Text>{focused ? 'oui': 'non'}</Text>)} 

      }}>

      </Tabs.Screen>

      <Tabs.Screen
      name='profile'
      options={{
        headerLeft: ()=><Text>header left</Text>,
        headerRight: ()=><TouchableOpacity onPress={()=>{router.push({pathname: "(aux)/notification"})}}><Text>header right</Text></TouchableOpacity>,
        tabBarIcon : ({focused})=>{return (<Text>{focused ? 'oui': 'non'}</Text>)} 

      }}>

      </Tabs.Screen>
    </Tabs>
  )
}

export default HomeLayout

const styles = StyleSheet.create({})