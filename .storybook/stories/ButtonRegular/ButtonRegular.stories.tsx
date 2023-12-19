// Button.stories.ts|tsx
import {View} from 'react-native';

import type {Meta} from '@storybook/react-native';
import ButtonRegular, {
    ButtonRegularColor,
    ButtonRegularSize,
    ButtonRegularType
} from '../../../Components/ButtonRegular';
import React from 'react';

const meta: Meta<typeof ButtonRegular> = {
    title: 'Button Regular',
    component: ButtonRegular,

    argTypes: {
        type: {
            options: [ButtonRegularType.Filled, ButtonRegularType.FilledCircle,
                ButtonRegularType.Outline,
                ButtonRegularType.OutlineCircle],
            control: {type: 'radio'},
        },
        size: {
            options: [ButtonRegularSize.Small, ButtonRegularSize.Medium,
                ButtonRegularSize.Large],
            control: {type: 'radio'},
        },
        color: {
            options: [ButtonRegularColor.Light, ButtonRegularColor.Dark],
            control: {type: 'radio'},
        }
    },

    decorators: [
        (Story) => (
            <View style={{backgroundColor: 'cyan', alignItems: 'center', justifyContent: 'center', flex: 1}}>

                <Story/>
            </View>
        ),
    ],
    args: {
        text: undefined,
        rightIcon: 'add',
        color: ButtonRegularColor.Light,
        type: ButtonRegularType.Filled

    }
};

export const ButtonRegular1 = {
    args: {
        text: "hello",
        rightIcon: 'add',
        color: ButtonRegularColor.Light,
        type: ButtonRegularType.Filled
    },
};
export const ButtonRegular2 = {
    args: {
        rightIcon: 'add',
        color: ButtonRegularColor.Light,
        type: ButtonRegularType.Filled
    },
};

export default meta;
