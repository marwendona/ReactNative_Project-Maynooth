import {View, Text} from 'react-native';
import {Story, type Meta} from '@storybook/react-native';
import Backdrop from "../../../components/Backdrop";

const meta: Meta<typeof Backdrop> = {
    title: 'Backdrop',
    component: Backdrop,

    decorators: [
        (Story) => (
            <View style={{backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', flex: 1}}>
                <Text style={{fontWeight: 'bold', fontSize: 30, marginBottom: 16}}>Backdrop</Text>
                <Story/>
            </View>
        ),
    ],
    args: {
    },
};

export const backdrop = {
};

export default meta;
