import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import theme from './theme'
export interface BtnRegularProps {
  iconLeft: JSX.Element
  text?: string
  iconRight?: JSX.Element
}

export enum BtnRegularType {
  Filled = 'Filled',
  FilledCircle = 'Filled_Circle',
  Outline = 'Outline',
  OutlineCircle = 'Outline_Circle',
}

export enum BtnRegularColor {
  Light = 'Light',
  Dark = 'Dark',
}

export enum BtnRegularSize {
  Small = 'Small',
  Medium = 'Medium',
  Large = 'Large',
}

export enum BtnRegularState {
  Default = 'Default',
  Hover = 'Hover',
  Active = 'Active',
  Disabled = 'Disabled',
}
const BtnRegular: React.FC<BtnRegularProps> = ({ text, iconRight, iconLeft }) => {
  return (
    <View style={styles.root}>
      {iconLeft !== undefined &&
        iconLeft
      }
      {text !== undefined &&
        <View style={styles.textWrapper}>
          <Text style={styles.text}>
            {text}
          </Text>
        </View>
      }
      {iconRight !== undefined &&
        iconRight
      }
    </View>
  )
}
export default BtnRegular

const styles = StyleSheet.create({
  root: {
    zIndex: 3,
    position: 'absolute',
    top: 3,
    right: 3,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    flexDirection: 'row',
    padding: 6,
    borderRadius: 9999
  },
  text: {
    color: theme.colors.gray100,
    fontFamily: 'Satoshi Variable',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 16
  },
  textWrapper: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    paddingVertical: 0,
    paddingHorizontal: 4
  }
}
)
const backgrounds = {
  
  dark:
    {
      root: {
        backgroundColor: theme.colors.gray100
      },
      text: {
        flexShrink: 0,
        textAlign: 'left',
        color: 'rgba(255, 255, 255, 1)'
      }
    }
}
