import {View, Text} from 'react-native';
import {Story, type Meta} from '@storybook/react-native';
import List, {ListProps} from "../../../Components/List";

const meta: Meta<typeof List> = {
    title: 'ListListItem',
    component: List,

    decorators: [
        (Story) => (
            <View style={{ backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 30, marginBottom: 16 }}>List</Text>
                <Story />
            </View>
        ),
    ],
    argTypes: {
        state: {
            options: ['Default', 'Hover', 'Active'],
            control: { type: 'radio' },
        },
    },
    args: {
        title: 'Title',
        subtitle: 'Subtitle',
        state: 'Default', // Specify the default state
    },
};

export const ListItem = (args: ListProps) => <List {...args} />;
ListItem.args = {
    title: 'Title',
    subtitle: 'Subtitle',
    state: 'Default', // Specify the state for this story
};

export const HoveredListItem = ListItem.bind({});
HoveredListItem.args = {
    title: 'Title',
    subtitle: 'Subtitle',
    state: 'Hover', // Specify the state for this story
};

export const ActiveListItem = ListItem.bind({});
ActiveListItem.args = {
    title: 'Title',
    subtitle: 'Subtitle',
    state: 'Active', // Specify the state for this story
};

export default meta;
