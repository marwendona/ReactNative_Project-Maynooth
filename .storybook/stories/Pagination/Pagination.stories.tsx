import { View } from 'react-native';
import Pagination, { PaginationSize,PaginationState } from "../../../Components/Pagination"
import type { Meta } from '@storybook/react-native';
import React from 'react';


const metaPagination: Meta<typeof Pagination> = {
  title: 'Pagination',
  component: Pagination,

  argTypes: {
    size: {
        options: [PaginationSize.Small, PaginationSize.Medium],
      control: { type: 'radio' },
    },
    state: {
      options: [PaginationState.Active, PaginationState.Hover, PaginationState.Default],
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
export default metaPagination

export const Small = {};
export const Medium = {};


export const Active = {};
export const Hover = {};
export const Default = {};
