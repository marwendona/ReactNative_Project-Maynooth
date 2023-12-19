import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export interface BaseInputLabelProps {
  labelRight?: string
  labelPrimary?: string
  color?: BaseInputLabelColor
}

export enum BaseInputLabelColor {
  Dark = 'Dark',
  Grey = 'Grey',
  Green = 'Green',
  Red = 'Red',
  White = 'White',
}

const BaseInputLabel: React.FC<BaseInputLabelProps> = ({ labelRight, labelPrimary, color }) => {
  return (
        <View style={styles.labeltype}>
            <View style={styles.left}>
                <Text style={styles.label}>
                    {labelPrimary}
                </Text>
            </View>
            <View style={styles.right}>
                <Text style={styles.labelright}>
                    {labelRight}
                </Text>
            </View>
        </View>
  )
}

export default BaseInputLabel

const styles = StyleSheet.create({
  labeltype: {
    alignSelf: 'stretch',
    flexShrink: 0,
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
  label: {
    flexShrink: 0,
    textAlign: 'left',
    color: 'rgba(76, 89, 112, 1)',
    fontFamily: 'Satoshi Variable',
    fontSize: 12,
    fontWeight: '700',
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
    color: 'rgba(76, 89, 112, 1)',
    fontFamily: 'Satoshi Variable',
    fontSize: 12,
    fontWeight: '400',
    letterSpacing: 0,
    lineHeight: 16
  }
})
