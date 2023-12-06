import React from 'react'
import { StyleSheet, View } from 'react-native'
import Icon from './Icon'
import theme from './theme'
interface RatingUserProps {
  rating: number
  size: 'Small' | 'Medium'
}

export const RatingUser: React.FC<RatingUserProps> = ({ rating, size }) => {
  const icon1color = rating > 0 ? theme.colors.yellow100 : theme.colors.gray20
  const icon2color = rating > 1 ? theme.colors.yellow100 : theme.colors.gray20
  const icon3color = rating > 2 ? theme.colors.yellow100 : theme.colors.gray20
  const icon4color = rating > 3 ? theme.colors.yellow100 : theme.colors.gray20
  const icon5color = rating > 4 ? theme.colors.yellow100 : theme.colors.gray20
  return (

        <View style={styles.ratingUser}>
            <Icon iconName={'star'} color={icon1color} size={size}/>
            <Icon iconName={'star'} color={icon2color} size={size}/>
            <Icon iconName={'star'} color={icon3color} size={size}/>
            <Icon iconName={'star'} color={icon4color} size={size}/>
            <Icon iconName={'star'} color={icon5color} size={size}/>
        </View>
  )
}
const styles = StyleSheet.create({
  ratingUser: {
    flexShrink: 0,
    flexDirection: 'row',
    alignItems: 'flex-start',
    columnGap: 0
  }
})
