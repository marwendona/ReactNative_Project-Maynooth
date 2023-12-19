import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const DetailProduct = () => {
    const localData = useLocalSearchParams()
    console.log(localData)
  return (
    <View>
      <Text>DetailProduct</Text>
    </View>
  )
}

export default DetailProduct

const styles = StyleSheet.create({})