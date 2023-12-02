import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Badge, BadgeSize, BadgeType } from './Badge'
import { themeGlobal } from '../styles/themeGlobal'

interface CardBodyProps {
  text: string
  title: string
}
const CardBody: React.FC<CardBodyProps> = ({ title, text }) => {
  return (
        <View style={styles.cardbody}>
            <Text style={themeGlobal.themeGlobalText.h6}>
                {title}
            </Text>
            <Badge size={BadgeSize.Small} text={text} type={BadgeType.Text}></Badge>
        </View>
  )
}

export default CardBody

const styles = StyleSheet.create({
  cardbody: {
    alignSelf: 'stretch',
    flexShrink: 0,
    alignItems: 'flex-start',
    rowGap: 0,
    paddingVertical: 4,
    paddingHorizontal: 8
  },
  title: {
    alignSelf: 'stretch',
    flexShrink: 0,
    height: 20,
    textAlign: 'left',
    color: 'rgba(9, 17, 31, 1)',
    fontFamily: 'Satoshi Variable',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0,
    lineHeight: 20
  },
  badge: {
    flexShrink: 0,
    flexDirection: 'row',
    alignItems: 'flex-start',
    columnGap: 0,
    borderRadius: 4
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
