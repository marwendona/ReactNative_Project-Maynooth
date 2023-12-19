import {View, Text} from 'react-native';
import {Story, type Meta} from '@storybook/react-native';
import FormCheckbox, {FormCheckboxProps} from "../../../components/FormCheckbox";

const meta: Meta<typeof FormCheckbox> = {
    title: 'FormCheckbox',
    component: FormCheckbox,

    argTypes: {
        size: {
            options: ['Small', 'Medium'],
            control: { type: 'radio' },
        },
        state: {
            options: ['Uncheck', 'Check'],
            control: { type: 'radio' },
        },
    },

    decorators: [
        (Story, context) => {
            const { size, state } = context.args;
            return (
                <View style={{ backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 30, marginBottom: 16 }}>Checkbox</Text>
                    <Story {...context} />
                </View>
            );
        },
    ],
    args: {
        label: 'Label',
        size: 'Small',
        state: 'Uncheck',
    },
};

export const FormCheckboxStory = (args: FormCheckboxProps) => <FormCheckbox {...args} />;
FormCheckboxStory.args = { label: 'Label' };

export const FormCheckboxSmallUncheck = {
    ...FormCheckboxStory,
    args: {
        ...FormCheckboxStory.args,
        size: 'Small',
        state: 'Uncheck',
    },
};

export const FormCheckboxMediumUncheck = {
    ...FormCheckboxStory,
    args: {
        ...FormCheckboxStory.args,
        size: 'Medium',
        state: 'Uncheck',
    },
};

export const FormCheckboxSmallCheck = {
    ...FormCheckboxStory,
    args: {
        ...FormCheckboxStory.args,
        size: 'Small',
        state: 'Check',
    },
};

export const FormCheckboxMediumCheck = {
    ...FormCheckboxStory,
    args: {
        ...FormCheckboxStory.args,
        size: 'Medium',
        state: 'Check',
    },
};

export default meta;
