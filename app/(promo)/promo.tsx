import {StyleSheet, Text, View} from "react-native";
import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {service} from "../../service";
import CardStyle2 from "../../Components/CardStyle2";

const Promo = () => {
    const [element, setElement] = useState<any[]>([]);
    const dispatch = useDispatch();
    const [products, setProducts] = useState<any[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            const { data } = await service.products.productsList();
            const products = data.paginatedResult.map((item) => {
                const parsedValue =
                    item.response && item.response.value
                        ? JSON.parse(item.response.value)
                        : null;

                return {
                    ...item,
                    response: {
                        ...item.response,
                        value: parsedValue,
                    },
                };
            });
            setProducts(products);
        };

        fetchData();

    }, []);


    return (
        <View style={styles.promos}>
            <View style={styles.recommendedforyou}>
                <View style={styles.title}>
                    <Text style={styles._recommendedforyou}>
                        {`Recommended for you`}
                    </Text>
                </View>
                {products.map((element) => (
                    <CardStyle2 key={element.id} image={element.image} title={element.title}  price={element.price} rating={4.7}  promotion={element.promotion} />
                ))}

            </View>

        </View>


    );
};

export default Promo;

const styles = StyleSheet.create({
    promos: {
        flexShrink: 0,
        paddingTop: 0,
        paddingBottom: 88,
        backgroundColor: "rgba(255, 255, 255, 1)",
        alignItems: "flex-start",
        rowGap: 0,
        paddingHorizontal: 0
    },
    navtop: {
        alignSelf: "stretch",
        flexShrink: 0,
        paddingLeft: 24,
        paddingRight: 14,
        backgroundColor: "rgba(255, 255, 255, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        columnGap: 0,
        paddingVertical: 12
    },
    iconsOutlineArrow_back: {
        flexShrink: 0,
        height: 24,
        width: 24,
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
        top: 4,
        right: 4,
        bottom: 4,
        left: 4,
        overflow: "visible"
    },
    frame26080030: {
        flexShrink: 0,
        width: 123,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        columnGap: 10
    },
    notification: {
        flexShrink: 0,
        paddingLeft: 10,
        paddingRight: 14,
        backgroundColor: "rgba(240, 242, 245, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 4,
        paddingVertical: 10,
        borderRadius: 9999
    },
    iconfilled: {
        flexShrink: 0,
        height: 20,
        width: 20,
        alignItems: "flex-start",
        rowGap: 0
    },
    vectorStroke: {
        position: "absolute",
        flexShrink: 0,
        top: 3,
        right: 2,
        bottom: 2,
        left: 3,
        overflow: "visible"
    },
    label: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Roboto",
        fontSize: 14,
        fontWeight: "400",
        letterSpacing: 0,
        lineHeight: 20
    },
    itemright: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 4,
        padding: 10,
        borderRadius: 9999
    },
    iconsOutlineNotifications: {
        flexShrink: 0,
        height: 20,
        width: 20,
        alignItems: "flex-start",
        rowGap: 0
    },
    _boundingbox: {
        position: "absolute",
        flexShrink: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: "rgba(217, 217, 217, 1)"
    },
    _vector: {
        position: "absolute",
        flexShrink: 0,
        top: 2,
        right: 3,
        bottom: 2,
        left: 3,
        overflow: "visible"
    },
    badge: {
        position: "absolute",
        flexShrink: 0,
        top: 7,
        height: 6,
        left: 27,
        width: 6,
        alignItems: "flex-start",
        rowGap: 0
    },
    dot: {
        position: "absolute",
        flexShrink: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        overflow: "visible"
    },
    recommendedforyou: {
        alignSelf: "stretch",
        flexShrink: 0,
        paddingTop: 24,
        paddingBottom: 0,
        alignItems: "flex-start",
        rowGap: 12,
        paddingHorizontal: 24
    },
    title: {
        alignSelf: "stretch",
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 0
    },
    _recommendedforyou: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 16,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 24,
    },
    cardstyle3: {
        flexShrink: 0,
        width: 312,
        alignItems: "flex-end",
        rowGap: 0,
        borderRadius: 12
    },
    frame26080035: {
        flexShrink: 0,
        height: 125,
        width: 312,
        alignItems: "flex-start",
        rowGap: 0
    },
    image: {
        position: "absolute",
        flexShrink: 0,
        width: 312,
        height: 125,
        borderRadius: 10
    },
    frame26080036: {
        position: "absolute",
        flexShrink: 0,
        bottom: 10,
        left: 10,
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 4
    },
    initialprice: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Roboto",
        fontSize: 12,
        fontWeight: "500",
        letterSpacing: 0,
        lineHeight: 16
    },
    _badge: {
        position: "absolute",
        flexShrink: 0,
        top: 94,
        left: 269,
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
    },
    cardbody: {
        alignSelf: "stretch",
        flexShrink: 0,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 12,
        borderBottomLeftRadius: 12,
        alignItems: "flex-start",
        rowGap: 2,
        paddingVertical: 4,
        paddingHorizontal: 8
    },
    _frame26080030: {
        alignSelf: "stretch",
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        columnGap: 2
    },
    _title: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Roboto",
        fontSize: 13,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 20
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
    __boundingbox: {
        position: "absolute",
        flexShrink: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: "rgba(217, 217, 217, 1)"
    },
    __vector: {
        position: "absolute",
        flexShrink: 0,
        top: 2,
        right: 2,
        bottom: 2,
        left: 2,
        overflow: "visible"
    },
    __label: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(76, 89, 112, 1)",
        fontFamily: "Roboto",
        fontSize: 12,
        fontWeight: "400",
        letterSpacing: 0,
        lineHeight: 16
    },
    cardstyle4: {
        flexShrink: 0,
        width: 312,
        alignItems: "flex-start",
        rowGap: 0,
        borderRadius: 12
    },
    _frame26080035: {
        flexShrink: 0,
        height: 125,
        width: 312,
        alignItems: "flex-start",
        rowGap: 0
    },
    _image: {
        position: "absolute",
        flexShrink: 0,
        width: 312,
        height: 125,
        borderRadius: 10
    },
    _frame26080036: {
        position: "absolute",
        flexShrink: 0,
        bottom: 10,
        left: 10,
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 4
    },
    _initialprice: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Roboto",
        fontSize: 12,
        fontWeight: "500",
        letterSpacing: 0,
        lineHeight: 16
    },
    __badge: {
        position: "absolute",
        flexShrink: 0,
        top: 94,
        left: 269,
        backgroundColor: "rgba(215, 246, 228, 1)",
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 0,
        paddingVertical: 0,
        paddingHorizontal: 4,
        borderRadius: 4
    },
    ___label: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(8, 199, 84, 1)",
        fontFamily: "Roboto",
        fontSize: 12,
        fontWeight: "400",
        letterSpacing: 0,
        lineHeight: 16
    },
    _cardbody: {
        alignSelf: "stretch",
        flexShrink: 0,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 12,
        borderBottomLeftRadius: 12,
        alignItems: "flex-start",
        rowGap: 2,
        paddingVertical: 4,
        paddingHorizontal: 8
    },
    __frame26080030: {
        alignSelf: "stretch",
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        columnGap: 2
    },
    __title: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Roboto",
        fontSize: 13,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 20
    },
    _ratingProduct: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        columnGap: 2
    },
    _iconsFilledStar: {
        flexShrink: 0,
        height: 16,
        width: 16,
        alignItems: "flex-start",
        rowGap: 0
    },
    ___boundingbox: {
        position: "absolute",
        flexShrink: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: "rgba(217, 217, 217, 1)"
    },
    ___vector: {
        position: "absolute",
        flexShrink: 0,
        top: 2,
        right: 2,
        bottom: 2,
        left: 2,
        overflow: "visible"
    },
    ____label: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(76, 89, 112, 1)",
        fontFamily: "Roboto",
        fontSize: 12,
        fontWeight: "400",
        letterSpacing: 0,
        lineHeight: 16
    },
    cardstyle5: {
        flexShrink: 0,
        width: 312,
        alignItems: "flex-start",
        rowGap: 0,
        borderRadius: 12
    },
    __frame26080035: {
        flexShrink: 0,
        height: 125,
        width: 312,
        alignItems: "flex-start",
        rowGap: 0
    },
    __image: {
        position: "absolute",
        flexShrink: 0,
        width: 312,
        height: 125,
        borderRadius: 10
    },
    __frame26080036: {
        position: "absolute",
        flexShrink: 0,
        bottom: 10,
        left: 10,
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 4
    },
    __initialprice: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Roboto",
        fontSize: 12,
        fontWeight: "500",
        letterSpacing: 0,
        lineHeight: 16
    },
    ___badge: {
        position: "absolute",
        flexShrink: 0,
        top: 94,
        left: 269,
        backgroundColor: "rgba(215, 246, 228, 1)",
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 0,
        paddingVertical: 0,
        paddingHorizontal: 4,
        borderRadius: 4
    },
    _____label: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(8, 199, 84, 1)",
        fontFamily: "Roboto",
        fontSize: 12,
        fontWeight: "400",
        letterSpacing: 0,
        lineHeight: 16
    },
    __cardbody: {
        alignSelf: "stretch",
        flexShrink: 0,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 12,
        borderBottomLeftRadius: 12,
        alignItems: "flex-start",
        rowGap: 2,
        paddingVertical: 4,
        paddingHorizontal: 8
    },
    ___frame26080030: {
        alignSelf: "stretch",
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        columnGap: 2
    },
    ___title: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Roboto",
        fontSize: 13,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 20
    },
    __ratingProduct: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        columnGap: 2
    },
    __iconsFilledStar: {
        flexShrink: 0,
        height: 16,
        width: 16,
        alignItems: "flex-start",
        rowGap: 0
    },
    ____boundingbox: {
        position: "absolute",
        flexShrink: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: "rgba(217, 217, 217, 1)"
    },
    ____vector: {
        position: "absolute",
        flexShrink: 0,
        top: 2,
        right: 2,
        bottom: 2,
        left: 2,
        overflow: "visible"
    },
    ______label: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(76, 89, 112, 1)",
        fontFamily: "Roboto",
        fontSize: 12,
        fontWeight: "400",
        letterSpacing: 0,
        lineHeight: 16
    },
    cardstyle6: {
        flexShrink: 0,
        width: 312,
        alignItems: "flex-start",
        rowGap: 0,
        borderRadius: 12
    },
    ___frame26080035: {
        flexShrink: 0,
        height: 125,
        width: 312,
        alignItems: "flex-start",
        rowGap: 0
    },
    ___image: {
        position: "absolute",
        flexShrink: 0,
        width: 312,
        height: 125,
        borderRadius: 10
    },
    ___frame26080036: {
        position: "absolute",
        flexShrink: 0,
        bottom: 10,
        left: 10,
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 4
    },
    ___initialprice: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Roboto",
        fontSize: 12,
        fontWeight: "500",
        letterSpacing: 0,
        lineHeight: 16
    },
    ____badge: {
        position: "absolute",
        flexShrink: 0,
        top: 94,
        left: 269,
        backgroundColor: "rgba(215, 246, 228, 1)",
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 0,
        paddingVertical: 0,
        paddingHorizontal: 4,
        borderRadius: 4
    },
    _______label: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(8, 199, 84, 1)",
        fontFamily: "Roboto",
        fontSize: 12,
        fontWeight: "400",
        letterSpacing: 0,
        lineHeight: 16
    },
    ___cardbody: {
        alignSelf: "stretch",
        flexShrink: 0,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 12,
        borderBottomLeftRadius: 12,
        alignItems: "flex-start",
        rowGap: 2,
        paddingVertical: 4,
        paddingHorizontal: 8
    },
    ____frame26080030: {
        alignSelf: "stretch",
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        columnGap: 2
    },
    ____title: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Roboto",
        fontSize: 13,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 20
    },
    ___ratingProduct: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        columnGap: 2
    },
    ___iconsFilledStar: {
        flexShrink: 0,
        height: 16,
        width: 16,
        alignItems: "flex-start",
        rowGap: 0
    },
    _____boundingbox: {
        position: "absolute",
        flexShrink: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: "rgba(217, 217, 217, 1)"
    },
    _____vector: {
        position: "absolute",
        flexShrink: 0,
        top: 2,
        right: 2,
        bottom: 2,
        left: 2,
        overflow: "visible"
    },
    ________label: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(76, 89, 112, 1)",
        fontFamily: "Roboto",
        fontSize: 12,
        fontWeight: "400",
        letterSpacing: 0,
        lineHeight: 16
    }
});
