import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'

interface WelcomeProps {
  name: string
}
const Welcome: React.FC<WelcomeProps> = ({ name }) => {
  const dispatch = useDispatch()
  return (
    <View>

    <Button
        color={'red'}
        title="Increment"
        onPress={() => dispatch({ type: 'INCREMENT' })}
      />
      <Button
      color={'red'}
        title="Decrement"
        onPress={() => dispatch({ type: 'DECREMENT' })}
      />
      <Text>Welcome {name}</Text>
    </View>
  )
}

export default Welcome

