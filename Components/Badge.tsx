import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import theme from './theme'
export interface BadgeProps {
  text: string
  type: BadgeType
  size: BadgeSize
}

export enum BadgeType {
  Dot = 'Dot',
  Pill = 'Pill',
  Text = 'Text',
}

export enum BadgeSize {
  Small = 'Small',
  Medium = 'Medium',
}

export const Badge: React.FC<BadgeProps> = ({ text, type, size }) => {
  let styles
  if (type === BadgeType.Dot) {
    styles = size === BadgeSize.Small ? stylesSmallDot : stylesMediumDot
    return (
      <View style={styles.root}>
        </View>
    )
  } else if (type === BadgeType.Pill) {
    styles = size === BadgeSize.Small ? stylesSmallPill : stylesMediumPill
  } else { styles = size === BadgeSize.Small ? stylesSmallText : stylesMediumText }

  return (
      <View style={styles.root}>
          {type !== BadgeType.Dot && <Text style={styles.label}>
            {text}
          </Text>}
        </View>
  )
}

const stylesMediumDot = StyleSheet.create({
  root: {
    width: 12,
    height: 12,
    flexShrink: 0
  }
})
const stylesSmallDot = StyleSheet.create({
  root: {
    width: 6,
    height: 6,
    flexShrink: 0
  }
})
const stylesMediumPill = StyleSheet.create({
  root: {
    flexDirection: 'row',
    paddingTop: 0,
    paddingLeft: 6,
    paddingRight: 6,
    paddingBottom: 0,
    alignItems: 'flex-start',
    borderRadius: 4,
    backgroundColor: theme.colors.green20
  },
  label: {
    color: theme.colors.green100,
    fontFamily: 'Satoshi Variable',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 20
  }
})
const stylesSmallPill = StyleSheet.create({
  root: {
    flexDirection: 'row',
    paddingTop: 0,
    paddingLeft: 4,
    paddingRight: 4,
    paddingBottom: 0,
    alignItems: 'flex-start',
    borderRadius: 4,
    backgroundColor: theme.colors.green20
  },
  label: {
    color: theme.colors.green100,
    fontFamily: 'Satoshi Variable',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 16
  }
})
const stylesSmallText = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderRadius: 4
  },
  label: {
    color: theme.colors.gray70,
    fontFamily: 'Satoshi Variable',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 16
  }
})
const stylesMediumText = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderRadius: 4
  },
  label: {
    color: theme.colors.gray70,
    fontFamily: 'Satoshi Variable',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 20
  }
})
