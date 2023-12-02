import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { themeGlobal } from '../styles/themeGlobal'
import { Badge, BadgeSize, BadgeType } from './Badge'

interface PriceProps {
  size?: 'Small' | 'Medium'
  price?: string
  achatProduit?: () => void
}

const PriceComponent: React.FC<PriceProps> = ({ size, price }) => {
  const styleSize = 'bodySmall'
  return (
    <View style={styles.price}>
                              <Text style={themeGlobal.themeGlobalText[styleSize]}>
                                    {'Rp 500.000'}
                              </Text>
                              <View style={styles.initialpricewrapper}>
                                    <Text style={styles.initialprice}>
                                          {price}
                                    </Text>
                                    <Badge type={BadgeType.Pill} size={BadgeSize.Small} text={'50%'} ></Badge>
                              </View>
                        </View>
  )
}

export default PriceComponent

const styles = StyleSheet.create({
  price: {
    alignSelf: 'stretch',
    flexShrink: 0,
    paddingTop: 0,
    paddingBottom: 4,
    alignItems: 'flex-start',
    rowGap: 0,
    paddingHorizontal: 0
  },
  currentprice: {
    flexShrink: 0,
    textAlign: 'left',
    color: 'rgba(9, 17, 31, 1)',
    fontFamily: 'Satoshi Variable',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0,
    lineHeight: 16
  },
  initialpricewrapper: {
    flexShrink: 0,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 4
  },
  initialprice: {
    flexShrink: 0,
    textAlign: 'left',
    color: 'rgba(76, 89, 112, 1)',
    fontFamily: 'Satoshi Variable',
    fontSize: 12,
    fontWeight: '400',
    letterSpacing: 0,
    lineHeight: 16,
    textDecorationLine: 'line-through'
  }

})
