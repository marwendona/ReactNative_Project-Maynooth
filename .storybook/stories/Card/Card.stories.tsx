// Button.stories.ts|tsx
import { View } from 'react-native';
import Card1 from '../../../Components/Card1'
import type { Meta } from '@storybook/react-native';


const meta: Meta<typeof Card1> = {
  title: 'Card',
  component: Card1,

  argTypes: {
    orientation: {
      options: ['Vertical', 'Horizontal'],
      control: { type: 'radio' },
    },
    type:{
      options: ['Product', 'Variation','Collection'],
      control: { type: 'radio' },
    },
    size:{
      options: [ 'Small','Medium'],
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
    orientation: 'Vertical',
    type: 'Product',
    subtitle: 'Card subtitle',
    initialPrice : '500.000',
    discount : '10%',
    newPrice : '450.000',
  }
};


export const ProductHorizontalSmall = {
  args: {
    initialPrice : '500.000',
    discount : '10%',
    newPrice : '450.000',
    subtitle: 'Card subtitle',
    title: 'Titre1',
    type: 'Product',
    orientation: 'Horizontal',
    size: 'Small'
  },
};

export const ProductHorizontalMedium = {
  args: {
    initialPrice : '500.000',
    discount : '10%',
    newPrice : '450.000',
    subtitle: 'Card subtitle',
    title: 'Titre2',
    type: 'Product',
    orientation: 'Horizontal',
    size: 'Medium'
  },
};

export const ProductVertical = {
  args: {
    initialPrice : '500.000',
    discount : '10%',
    newPrice : '450.000',
    subtitle: 'Card subtitle',
    title: 'Titre3',
    type: 'Product',
    orientation: 'Vertical'
  },
};

export const Collection = {
  args: {
    subtitle: '50',
    title: 'Titre',
    type: 'Collection',
  },
};

export const Variation = {
  args: {
    subtitle: 'Card subtitle',
    title: 'Titre',
    type: 'Variation',
  },
};

export default meta;
