import * as React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Icon from './Icon'
import { Link } from 'expo-router'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useEffect, useState } from 'react'
import theme from './theme'
import { ButtonRegularColor } from './ButtonRegular'

interface ButtonLinkProps {
  icon?: string
  text: string
  color: 'Light' | 'Dark'
  size: 'Small' | 'Medium' | 'Large'
  state?: 'Default' | 'Disabled'
  link?: string
}

const Buttonlink: React.FC<ButtonLinkProps> = ({
  icon,
  text,
  color,
  size,
  state,
  link = ''
}) => {
  let fontSize
  switch (size) {
    case 'Small':
      fontSize = 12
      break
    case 'Medium':
      fontSize = 14
      break
    case 'Large':
      fontSize = 16
      break
  }
  const [textColor, setTextColor] = useState('#09111f')
  const onPressIn = () => {
    const oldTextColor = textColor
    switch (color) {
      case ButtonRegularColor.Light:
        setTextColor(theme.colors.gray80)
        break
      case ButtonRegularColor.Dark:
        setTextColor(theme.colors.white)
        break
    }
    setTimeout(() => {
      setTextColor(oldTextColor)
    }, 700)
  }
  useEffect(() => {
    if (state === 'Disabled') {
      switch (color) {
        case 'Light':
          setTextColor(theme.colors.gray10)
          break
        case 'Dark':
          setTextColor(theme.colors.gray90)
          break
      }
    }
    if (state === 'Default') {
      switch (color) {
        case 'Light':
          setTextColor(theme.colors.white)
          break
        case 'Dark':
          setTextColor(theme.colors.gray100)
          break
      }
    }
  }, [state])
  return (
        <TouchableOpacity style={[styles.buttonBtnlink]} onPressIn={onPressIn} >
            <View style={[styles.textwrapper]}>
                <Text style={[styles.text, { color: textColor, fontSize: fontSize }] }>
                    <Link href={link}>{text}</Link>
                </Text>
            </View>
            {icon && <Icon iconName={icon} size='Small' color={textColor}/>}
        </TouchableOpacity>
  )
}

export default Buttonlink
const styles = StyleSheet.create({
  buttonBtnlink: {
    flexShrink: 0,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 0,
    paddingVertical: 1,
    paddingHorizontal: 0
  },
  textwrapper: {
    flexShrink: 0,
    paddingTop: 0,
    paddingBottom: 2,
    flexDirection: 'row',
    alignItems: 'flex-start',
    columnGap: 0,
    paddingHorizontal: 0
  },
  text: {
    flexShrink: 0,
    textAlign: 'left',
    fontFamily: 'Satoshi Variable',
    fontWeight: '700',
    letterSpacing: 0,
    lineHeight: 16
  }
})
