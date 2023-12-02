import { View } from 'react-native'
import React from 'react'
import Card1 from './Card1'

const CardTest: React.FC = () => {
  return (
    <View>
      <Card1
        price='500.000'
        subtitle='Card subtitle'
        title='Titre1'
        type='Product'
        orientation='Vertical'
      ></Card1>
      <Card1
        price='500.000'
        subtitle='Card subtitle'
        title='Titre2'
        type='Product'
        orientation='Horizontal'
        size='Small'
      ></Card1>
      <Card1
        price='500.000'
        subtitle='Card subtitle'
        title='Titre3'
        type='Product'
        orientation='Horizontal'
        size='Medium'
      ></Card1>
      <Card1
        subtitle='50'
        title='Titre'
        type='Collection'
      ></Card1>
      <Card1
        subtitle='Card subtitle'
        title='Titre'
        type='Variation'
      ></Card1>
    </View>
  )
}

export default CardTest
