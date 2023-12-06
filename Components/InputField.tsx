import { StyleSheet, View, Text } from 'react-native'
import Icon from './Icon'
import React from 'react'
import theme from "./theme";
import {TextInput} from "react-native-gesture-handler";
export interface BaseInputFieldProps {
  size: BaseInputFieldSize
  state: BaseInputFieldState
  text?: string
  iconLeft?: string
  iconRight?: string
}

export enum BaseInputFieldSize {
  Small = 'Small',
  Medium = 'Medium',
  Large = 'Large',
}

export enum BaseInputFieldState {
  Default = 'Default',
  FocusEmpty = 'Focus_Empty',
  FocusFilled = 'Focus_Filled',
  Filled = 'Filled',
  DisabledEmpty = 'Disabled_Empty',
  DisabledFilled = 'Disabled_Filled',
  ErrorEmpty = 'Error_Empty',
  ErrorFilled = 'Error_Filled',
  SuccessFilled = 'Success_Filled',
}

const BaseInputField: React.FC<BaseInputFieldProps> = ({ size, state, text, iconLeft, iconRight }) => {
  let SizeStyles
  switch (size) {
    case BaseInputFieldSize.Small:
      SizeStyles = stylesSmall
      break
    case BaseInputFieldSize.Medium:
      SizeStyles = stylesMedium
      break
    case BaseInputFieldSize.Large:
      SizeStyles = stylesLarge
      break
    default:
      SizeStyles = stylesMedium
      break
  }
  let StateStyles
  switch (state) {
    case BaseInputFieldState.Default:
      StateStyles = stylesDefault
      break
    case BaseInputFieldState.FocusEmpty:
      StateStyles = stylesFocusEmpty
      break
    case BaseInputFieldState.FocusFilled:
      StateStyles = stylesFocusFilled
      break
    case BaseInputFieldState.Filled:
      StateStyles = stylesFilled
      break
    case BaseInputFieldState.DisabledEmpty:
      StateStyles = stylesDisabledEmpty
      break
    case BaseInputFieldState.DisabledFilled:
      StateStyles = stylesDisabledFilled
      break
    case BaseInputFieldState.ErrorEmpty:
      StateStyles = stylesErrorEmpty
      break
    case BaseInputFieldState.ErrorFilled:
      StateStyles = stylesErrorFilled
      break
    case BaseInputFieldState.SuccessFilled:
      StateStyles = stylesSuccessFilled
      break
    default:
      StateStyles = stylesDefault
      break
  }

  return (

        <View style={{ ...SizeStyles.baseInputfield, ...StateStyles.baseInputfield }} >
            {iconLeft && <Icon iconName={iconLeft} size={size} color={theme.colors.gray50} />}
            <View style={{ ...SizeStyles.textwrapper, ...StateStyles.textwrapper }}>
                <TextInput style={{ ...SizeStyles.inputvalue, ...StateStyles.inputvalue }}>
                    {text}
                </TextInput>
            </View>
            {iconRight && <Icon iconName={iconRight} size={size} color={theme.colors.gray100} />}
        </View>
  )
}
export default BaseInputField

const stylesSmall = StyleSheet.create({
  baseInputfield: {
    flexShrink: 0,
    width: 312,
    backgroundColor: 'rgba(255, 255, 255, 1)', // color of the field
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 2, // position of the text
    padding: 6,
    borderWidth: 1, // border
    borderColor: 'rgba(225, 229, 235, 1)',
    borderRadius: 8 // redius
  },

  textwrapper: {
    flexGrow: 1,
    paddingVertical: 0,
    paddingHorizontal: 2

  },

  inputvalue: {
    flexBasis: 0,
    color: 'rgba(145, 155, 173, 1)', // color of the text
    fontFamily: 'Satoshi Variable', // font
    fontSize: 12, // size text
    fontWeight: '400', // Gras
    letterSpacing: 0, // par defaut =0
    lineHeight: 16

  }

})
const stylesMedium = StyleSheet.create({
  baseInputfield: {
    flexShrink: 0,
    width: 312,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 4,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'rgba(225, 229, 235, 1)',
    borderRadius: 12
  },

  textwrapper: {
    alignSelf: 'stretch',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    flexDirection: 'row',
    alignItems: 'flex-start',
    columnGap: 0,
    paddingVertical: 0,
    paddingHorizontal: 2
  },
  inputvalue: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    textAlign: 'left',
    color: 'rgba(145, 155, 173, 1)',
    fontFamily: 'Satoshi Variable',
    fontSize: 14,
    fontWeight: '400',
    letterSpacing: 0,
    lineHeight: 20
  }

})
const stylesLarge = StyleSheet.create({
  baseInputfield: {
    flexShrink: 0,
    width: 312,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 4,
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: 'rgba(225, 229, 235, 1)',
    borderRadius: 12
  },

  textwrapper: {
    alignSelf: 'stretch',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    flexDirection: 'row',
    alignItems: 'flex-start',
    columnGap: 0,
    paddingVertical: 0,
    paddingHorizontal: 2
  },
  inputvalue: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    textAlign: 'left',
    color: 'rgba(145, 155, 173, 1)',
    fontFamily: 'Satoshi Variable',
    fontSize: 16,
    fontWeight: '400',
    letterSpacing: 0,
    lineHeight: 24
  }

})

const stylesDefault = StyleSheet.create({
  baseInputfield: {

  },

  textwrapper: {

  },
  inputvalue: {

  }

})

const stylesFocusEmpty = StyleSheet.create({
  baseInputfield: {
    borderColor: 'black'
  },

  textwrapper: {

  },
  inputvalue: {

  }

})

const stylesFocusFilled = StyleSheet.create({
  baseInputfield: {
    borderColor: 'black'
  },

  textwrapper: {

  },
  inputvalue: {
    color: 'black' // color of the text
  }
})

const stylesFilled = StyleSheet.create({
  baseInputfield: {
  },

  textwrapper: {

  },
  inputvalue: {
    color: 'black' // color of the text
  }

})

const stylesDisabledEmpty = StyleSheet.create({
  baseInputfield: {
    backgroundColor: 'rgba(240, 242, 245, 1)' // color of the field
  },

  textwrapper: {
  },
  inputvalue: {
  }
})

const stylesDisabledFilled = StyleSheet.create({
  baseInputfield: {
    backgroundColor: 'rgba(240, 242, 245, 1)' // color of the field

  },

  textwrapper: {

  },
  inputvalue: {
    color: 'black' // color of the text

  }

})

const stylesErrorEmpty = StyleSheet.create({
  baseInputfield: {
    borderColor: 'red'
  },

  textwrapper: {
  },
  inputvalue: {
  }

})

const stylesErrorFilled = StyleSheet.create({
  baseInputfield: {
    borderColor: 'red'
  },

  textwrapper: {
  },
  inputvalue: {
    color: 'black' // color of the text
  }

})

const stylesSuccessFilled = StyleSheet.create({
  baseInputfield: {
    borderColor: 'green'
  },

  textwrapper: {
  },
  inputvalue: {
    color: 'black' // color of the text
  }
})
