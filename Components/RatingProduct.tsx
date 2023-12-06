import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from './Icon'
import theme from './theme'

interface RatingProductProps {
  text: string
  size: 'Small' | 'Medium'
}
const RatingProduct: React.FC<RatingProductProps> = ({ text, size }) => {
  const styles = size === 'Medium' ? stylesMedium : stylesSmall

  return (<View style={styles.ratingProduct}>
                  <Icon iconName={'star_filled'} size={size} color={theme.colors.yellow100}/>
                  <Text style={styles.label}>
                        {text}
                  </Text>
            </View>)
}
export default RatingProduct
const stylesMedium = StyleSheet.create({
  ratingProduct: {
    flexShrink: 0,
    flexDirection: 'row',
    alignItems: 'flex-start',
    columnGap: 4
  },
  label: {
    flexShrink: 0,
    textAlign: 'left',
    color: 'rgba(76, 89, 112, 1)',
    fontFamily: 'Satoshi Variable',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0,
    lineHeight: 20
  }
})
const stylesSmall = StyleSheet.create({
  ratingProduct: {
    flexShrink: 0,
    flexDirection: 'row',
    alignItems: 'flex-start',
    columnGap: 2
  },
  label: {
    flexShrink: 0,
    textAlign: 'left',
    color: 'rgba(76, 89, 112, 1)',
    fontFamily: 'Satoshi Variable',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0,
    lineHeight: 16
  }
})
