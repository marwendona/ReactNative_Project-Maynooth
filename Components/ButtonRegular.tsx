import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import theme from './theme'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from './Icon'

export interface ButtonRegularProps {
  iconLeft?: string
  text?: string
  iconRight?: string
  color?: ButtonRegularColor
  type?: ButtonRegularType
  size?: ButtonRegularSize
  state?: ButtonRegularState
}

export enum ButtonRegularType {
  Filled = 'Filled',
  FilledCircle = 'Filled Circle',
  Outline = 'Outline',
  OutlineCircle = 'Outline Circle',
}

export enum ButtonRegularColor {
  Light = 'Light',
  Dark = 'Dark',
}

export enum ButtonRegularSize {
  Small = 'Small',
  Medium = 'Medium',
  Large = 'Large',
}

export enum ButtonRegularState {
  Default = 'Default',
  Hover = 'Hover',
  Active = 'Active',
  Disabled = 'Disabled',
}

const ButtonRegular: React.FC<ButtonRegularProps> = ({
  text,
  iconRight,
  iconLeft,
  color,
  type,
  size,
  state = ButtonRegularState.Default
}) => {
  let paddingButton
  let radius
  const [backGroundColor, setBackGroundColor] = useState('#f0f2f5')
  const [borderColour, setBorderColour] = useState('#f0f2f5')
  const [textColor, setTextColor] = useState('#09111f')

  const onPressIn = () => {
    const oldBackGroundColor = backGroundColor
    const oldBorderColour = borderColour
    const oldTextColor = textColor
    switch (color) {
      case ButtonRegularColor.Light:
        setBackGroundColor(theme.colors.gray20)
        setBorderColour('rgba(0, 0, 0, 0)')
        setTextColor(theme.colors.gray80)
        break
      case ButtonRegularColor.Dark:
        setBackGroundColor(theme.colors.gray80)
        setBorderColour('rgba(0, 0, 0, 0)')
        setTextColor(theme.colors.white)
        break
    }
    setTimeout(() => {
      setBackGroundColor(oldBackGroundColor)
      setBorderColour(oldBorderColour)
      setTextColor(oldTextColor)
    }, 700)
  }
  const onHover = () => {
    console.log('hover')
  }
  useEffect(() => {
    if (state === ButtonRegularState.Disabled) {
      if (type === ButtonRegularType.Filled || type === ButtonRegularType.FilledCircle) {
        switch (color) {
          case ButtonRegularColor.Light:
            setBackGroundColor(theme.colors.white)
            setBorderColour('rgba(0, 0, 0, 0)')
            setTextColor(theme.colors.gray50)
            break
          case ButtonRegularColor.Dark :
            setBackGroundColor(theme.colors.gray50)
            setBorderColour('rgba(0, 0, 0, 0)')
            setTextColor(theme.colors.white)
            break
        }
      } else if (type === ButtonRegularType.Outline || type === ButtonRegularType.OutlineCircle) {
        switch (color) {
          case ButtonRegularColor.Light:
            setBackGroundColor(theme.colors.white)
            setBorderColour('rgba(0, 0, 0, 0)')
            setTextColor(theme.colors.white)
            break
          case ButtonRegularColor.Dark :
            setBackGroundColor(theme.colors.gray50)
            setBorderColour('rgba(0, 0, 0, 0)')
            setTextColor(theme.colors.gray50)
            break
        }
      }
    }
    if (state === ButtonRegularState.Default) {
      if (type === ButtonRegularType.Filled || type === ButtonRegularType.FilledCircle) {
        switch (color) {
          case ButtonRegularColor.Light:
            setBackGroundColor(theme.colors.white)
            setBorderColour('rgba(0, 0, 0, 0)')
            setTextColor(theme.colors.gray100)
            break
          case ButtonRegularColor.Dark :
            setBackGroundColor(theme.colors.gray100)
            setBorderColour('rgba(0, 0, 0, 0)')
            setTextColor(theme.colors.white)
            break
        }
      } else if (type === ButtonRegularType.Outline || type === ButtonRegularType.OutlineCircle) {
        switch (color) {
          case ButtonRegularColor.Light:
            setBackGroundColor(theme.colors.white)
            setBorderColour('rgba(0, 0, 0, 0)')
            setTextColor(theme.colors.white)
            break
          case ButtonRegularColor.Dark :
            setBackGroundColor(theme.colors.gray100)
            setBorderColour('rgba(0, 0, 0, 0)')
            setTextColor(theme.colors.gray100)
            break
        }
      }
    }
  }, [state])
  switch (size) {
    case ButtonRegularSize.Small:
      paddingButton = 6
      break
    case ButtonRegularSize.Medium:
      paddingButton = 10
      break
    case ButtonRegularSize.Large:
      paddingButton = 14
      break
  }
  switch (type) {
    case ButtonRegularType.Filled:
      radius = 12
      break
    case ButtonRegularType.FilledCircle:
      radius = 9999
      break
    case ButtonRegularType.Outline:
      radius = 12
      break
    case ButtonRegularType.OutlineCircle:
      radius = 9999
      break
    default:
      radius = 12
  }
  return (
        <TouchableOpacity
                          onPressIn={onPressIn}
                          onFocus={onHover}
                          onBlur={onHover}
                          disabled={state === ButtonRegularState.Disabled}
                          style={[styles.root, {
                            backgroundColor: backGroundColor,
                            borderRadius: radius,
                            borderColor: borderColour,
                            padding: paddingButton,
                            width: 'fit-content',
                            hight: 'fit-content'
                          }]}>
            {iconLeft !== undefined &&
                <Icon iconName={iconLeft} size={size.toString()} color={textColor}/>
            }
            {text !== undefined &&
                <View style={styles.textWrapper}>
                    <Text style={[styles.text, { color: textColor }]}>
                        {text}
                    </Text>
                </View>
            }
            {iconRight !== undefined &&
                <Icon iconName={iconRight} size={size.toString()} color={textColor}/>
            }
        </TouchableOpacity>
  )
}
export default ButtonRegular

const styles = StyleSheet.create({
  root: {
    zIndex: 3,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 6,
    borderWidth: 1
  },
  text: {
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
