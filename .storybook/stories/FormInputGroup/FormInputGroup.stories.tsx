import {View, Text} from 'react-native';
import {Story, type Meta} from '@storybook/react-native';
import FormInputGroup from "../../../components/FormInputGroup";
import React from "react";
import Icon from "../../../components/Icon";

const meta: Meta<typeof FormInputGroup> = {
    title: 'FormInputGroup',
    component: FormInputGroup,

    decorators: [
        (Story) => (
            <View style={{backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', flex: 1}}>
                <Text style={{fontWeight: 'bold', fontSize: 30, marginBottom: 16}}>Text Field</Text>
                <Story/>
            </View>
        ),
    ],
    args: {
        labelPrimary: 'a',
        labelRight: 'b',
        labelSecondary: 'c',
        value: 'd'
    },
};

export const InputGroup = {
    labelPrimary: 'a',
    labelRight: 'b',
    labelSecondary: 'c',
    value: 'd'
};

export default meta;
