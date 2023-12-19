import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Link } from 'expo-router'
import { useDispatch, useSelector } from 'react-redux'

const Index = () => {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();

  const [users] = useState([{
    name: 'test'
  }, {
    name: 'test2'
  }])
  return (
    <View>
      <Text>Index{count}</Text>

      <Button
        title="Increment"
        onPress={() => dispatch({ type: 'INCREMENT' })}
      />
      <Button
        title="Decrement"
        onPress={() => dispatch({ type: 'DECREMENT' })}
      />
      <Link href ="/Onboarding/index1" > test </Link>
    </View>
  )
}

export default Index

const styles = StyleSheet.create({})
