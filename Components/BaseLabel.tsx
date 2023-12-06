import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from './Icon'
import theme from './theme'
export interface BaseInputLabelProps {
  labelPrimary: string
  labelRight?: string
  labelSecondary?: string
  iconLeft?: string
  iconRight?: string
  color: BaseInputLabelColor
}

export enum BaseInputLabelColor {
  Dark = 'Dark',
  Grey = 'Grey',
  Green = 'Green',
  Red = 'Red',
  White = 'White',
}
const BaseLabel: React.FC<BaseInputLabelProps> = ({ labelPrimary, labelRight, labelSecondary, iconLeft, iconRight, color }) => {
  const iconColor = {
    Dark: theme.colors.gray100,
    Grey: theme.colors.gray70,
    Green: theme.colors.green100,
    Red: theme.colors.red100,
    White: theme.colors.white
  }
  return (
    <View style={styles.baseInputlabel}>
      <View style={styles.left}>
        {iconLeft&&<Icon iconName={iconLeft} size='Small' color={iconColor[color]}/>}
        <Text style={[styles.label, { color: iconColor[color] }]}>
          {labelPrimary}
        </Text>
        <Text style={styles.labelsecondary}>
          {labelSecondary}
        </Text>
      </View>
      {labelRight&&
      <View style={styles.right}>
        <Text style={[styles.labelright, { color: iconColor[color] }]}>
          {labelRight}
        </Text>
        {iconRight !== undefined &&
         <Icon iconName={iconRight} size='Small' color={iconColor[color]} />}
      </View>}
    </View>
  )
}

export default BaseLabel

const styles = StyleSheet.create({
  baseInputlabel: {
    flexShrink: 0,
    width: 312,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    columnGap: 12
  },
  left: {
    flexShrink: 0,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 4
  },
  boundingbox: {
    position: 'absolute',
    flexShrink: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(217, 217, 217, 1)'
  },
  label: {
    flexShrink: 0,
    textAlign: 'left',
    fontFamily: 'Satoshi Variable',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0,
    lineHeight: 16
  },
  labelsecondary: {
    flexShrink: 0,
    textAlign: 'left',
    fontFamily: 'Satoshi Variable',
    fontSize: 12,
    fontWeight: '400',
    letterSpacing: 0,
    lineHeight: 16
  },
  right: {
    flexShrink: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    columnGap: 4
  },
  labelright: {
    flexShrink: 0,
    textAlign: 'left',
    fontFamily: 'Satoshi Variable',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0,
    lineHeight: 16
  },
  iconright: {
    flexShrink: 0,
    height: 16,
    width: 16,
    alignItems: 'flex-start',
    rowGap: 0
  }
})
