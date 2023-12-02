import {View, Text} from 'react-native';
import {Story, type Meta} from '@storybook/react-native';
import FormInputFile from "../../../components/FormInputFile";
import IconsOutlineAddPhotoAlternate from "../../../components/IconsOutlineAddPhotoAlternate";

const meta: Meta<typeof FormInputFile> = {
    title: 'FormInputFile',
    component: FormInputFile,

    decorators: [
        (Story) => (
            <View style={{backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', flex: 1}}>
                <Text style={{fontWeight: 'bold', fontSize: 30, marginBottom: 16}}>Input File</Text>
                <Story/>
            </View>
        ),
    ],
    args: {
        label: 'Label',
        icon: <IconsOutlineAddPhotoAlternate/>,
    },
};

export const InputFile = {
    label: 'Label',
    icon: <IconsOutlineAddPhotoAlternate/>,
};

export default meta;
