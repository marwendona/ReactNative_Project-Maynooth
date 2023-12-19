import {View, Text} from 'react-native';
import Notification from '../../../components/Notification'
import {Story, type Meta} from '@storybook/react-native';
import Icon from "../../../components/Icon";

const meta: Meta<typeof Notification> = {
    title: 'Notification',
    component: Notification,

    decorators: [
        (Story) => (
            <View style={{backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', flex: 1}}>
                <Text style={{fontWeight: 'bold', fontSize: 30, marginBottom: 16}}>Notification</Text>
                <Story/>
            </View>
        ),
    ],
    args: {
        icon: <Icon iconName={"info"} />,
        label: 'Type',
        date: '01-12-2023 17:00',
        title: 'Title',
        subtitle: 'Subtitle'
    },
};

export const Notif = {
    icon: <Icon iconName={"info"} />,
    label: 'Type',
    date: '01-12-2023 17:00',
    title: 'Title',
    subtitle: 'Subtitle'
};

export default meta;
