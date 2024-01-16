import {Meta} from "@storybook/react-native";
import CardStyle2 from "../../../Components/CardStyle2";
import {View} from "react-native";

const cardStyle2Meta = {
    title: 'CardStyle2',
    component: CardStyle2,

    args: {
        image: 'https://dummyimage.com/144x144/000/fff.jpg',
        price: 2100,
        title: "Product 1",
        rating: 4.7,
        promotion: 50
    },

    decorators: [
        (Story) => (
            <View style={{ backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', flex: 1 }}>

                <Story />
            </View>
        ),
    ]
};

export default cardStyle2Meta;

export const Promotion = {
    args: {
        image: 'https://dummyimage.com/144x144/000/fff.jpg',
        price: 2100,
        title: "Product 1",
        rating: 4.7,
        promotion: 50
    }
}
