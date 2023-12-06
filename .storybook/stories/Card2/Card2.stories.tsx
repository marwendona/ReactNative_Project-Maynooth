import { View } from 'react-native';
import Card2, { CardOrientation } from '../../../Components/Card2'
import type { Meta } from '@storybook/react-native';
import React from 'react';


const metaCard2: Meta<typeof Card2> = {
  title: 'Card2',
  component: Card2,

  argTypes: {
    orientation: {
      options: [CardOrientation.Vertical, CardOrientation.Horizontal],
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
    title: 'Hello world test 2',
    subtitle: 'Vertical',
  }
};
export default metaCard2

export const cardex = {
  args: { 
      subtitle: 'Card subtitle',
      title: 'Titre1',
      orientation: CardOrientation.Horizontal,
  },
};

export const cardVertical = {
  args: {
      subtitle: 'Card subtitle',
      title: 'Titre2',
      orientation: CardOrientation.Vertical,
  },
};
