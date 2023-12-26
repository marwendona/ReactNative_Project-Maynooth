import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import Icon from '../../../Components/Icon';
import Card1 from '../../../Components/Card1';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux';
import { service } from '../../../service';

const SearchResult = () => {
    const scaleValue = new Animated.Value(1);
    const products = useSelector(state => state?.product.products)
    const [showModal, setShowModal] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {

        const fetchData = async () => {
            const { data } = await service.products.productsList()
            console.log(data)
            dispatch({ type: 'SET_PRODUCTS', payload: data.paginatedResult })
            console.log("products ", products)

        }
        fetchData()

    }, [])

    const handleIconPress = () => {
        // Animation logic
        Animated.sequence([
            Animated.timing(scaleValue, { toValue: 1.2, duration: 100, useNativeDriver: true }),
            Animated.timing(scaleValue, { toValue: 1, duration: 100, useNativeDriver: true }),
        ]).start();
    };
    return (
        <View >
            <View >
                <View style={styles.relevance}>
                    <View style={styles.textwrapper}>
                        <TouchableOpacity onPress={handleIconPress}>
                            <Text style={styles.text}>
                                {`Relevance`}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.latest}>
                    <View style={styles._textwrapper}>
                        <TouchableOpacity onPress={handleIconPress}>
                            <Text style={styles._text}>
                                {`Latest`}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.topsales}>
                    <View style={styles.__textwrapper}>
                        <TouchableOpacity onPress={handleIconPress}>
                            <Text style={styles.__text}>
                                {`Top sales`}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.price}>
                    <View style={styles.___textwrapper}>
                        <Text style={styles.___text}>
                            {`Price`}
                        </Text>
                        <Icon iconName={'unfold_more'} size={'Small'} />
                    </View>
                </View>
            </View>
            <View >
                <View >
                    <Text >
                    {products.length} results for Table
                    </Text>
                </View>


                {
                    products.map(product => {
                        return(
                        <View>
                            <Card1 key={product.id} title={product.title}
                                subtitle={product.description}
                                type={'Product'}
                                initialPrice={product.price}
                                discount={(product.price / product.promotion) * 100}
                                newPrice={product.promotion}
                                image={product.image}
                                orientation='Vertical'
                                rating='5.0'               ></Card1>
                        </View>)
                    })

                }
            </View>
            {/* <View style={styles.searchresult}>
                <View style={styles.title}>
                    <Text style={styles.resultsforTable}>
                        {`712 results for Table`}
                    </Text>
                </View>
                <View style={styles.items}>
                    <View style={styles.col}>
                        <Card1 size='Small' image='../assets/SingleDrawer.jpg' title='Single Drawer Beds' initialPrice='Rp 800.000' newPrice='Rp 600.000' discount='25%' type='Product'
                            orientation='Vertical' > </Card1>
                        <Card1 rating='5.0' size='Small' image='assets/exemple_image.png' title='Wooden Side Table' initialPrice='Rp 1.500.000' newPrice='Rp 2.000.000' discount='25%' type='Product'
                            orientation='Vertical'  > </Card1>
                        <Card1 size='Small' image='assets/solidWood.jpg' title='Solid Wood Coffe..' initialPrice='Rp 2.550.000' newPrice='Rp 3.000.000' discount='15%' type='Product'
                            orientation='Vertical'  > </Card1>
                    </View>
                    <View style={styles._col}>
                        <Card1 rating='5.0' size='Small' image='assets/DoubleDrawer.jpg' title='Double Drawer Bed' initialPrice='Rp 1.500.000' newPrice='Rp 900.000' discount='40%' type='Product'
                            orientation='Vertical'  > </Card1>
                        <Card1 rating='4.8' size='Small' image='assets/woodenCoffe.jpg' title='Wooden Coffee T..' initialPrice='Rp 1.400.000' newPrice='Rp 2.000.000' discount='30%' type='Product'
                            orientation='Vertical'  > </Card1>
                        <Card1 size='Small' image='assets/LongTable.jpg' title='Long Dining Table' initialPrice='Rp 2.800.000' newPrice='Rp 4.000.000' discount='30%' type='Product'
                            orientation='Vertical'  > </Card1>
                    </View>
                </View>
            </View> */}

        </View>
    )
}
export default SearchResult
const styles = StyleSheet.create({
    searchResult: {
        flexShrink: 0,
        width: 380,
        paddingTop: 50,
        paddingBottom: 24,
        backgroundColor: "rgba(255, 255, 255, 1)",
        alignItems: "flex-start",
        rowGap: 0,
        paddingHorizontal: 0
    },
    searchresult: {
        alignSelf: "stretch",
        flexShrink: 0,
        alignItems: "flex-start",
        rowGap: 12,
        paddingVertical: 0,
        paddingHorizontal: 24
    },
    title: {
        alignSelf: "stretch",
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 0
    },
    resultsforTable: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 16,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 24
    },
    items: {
        alignSelf: "stretch",
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 24
    },
    col: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        alignItems: "flex-start",
        rowGap: 24
    },
    card: {
        alignSelf: "stretch",
        flexShrink: 0,
        alignItems: "flex-start",
        rowGap: 0,
        borderRadius: 12
    },
    image: {
        alignSelf: "stretch",
        flexShrink: 0,
        height: 144,
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 0,
        borderLeftWidth: 1,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
        borderColor: "rgba(225, 229, 235, 1)"
    },
    cardbody: {
        alignSelf: "stretch",
        flexShrink: 0,
        borderTopWidth: 0,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 12,
        borderBottomLeftRadius: 12,
        backgroundColor: "rgba(255, 255, 255, 1)",
        alignItems: "flex-start",
        rowGap: 2,
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderColor: "rgba(225, 229, 235, 1)"
    },
    _title: {
        alignSelf: "stretch",
        flexShrink: 0,
        height: 20,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 14,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 20
    },
    price: {
        alignSelf: "stretch",
        flexShrink: 0,
        paddingTop: 0,
        paddingBottom: 4,
        alignItems: "flex-start",
        rowGap: 0,
        paddingHorizontal: 0
    },
    currentprice: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16
    },
    initialpricewrapper: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        columnGap: 4
    },
    initialprice: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(76, 89, 112, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "400",
        letterSpacing: 0,
        lineHeight: 16,
        textDecorationLine: "line-through"
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
    label: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(8, 199, 84, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16
    },
    ratingProduct: {
        flexShrink: 0,
        paddingTop: 0,
        paddingBottom: 4,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 2,
        paddingHorizontal: 0
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
    _label: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(76, 89, 112, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16
    },
    buttonfloating: {
        position: "absolute",
        flexShrink: 0,
        top: 12,
        right: 12,
        backgroundColor: "rgba(255, 255, 255, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 2,
        padding: 6,
        borderRadius: 9999
    },
    icon: {
        flexShrink: 0,
        height: 16,
        width: 16,
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
        right: 1,
        bottom: 2,
        left: 1,
        overflow: "visible"
    },
    _card: {
        alignSelf: "stretch",
        flexShrink: 0,
        alignItems: "flex-start",
        rowGap: 0,
        borderRadius: 12
    },
    _image: {
        alignSelf: "stretch",
        flexShrink: 0,
        height: 144,
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 0,
        borderLeftWidth: 1,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
        borderColor: "rgba(225, 229, 235, 1)"
    },
    _cardbody: {
        alignSelf: "stretch",
        flexShrink: 0,
        borderTopWidth: 0,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 12,
        borderBottomLeftRadius: 12,
        backgroundColor: "rgba(255, 255, 255, 1)",
        alignItems: "flex-start",
        rowGap: 2,
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderColor: "rgba(225, 229, 235, 1)"
    },
    __title: {
        alignSelf: "stretch",
        flexShrink: 0,
        height: 20,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 14,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 20
    },
    _price: {
        alignSelf: "stretch",
        flexShrink: 0,
        paddingTop: 0,
        paddingBottom: 4,
        alignItems: "flex-start",
        rowGap: 0,
        paddingHorizontal: 0
    },
    _currentprice: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16
    },
    _initialpricewrapper: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        columnGap: 4
    },
    _initialprice: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(76, 89, 112, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "400",
        letterSpacing: 0,
        lineHeight: 16,
        textDecorationLine: "line-through"
    },
    _badge: {
        flexShrink: 0,
        backgroundColor: "rgba(215, 246, 228, 1)",
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 0,
        paddingVertical: 0,
        paddingHorizontal: 4,
        borderRadius: 4
    },
    __label: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(8, 199, 84, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16
    },
    _ratingProduct: {
        flexShrink: 0,
        paddingTop: 0,
        paddingBottom: 4,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 2,
        paddingHorizontal: 0
    },
    _iconsFilledStar: {
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
    ___label: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(76, 89, 112, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16
    },
    _buttonfloating: {
        position: "absolute",
        flexShrink: 0,
        top: 12,
        right: 12,
        backgroundColor: "rgba(255, 255, 255, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 2,
        padding: 6,
        borderRadius: 9999
    },
    _icon: {
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
        right: 1,
        bottom: 2,
        left: 1,
        overflow: "visible"
    },
    __card: {
        alignSelf: "stretch",
        flexShrink: 0,
        alignItems: "flex-start",
        rowGap: 0,
        borderRadius: 12
    },
    __image: {
        alignSelf: "stretch",
        flexShrink: 0,
        height: 144,
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 0,
        borderLeftWidth: 1,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
        borderColor: "rgba(225, 229, 235, 1)"
    },
    __cardbody: {
        alignSelf: "stretch",
        flexShrink: 0,
        borderTopWidth: 0,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 12,
        borderBottomLeftRadius: 12,
        backgroundColor: "rgba(255, 255, 255, 1)",
        alignItems: "flex-start",
        rowGap: 2,
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderColor: "rgba(225, 229, 235, 1)"
    },
    ___title: {
        alignSelf: "stretch",
        flexShrink: 0,
        height: 20,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 14,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 20
    },
    __price: {
        alignSelf: "stretch",
        flexShrink: 0,
        paddingTop: 0,
        paddingBottom: 4,
        alignItems: "flex-start",
        rowGap: 0,
        paddingHorizontal: 0
    },
    __currentprice: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16
    },
    __initialpricewrapper: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        columnGap: 4
    },
    __initialprice: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(76, 89, 112, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "400",
        letterSpacing: 0,
        lineHeight: 16,
        textDecorationLine: "line-through"
    },
    __badge: {
        flexShrink: 0,
        backgroundColor: "rgba(215, 246, 228, 1)",
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 0,
        paddingVertical: 0,
        paddingHorizontal: 4,
        borderRadius: 4
    },
    ____label: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(8, 199, 84, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16
    },
    __ratingProduct: {
        flexShrink: 0,
        paddingTop: 0,
        paddingBottom: 4,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 2,
        paddingHorizontal: 0
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
    _____label: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(76, 89, 112, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16
    },
    __buttonfloating: {
        position: "absolute",
        flexShrink: 0,
        top: 12,
        right: 12,
        backgroundColor: "rgba(255, 255, 255, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 2,
        padding: 6,
        borderRadius: 9999
    },
    __icon: {
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
        right: 1,
        bottom: 2,
        left: 1,
        overflow: "visible"
    },
    _col: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        alignItems: "flex-start",
        rowGap: 24
    },
    ___card: {
        alignSelf: "stretch",
        flexShrink: 0,
        alignItems: "flex-start",
        rowGap: 0,
        borderRadius: 12
    },
    ___image: {
        alignSelf: "stretch",
        flexShrink: 0,
        height: 144,
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 0,
        borderLeftWidth: 1,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
        borderColor: "rgba(225, 229, 235, 1)"
    },
    ___cardbody: {
        alignSelf: "stretch",
        flexShrink: 0,
        borderTopWidth: 0,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 12,
        borderBottomLeftRadius: 12,
        backgroundColor: "rgba(255, 255, 255, 1)",
        alignItems: "flex-start",
        rowGap: 2,
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderColor: "rgba(225, 229, 235, 1)"
    },
    ____title: {
        alignSelf: "stretch",
        flexShrink: 0,
        height: 20,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 14,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 20
    },
    ___price: {
        alignSelf: "stretch",
        flexShrink: 0,
        paddingTop: 0,
        paddingBottom: 4,
        alignItems: "flex-start",
        rowGap: 0,
        paddingHorizontal: 0
    },
    ___currentprice: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16
    },
    ___initialpricewrapper: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        columnGap: 4
    },
    ___initialprice: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(76, 89, 112, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "400",
        letterSpacing: 0,
        lineHeight: 16,
        textDecorationLine: "line-through"
    },
    ___badge: {
        flexShrink: 0,
        backgroundColor: "rgba(215, 246, 228, 1)",
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 0,
        paddingVertical: 0,
        paddingHorizontal: 4,
        borderRadius: 4
    },
    ______label: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(8, 199, 84, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16
    },
    ___ratingProduct: {
        flexShrink: 0,
        paddingTop: 0,
        paddingBottom: 4,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 2,
        paddingHorizontal: 0
    },
    ___iconsFilledStar: {
        flexShrink: 0,
        height: 16,
        width: 16,
        alignItems: "flex-start",
        rowGap: 0
    },
    ______boundingbox: {
        position: "absolute",
        flexShrink: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: "rgba(217, 217, 217, 1)"
    },
    ______vector: {
        position: "absolute",
        flexShrink: 0,
        top: 2,
        right: 2,
        bottom: 2,
        left: 2,
        overflow: "visible"
    },
    _______label: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(76, 89, 112, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16
    },
    ___buttonfloating: {
        position: "absolute",
        flexShrink: 0,
        top: 12,
        right: 12,
        backgroundColor: "rgba(255, 255, 255, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 2,
        padding: 6,
        borderRadius: 9999
    },
    ___icon: {
        flexShrink: 0,
        height: 16,
        width: 16,
        alignItems: "flex-start",
        rowGap: 0
    },
    _______boundingbox: {
        position: "absolute",
        flexShrink: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: "rgba(217, 217, 217, 1)"
    },
    _______vector: {
        position: "absolute",
        flexShrink: 0,
        top: 2,
        right: 1,
        bottom: 2,
        left: 1,
        overflow: "visible"
    },
    ____card: {
        alignSelf: "stretch",
        flexShrink: 0,
        alignItems: "flex-start",
        rowGap: 0,
        borderRadius: 12
    },
    ____image: {
        alignSelf: "stretch",
        flexShrink: 0,
        height: 144,
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 0,
        borderLeftWidth: 1,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
        borderColor: "rgba(225, 229, 235, 1)"
    },
    ____cardbody: {
        alignSelf: "stretch",
        flexShrink: 0,
        borderTopWidth: 0,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 12,
        borderBottomLeftRadius: 12,
        backgroundColor: "rgba(255, 255, 255, 1)",
        alignItems: "flex-start",
        rowGap: 2,
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderColor: "rgba(225, 229, 235, 1)"
    },
    _____title: {
        alignSelf: "stretch",
        flexShrink: 0,
        height: 20,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 14,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 20
    },
    ____price: {
        alignSelf: "stretch",
        flexShrink: 0,
        paddingTop: 0,
        paddingBottom: 4,
        alignItems: "flex-start",
        rowGap: 0,
        paddingHorizontal: 0
    },
    ____currentprice: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16
    },
    ____initialpricewrapper: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        columnGap: 4
    },
    ____initialprice: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(76, 89, 112, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "400",
        letterSpacing: 0,
        lineHeight: 16,
        textDecorationLine: "line-through"
    },
    ____badge: {
        flexShrink: 0,
        backgroundColor: "rgba(215, 246, 228, 1)",
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 0,
        paddingVertical: 0,
        paddingHorizontal: 4,
        borderRadius: 4
    },
    ________label: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(8, 199, 84, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16
    },
    ____ratingProduct: {
        flexShrink: 0,
        paddingTop: 0,
        paddingBottom: 4,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 2,
        paddingHorizontal: 0
    },
    ____iconsFilledStar: {
        flexShrink: 0,
        height: 16,
        width: 16,
        alignItems: "flex-start",
        rowGap: 0
    },
    ________boundingbox: {
        position: "absolute",
        flexShrink: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: "rgba(217, 217, 217, 1)"
    },
    ________vector: {
        position: "absolute",
        flexShrink: 0,
        top: 2,
        right: 2,
        bottom: 2,
        left: 2,
        overflow: "visible"
    },
    _________label: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(76, 89, 112, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16
    },
    ____buttonfloating: {
        position: "absolute",
        flexShrink: 0,
        top: 12,
        right: 12,
        backgroundColor: "rgba(255, 255, 255, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 2,
        padding: 6,
        borderRadius: 9999
    },
    ____icon: {
        flexShrink: 0,
        height: 16,
        width: 16,
        alignItems: "flex-start",
        rowGap: 0
    },
    _________boundingbox: {
        position: "absolute",
        flexShrink: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: "rgba(217, 217, 217, 1)"
    },
    _________vector: {
        position: "absolute",
        flexShrink: 0,
        top: 2,
        right: 1,
        bottom: 2,
        left: 1,
        overflow: "visible"
    },
    _____card: {
        alignSelf: "stretch",
        flexShrink: 0,
        alignItems: "flex-start",
        rowGap: 0,
        borderRadius: 12
    },
    _____image: {
        alignSelf: "stretch",
        flexShrink: 0,
        height: 144,
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 0,
        borderLeftWidth: 1,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
        borderColor: "rgba(225, 229, 235, 1)"
    },
    _____cardbody: {
        alignSelf: "stretch",
        flexShrink: 0,
        borderTopWidth: 0,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 12,
        borderBottomLeftRadius: 12,
        backgroundColor: "rgba(255, 255, 255, 1)",
        alignItems: "flex-start",
        rowGap: 2,
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderColor: "rgba(225, 229, 235, 1)"
    },
    ______title: {
        alignSelf: "stretch",
        flexShrink: 0,
        height: 20,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 14,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 20
    },
    _____price: {
        alignSelf: "stretch",
        flexShrink: 0,
        paddingTop: 0,
        paddingBottom: 4,
        alignItems: "flex-start",
        rowGap: 0,
        paddingHorizontal: 0
    },
    _____currentprice: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16
    },
    _____initialpricewrapper: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        columnGap: 4
    },
    _____initialprice: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(76, 89, 112, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "400",
        letterSpacing: 0,
        lineHeight: 16,
        textDecorationLine: "line-through"
    },
    _____badge: {
        flexShrink: 0,
        backgroundColor: "rgba(215, 246, 228, 1)",
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 0,
        paddingVertical: 0,
        paddingHorizontal: 4,
        borderRadius: 4
    },
    __________label: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(8, 199, 84, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16
    },
    _____ratingProduct: {
        flexShrink: 0,
        paddingTop: 0,
        paddingBottom: 4,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 2,
        paddingHorizontal: 0
    },
    _____iconsFilledStar: {
        flexShrink: 0,
        height: 16,
        width: 16,
        alignItems: "flex-start",
        rowGap: 0
    },
    __________boundingbox: {
        position: "absolute",
        flexShrink: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: "rgba(217, 217, 217, 1)"
    },
    __________vector: {
        position: "absolute",
        flexShrink: 0,
        top: 2,
        right: 2,
        bottom: 2,
        left: 2,
        overflow: "visible"
    },
    ___________label: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(76, 89, 112, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16
    },
    _____buttonfloating: {
        position: "absolute",
        flexShrink: 0,
        top: 12,
        right: 12,
        backgroundColor: "rgba(255, 255, 255, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 2,
        padding: 6,
        borderRadius: 9999
    },
    _____icon: {
        flexShrink: 0,
        height: 16,
        width: 16,
        alignItems: "flex-start",
        rowGap: 0
    },
    ___________boundingbox: {
        position: "absolute",
        flexShrink: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: "rgba(217, 217, 217, 1)"
    },
    ___________vector: {
        position: "absolute",
        flexShrink: 0,
        top: 2,
        right: 1,
        bottom: 2,
        left: 1,
        overflow: "visible"
    },
    navbar: {
        position: "absolute",
        flexShrink: 0,
        left: 0,
        right: 0,
        backgroundColor: "rgba(255, 255, 255, 1)",
        alignItems: "flex-start",
        rowGap: 0
    },
    navtop: {
        alignSelf: "stretch",
        flexShrink: 0,
        backgroundColor: "rgba(255, 255, 255, 1)",
        flexDirection: "row",
        alignItems: "center",
        columnGap: 0,
        paddingVertical: 12,
        paddingHorizontal: 16
    },
    itemleftwrapper: {
        flexShrink: 0,
        paddingLeft: 0,
        paddingRight: 4,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 0,
        paddingVertical: 0
    },
    itemleft: {
        flexShrink: 0,
        height: 40,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 4,
        padding: 10,
        borderRadius: 9999
    },
    iconsOutlineArrow_back: {
        flexShrink: 0,
        height: 20,
        width: 20,
        alignItems: "flex-start",
        rowGap: 0
    },
    ____________boundingbox: {
        position: "absolute",
        flexShrink: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: "rgba(217, 217, 217, 1)"
    },
    ____________vector: {
        position: "absolute",
        flexShrink: 0,
        top: 4,
        right: 4,
        bottom: 4,
        left: 3,
        overflow: "visible"
    },
    inputwrapper: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        alignItems: "flex-start",
        rowGap: 0,
        paddingVertical: 0,
        paddingHorizontal: 8
    },
    inputfield: {
        alignSelf: "stretch",
        flexShrink: 0,
        backgroundColor: "rgba(255, 255, 255, 1)",
        flexDirection: "row",
        alignItems: "center",
        columnGap: 4,
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: "rgba(225, 229, 235, 1)",
        borderRadius: 12
    },
    iconleft: {
        flexShrink: 0,
        height: 20,
        width: 20,
        alignItems: "flex-start",
        rowGap: 0
    },
    _____________boundingbox: {
        position: "absolute",
        flexShrink: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: "rgba(217, 217, 217, 1)"
    },
    _____________vector: {
        position: "absolute",
        flexShrink: 0,
        top: 2,
        right: 3,
        bottom: 3,
        left: 2,
        overflow: "visible"
    },
    inputvaluewrapper: {
        alignSelf: "stretch",
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 0,
        paddingVertical: 2,
        paddingHorizontal: 4
    },
    inputvalue: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 14,
        fontWeight: "400",
        letterSpacing: 0,
        lineHeight: 20
    },
    itemrightwrapper: {
        flexShrink: 0,
        paddingLeft: 4,
        paddingRight: 0,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 0,
        paddingVertical: 0
    },
    itemright: {
        flexShrink: 0,
        height: 40,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 4,
        padding: 10,
        borderRadius: 9999
    },
    iconsOutlineTune: {
        flexShrink: 0,
        height: 20,
        width: 20,
        alignItems: "flex-start",
        rowGap: 0
    },
    ______________boundingbox: {
        position: "absolute",
        flexShrink: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: "rgba(217, 217, 217, 1)"
    },
    ______________vector: {
        position: "absolute",
        flexShrink: 0,
        top: 2,
        right: 3,
        bottom: 3,
        left: 2,
        overflow: "visible"
    },
    tabssort: {
        alignSelf: "stretch",
        flexShrink: 0,
        paddingTop: 0,
        paddingBottom: 12,
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 1,
        borderLeftWidth: 0,
        backgroundColor: "rgba(255, 255, 255, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        columnGap: 14,
        paddingHorizontal: 24,
        borderColor: "rgba(225, 229, 235, 1)"
    },
    relevance: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        columnGap: 0,
        paddingVertical: 1,
        paddingHorizontal: 0
    },
    textwrapper: {
        flexShrink: 0,
        paddingTop: 0,
        paddingBottom: 2,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 0,
        paddingHorizontal: 0
    },
    text: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16
    },
    latest: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        columnGap: 0,
        paddingVertical: 1,
        paddingHorizontal: 0
    },
    _textwrapper: {
        flexShrink: 0,
        paddingTop: 0,
        paddingBottom: 2,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 0,
        paddingHorizontal: 0
    },
    _text: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(76, 89, 112, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16
    },
    topsales: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        columnGap: 0,
        paddingVertical: 1,
        paddingHorizontal: 0
    },
    __textwrapper: {
        flexShrink: 0,
        paddingTop: 0,
        paddingBottom: 2,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 0,
        paddingHorizontal: 0
    },
    __text: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(76, 89, 112, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16
    },
    ______price: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        columnGap: 0,
        paddingVertical: 1,
        paddingHorizontal: 0
    },
    ___textwrapper: {
        flexShrink: 0,
        paddingTop: 0,
        paddingBottom: 2,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 0,
        paddingHorizontal: 0
    },
    ___text: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(76, 89, 112, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16
    },
    ______icon: {
        flexShrink: 0,
        height: 16,
        width: 16,
        alignItems: "flex-start",
        rowGap: 0
    },
    _______________boundingbox: {
        position: "absolute",
        flexShrink: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: "rgba(217, 217, 217, 1)"
    },
    _______________vector: {
        position: "absolute",
        flexShrink: 0,
        top: 2,
        left: 5,
        width: 5,
        height: 11,
        overflow: "visible"
    }
})