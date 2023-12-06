import { View } from 'react-native';
import type { Meta } from '@storybook/react-native';
import React from 'react';
import Steps, {StepType} from "../../../Components/Step";


const metaSteps: Meta<typeof Steps> = {
  title: 'Steps',
  component: Steps,

  argTypes: {
    type: {
        options: [StepType.Step1, StepType.Step2,StepType.Step3,StepType.Step4],
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
export default metaSteps

export const Step1 = {};
export const Step2 = {};
export const Step3 = {};
export const Step4 = {};
