import { View } from 'react-native';
import LogoMark, { LogoSize } from '../../../Components/Logomark'
import type { Meta } from '@storybook/react-native';
import React from 'react';


const metaLogoMark: Meta<typeof LogoMark> = { 
  title: 'LogoMark',
  component: LogoMark,

  argTypes: {
    size: {
        options: [LogoSize.Small, LogoSize.Medium],
      control: { type: 'radio' },
    } 
  },

  decorators: [
    (Story) => (
      <View style={{ backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', flex: 1 }}>

        <Story />
      </View>
    ),
  ]
};
export default metaLogoMark

export const Small = {};
export const Medium = {};


