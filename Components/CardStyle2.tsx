import {ImageBackground, StyleSheet, Text, View} from "react-native";
import {Path, Svg} from "react-native-svg";
import RatingProduct from "./RatingProduct";

export interface CardStyle2Props {
    image: string;
    title: string;
    price: number;
    rating: number;
    promotion: number;
}

const Cardstyle2: React.FC<CardStyle2Props> = ({
                                                   image,
                                                   title,
                                                   promotion,
                                                   rating,
                                                   price
                                               }) => {
    return (
        <View style={styles.cardstyle2}>
            <ImageBackground style={styles.image}
                             source={{uri: image}}/>
            <View style={styles.frame26080031}>
                <Text style={styles.title}>
                    {title}
                </Text>
                <Text style={styles.initialprice}>
                    {price}
                </Text>
                <View style={styles.frame26080033}>
                    <View style={styles.ratingProduct}>
                        <RatingProduct text={rating.toString()} size={"Small"} ></RatingProduct>
                    </View>
                    <View style={styles.badge}>
                        <Text style={styles._label}>
                            {promotion}%
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Cardstyle2;

const styles = StyleSheet.create({
    cardstyle2: {
        flexShrink: 0,
        backgroundColor: "rgba(245, 245, 245, 1)",
        flexDirection: "row",
        alignItems: "center",
        columnGap: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: "rgba(229, 220, 220, 1)"
    },
    image: {
        flexShrink: 0,
        width: 60,
        height: 60,
        borderRadius: 5
    },
    frame26080031: {
        flexShrink: 0,
        alignItems: "flex-start",
        rowGap: 4
    },
    title: {
        flexShrink: 0,
        width: 262,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Roboto",
        fontSize: 13,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 20
    },
    initialprice: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Roboto",
        fontSize: 12,
        fontWeight: "400",
        letterSpacing: 0,
        lineHeight: 16
    },
    frame26080033: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        columnGap: 10
    },
    ratingProduct: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        columnGap: 2
    },
    iconsFilledStar: {
        flexShrink: 0,
        height: 16,
        width: 16,
        alignItems: "flex-start",
        rowGap: 0
    },
    boundingbox: {
        position: "absolute",
        flexShrink: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: "rgba(217, 217, 217, 1)"
    },
    vector: {
        position: "absolute",
        flexShrink: 0,
        top: 2,
        right: 2,
        bottom: 2,
        left: 2,
        overflow: "visible"
    },
    label: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(76, 89, 112, 1)",
        fontFamily: "Roboto",
        fontSize: 12,
        fontWeight: "400",
        letterSpacing: 0,
        lineHeight: 16
    },
    badge: {
        flexShrink: 0,
        backgroundColor: "rgba(215, 246, 228, 1)",
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 0,
        paddingVertical: 0,
        paddingHorizontal: 4,
        borderRadius: 4
    },
    _label: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(8, 199, 84, 1)",
        fontFamily: "Roboto",
        fontSize: 12,
        fontWeight: "400",
        letterSpacing: 0,
        lineHeight: 16
    }
})
