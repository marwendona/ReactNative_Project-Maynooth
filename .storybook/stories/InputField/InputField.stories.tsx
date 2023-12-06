import { View } from 'react-native';
import InputField, { BaseInputFieldSize,BaseInputFieldState } from '../../../Components/InputField'
import type { Meta } from '@storybook/react-native';
import React from 'react';


const metaInputField: Meta<typeof InputField> = {
  title: 'InputField',
  component: InputField,

  argTypes: {
    size: { 
        options: [BaseInputFieldSize.Small, BaseInputFieldSize.Medium,BaseInputFieldSize.Large],
      control: { type: 'radio' },
    },
    state: {
        options: [BaseInputFieldState.Default,BaseInputFieldState.DisabledEmpty,BaseInputFieldState.DisabledFilled,
            BaseInputFieldState.ErrorEmpty,BaseInputFieldState.ErrorFilled,BaseInputFieldState.Filled,BaseInputFieldState.FocusEmpty,
            BaseInputFieldState.FocusFilled,BaseInputFieldState.SuccessFilled  ],
        control: { type: 'radio' },
      }
  },

  decorators: [
    (Story) => (
      <View style={{ backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', flex: 1 }}>

        <Story />
      </View>
    ),
  ],
  args: {
    text: '',
  }
};
export default metaInputField

export const Small = {};
export const Medium = {};
export const Large = {};

export const Default = {};
export const DisabledEmpty = {};
export const DisabledFilled = {};
export const ErrorEmpty = {};
export const ErrorFilled = {};
export const Filled = {};
export const FocusEmpty = {};
export const FocusFilled = {};
export const SuccessFilled = {};