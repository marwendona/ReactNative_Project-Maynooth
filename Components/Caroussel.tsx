import React from 'react';
import { View, ImageBackground, Text, StyleSheet } from 'react-native';
import { Svg, Path, Circle } from 'react-native-svg';
import Icon from './Icon';
import Pagination from './Pagination';

const Caroussel = () => {
    return (
        <ImageBackground style={styles.image} source={require('../assets/caroussel.jpg')}>
            <View style={styles.carousel}>
                <View style={styles.banner1}>

                    <View style={styles.text}>
                        <Text style={styles.christmasSale}>
                            {`Christmas Sale`}
                        </Text>
                        <View style={styles.discount}>
                            <Text style={styles.upto}>
                                {`Up to`}
                            </Text>
                            <Text style={styles.myVar}>
                                {`70%`}
                            </Text>
                        </View>
                        <View style={styles.button}>
                            <View style={styles._text}>
                                <Text style={styles.shopnow}>
                                    {`Shop now`}
                                </Text>
                            </View>
                            <Icon iconName={'arrow_forward'} color='black' size='Small'/>
                        </View>
                    </View>

                </View>


            </View>
            <View style={styles.pagination}>
                <Pagination activeIndex={0} totalItems={4}/>
            </View>
        </ImageBackground>
    )
}

export default Caroussel
const styles = StyleSheet.create({
    carousel: {
        alignSelf: "stretch",
        flexShrink: 0,
        height: 188,
        alignItems: "center",
        rowGap: 12,
        borderRadius: 12
    },
    banner1: {
        alignSelf: "stretch",
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0
    },
    image: {
        flexShrink: 0,
        width: 312,
        height: 188,
        borderRadius: 12
    },
    text: {
        position: "absolute",
        flexShrink: 0,
        top: 39,
        height: 109,
        left: 29,
        width: 129,
        alignItems: "flex-start",
        rowGap: 10,
        borderRadius: 12
    },
    christmasSale: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(255, 255, 255, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 18,
        fontWeight: "900",
        letterSpacing: 0,
        lineHeight: 16.941177368164062
    },
    discount: {
        flexShrink: 0,
        alignItems: "flex-start",
        rowGap: 4
    },
    upto: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(255, 255, 255, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 11.29411792755127,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 11.29411792755127
    },
    myVar: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(255, 255, 255, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 30.117647171020508,
        fontWeight: "900",
        letterSpacing: 0,
        lineHeight: 30.117647171020508
    },
    button: {
        flexShrink: 0,
        width: 66,
        paddingLeft: 8,
        paddingRight: 6,
        backgroundColor: "rgba(255, 255, 255, 1)",
        flexDirection: "row",
        alignItems: "center",
        columnGap: 2,
        paddingVertical: 4,
        borderRadius: 4
    },
    _text: {
        flexShrink: 0,
        paddingTop: 0,
        paddingBottom: 1.4117647409439087,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 0,
        paddingHorizontal: 0
    },
    shopnow: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 8.470588684082031,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 9.411765098571777
    },
    iconsOutlineArrow_forward: {
        flexShrink: 0,
        height: 10,
        width: 10,
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
    pagination: {
        position: "absolute",
        flexShrink: 0,
        bottom: -50,
        left: 80,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 12
    }
})
