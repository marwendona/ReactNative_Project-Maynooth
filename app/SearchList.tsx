import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Svg, Path, Circle } from 'react-native-svg';
import Icon from '../Components/Icon';

export default function SearchList() {
    return (
        <View style={styles.searchList}>

            <View style={styles.searchlist}>
                <View style={styles.item}>
                    <View style={styles.text}>
                        <Text style={styles.title}>
                            {`Table`}
                        </Text>
                    </View>
                    <View style={styles.itemright}>
                        <Icon iconName={'chevron_right'} size={'Small'} />
                    </View>
                </View>
                <View style={styles._item}>
                    <View style={styles._text}>
                        <Text style={styles._title}>
                            {`Table lamp`}
                        </Text>
                    </View>
                    <View style={styles._itemright}>
                        <View style={styles.itemright}>
                            <Icon iconName={'chevron_right'} size={'Small'} />
                        </View>
                    </View>
                </View>
                <View style={styles.__item}>
                    <View style={styles.__text}>
                        <Text style={styles.__title}>
                            {`Coffee table`}
                        </Text>
                    </View>
                    <View style={styles.__itemright}>
                        <View style={styles.itemright}>
                            <Icon iconName={'chevron_right'} size={'Small'} />
                        </View>
                    </View>
                </View>
                <View style={styles.___item}>
                    <View style={styles.___text}>
                        <Text style={styles.___title}>
                            {`Dining table`}
                        </Text>
                    </View>
                    <View style={styles.___itemright}>
                    <View style={styles.itemright}>
                        <Icon iconName={'chevron_right'} size={'Small'} />
                    </View>
                    </View>
                </View>
                <View style={styles.____item}>
                    <View style={styles.____text}>
                        <Text style={styles.____title}>
                            {`Side table`}
                        </Text>
                    </View>
                    <View style={styles.____itemright}>
                    <View style={styles.itemright}>
                        <Icon iconName={'chevron_right'} size={'Small'} />
                    </View>
                    </View>
                </View>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    searchList: {
        flexShrink: 0,
        height: 800,
        width: 360,
        paddingTop: 0,
        paddingBottom: 64,
        backgroundColor: "rgba(255, 255, 255, 1)",
        alignItems: "flex-start",
        rowGap: 2,
        paddingHorizontal: 0
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
        borderColor: "rgba(9, 17, 31, 1)",
        borderRadius: 12
    },
    iconleft: {
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
    iconright: {
        flexShrink: 0,
        height: 20,
        width: 20,
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
        top: 5,
        right: 5,
        bottom: 5,
        left: 5,
        overflow: "visible"
    },
    searchlist: {
        alignSelf: "stretch",
        flexShrink: 0,
        alignItems: "flex-start",
        rowGap: 0
    },
    item: {
        alignSelf: "stretch",
        flexShrink: 0,
        paddingLeft: 24,
        paddingRight: 20,
        backgroundColor: "rgba(255, 255, 255, 1)",
        flexDirection: "row",
        alignItems: "center",
        columnGap: 8,
        paddingVertical: 10
    },
    text: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        alignItems: "flex-start",
        justifyContent: "center",
        rowGap: 0
    },
    title: {
        alignSelf: "stretch",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(76, 89, 112, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 14,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 20
    },
    itemright: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        columnGap: 0
    },
    _iconright: {
        flexShrink: 0,
        height: 20,
        width: 20,
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
        top: 5,
        right: 7,
        bottom: 5,
        left: 8,
        overflow: "visible"
    },
    _item: {
        alignSelf: "stretch",
        flexShrink: 0,
        paddingLeft: 24,
        paddingRight: 20,
        backgroundColor: "rgba(255, 255, 255, 1)",
        flexDirection: "row",
        alignItems: "center",
        columnGap: 8,
        paddingVertical: 10
    },
    _text: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        alignItems: "flex-start",
        justifyContent: "center",
        rowGap: 0
    },
    _title: {
        alignSelf: "stretch",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(76, 89, 112, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 14,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 20
    },
    _itemright: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        columnGap: 0
    },
    __iconright: {
        flexShrink: 0,
        height: 20,
        width: 20,
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
        top: 5,
        right: 7,
        bottom: 5,
        left: 8,
        overflow: "visible"
    },
    __item: {
        alignSelf: "stretch",
        flexShrink: 0,
        paddingLeft: 24,
        paddingRight: 20,
        backgroundColor: "rgba(255, 255, 255, 1)",
        flexDirection: "row",
        alignItems: "center",
        columnGap: 8,
        paddingVertical: 10
    },
    __text: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        alignItems: "flex-start",
        justifyContent: "center",
        rowGap: 0
    },
    __title: {
        alignSelf: "stretch",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(76, 89, 112, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 14,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 20
    },
    __itemright: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        columnGap: 0
    },
    ___iconright: {
        flexShrink: 0,
        height: 20,
        width: 20,
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
        top: 5,
        right: 7,
        bottom: 5,
        left: 8,
        overflow: "visible"
    },
    ___item: {
        alignSelf: "stretch",
        flexShrink: 0,
        paddingLeft: 24,
        paddingRight: 20,
        backgroundColor: "rgba(255, 255, 255, 1)",
        flexDirection: "row",
        alignItems: "center",
        columnGap: 8,
        paddingVertical: 10
    },
    ___text: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        alignItems: "flex-start",
        justifyContent: "center",
        rowGap: 0
    },
    ___title: {
        alignSelf: "stretch",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(76, 89, 112, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 14,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 20
    },
    ___itemright: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        columnGap: 0
    },
    ____iconright: {
        flexShrink: 0,
        height: 20,
        width: 20,
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
        top: 5,
        right: 7,
        bottom: 5,
        left: 8,
        overflow: "visible"
    },
    ____item: {
        alignSelf: "stretch",
        flexShrink: 0,
        paddingLeft: 24,
        paddingRight: 20,
        backgroundColor: "rgba(255, 255, 255, 1)",
        flexDirection: "row",
        alignItems: "center",
        columnGap: 8,
        paddingVertical: 10
    },
    ____text: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        alignItems: "flex-start",
        justifyContent: "center",
        rowGap: 0
    },
    ____title: {
        alignSelf: "stretch",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(76, 89, 112, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 14,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 20
    },
    ____itemright: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        columnGap: 0
    },
    _____iconright: {
        flexShrink: 0,
        height: 20,
        width: 20,
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
        top: 5,
        right: 7,
        bottom: 5,
        left: 8,
        overflow: "visible"
    },
    navbottom: {
        position: "absolute",
        flexShrink: 0,
        bottom: 0,
        left: 0,
        right: 0,
        borderTopWidth: 1,
        borderRightWidth: 0,
        borderBottomWidth: 0,
        borderLeftWidth: 0,
        backgroundColor: "rgba(255, 255, 255, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        columnGap: 0,
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderColor: "rgba(225, 229, 235, 1)"
    },
    item1: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 4,
        padding: 10,
        borderRadius: 9999
    },
    icon: {
        flexShrink: 0,
        height: 20,
        width: 20,
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
        top: 3,
        right: 3,
        bottom: 2,
        left: 3,
        overflow: "visible"
    },
    item2: {
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
    iconsFilledSearch: {
        flexShrink: 0,
        height: 20,
        width: 20,
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
        right: 2,
        bottom: 2,
        left: 2,
        overflow: "visible"
    },
    label: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 14,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 20
    },
    item3: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 4,
        padding: 10,
        borderRadius: 9999
    },
    iconsOutlineShopping_cart: {
        flexShrink: 0,
        height: 20,
        width: 20,
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
        right: 3,
        bottom: 2,
        left: 1,
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
    item4: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 4,
        padding: 10,
        borderRadius: 9999
    },
    iconsOutlineFavorite: {
        flexShrink: 0,
        height: 20,
        width: 20,
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
        top: 3,
        right: 2,
        bottom: 2,
        left: 2,
        overflow: "visible"
    },
    item5: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 4,
        padding: 10,
        borderRadius: 9999
    },
    iconsOutlinePerson: {
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
        top: 3,
        right: 3,
        bottom: 3,
        left: 3,
        overflow: "visible"
    },
    keyboard: {
        position: "absolute",
        flexShrink: 0,
        bottom: 0,
        height: 296,
        left: 0,
        right: 0,
        backgroundColor: "rgba(240, 242, 245, 1)",
        alignItems: "flex-start",
        rowGap: 0
    },
    bottomnav: {
        position: "absolute",
        flexShrink: 0,
        bottom: 0,
        height: 31,
        left: 0,
        right: 0,
        alignItems: "flex-start",
        rowGap: 0
    },
    deviceDeviceframecomponentsNavigation: {
        position: "absolute",
        flexShrink: 0,
        bottom: 0,
        height: 24,
        left: 0,
        right: 0,
        alignItems: "flex-start",
        rowGap: 0
    },
    home: {
        position: "absolute",
        flexShrink: 0,
        top: 16,
        right: 149,
        bottom: 7,
        left: 149,
        backgroundColor: "rgba(9, 17, 31, 1)",
        borderRadius: 8
    },
    keyboard_20px: {
        position: "absolute",
        flexShrink: 0,
        bottom: 14,
        height: 17,
        right: 17,
        width: 17,
        alignItems: "flex-start",
        rowGap: 0
    },
    _icon: {
        position: "absolute",
        flexShrink: 0,
        top: 4,
        right: 2,
        bottom: 4,
        left: 2,
        overflow: "visible"
    },
    collapse: {
        position: "absolute",
        flexShrink: 0,
        bottom: 14,
        height: 17,
        left: 17,
        width: 17,
        alignItems: "flex-start",
        rowGap: 0
    },
    __icon: {
        position: "absolute",
        flexShrink: 0,
        top: 6,
        right: 4,
        bottom: 6,
        left: 4,
        overflow: "visible"
    },
    _keyboard: {
        position: "absolute",
        flexShrink: 0,
        top: 45,
        left: 7,
        right: 7,
        alignItems: "center",
        rowGap: 10.485434532165527
    },
    firstrow: {
        flexShrink: 0,
        height: 40,
        width: 346
    },
    q: {
        position: "absolute",
        flexShrink: 0,
        height: 40,
        width: 30,
        backgroundColor: "rgba(255, 255, 255, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        columnGap: 0,
        paddingVertical: 0,
        paddingHorizontal: 19.223297119140625,
        borderRadius: 6
    },
    _q: {
        flexShrink: 0,
        paddingTop: 0,
        paddingBottom: 3.495144844055176,
        alignItems: "center",
        justifyContent: "center",
        rowGap: 0,
        paddingHorizontal: 0
    },
    __q: {
        flexShrink: 0,
        textAlign: "center",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Roboto",
        fontSize: 18.349510192871094,
        fontWeight: "400",
        letterSpacing: 0,
        lineHeight: 20.970869064331055
    },
    w: {
        position: "absolute",
        flexShrink: 0,
        height: 40,
        left: 35,
        width: 30,
        backgroundColor: "rgba(255, 255, 255, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        columnGap: 0,
        paddingVertical: 0,
        paddingHorizontal: 19.223297119140625,
        borderRadius: 6
    },
    _w: {
        flexShrink: 0,
        alignItems: "center",
        justifyContent: "center",
        rowGap: 0
    },
    __w: {
        flexShrink: 0,
        textAlign: "center",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Roboto",
        fontSize: 18.349510192871094,
        fontWeight: "400",
        letterSpacing: 0,
        lineHeight: 20.970869064331055
    },
    e: {
        position: "absolute",
        flexShrink: 0,
        height: 40,
        left: 70,
        width: 30,
        backgroundColor: "rgba(255, 255, 255, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        columnGap: 0,
        paddingVertical: 0,
        paddingHorizontal: 19.223297119140625,
        borderRadius: 6
    },
    _e: {
        flexShrink: 0,
        alignItems: "center",
        justifyContent: "center",
        rowGap: 0
    },
    __e: {
        flexShrink: 0,
        textAlign: "center",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Roboto",
        fontSize: 18.349510192871094,
        fontWeight: "400",
        letterSpacing: 0,
        lineHeight: 20.970869064331055
    },
    r: {
        position: "absolute",
        flexShrink: 0,
        height: 40,
        left: 105,
        width: 30,
        backgroundColor: "rgba(255, 255, 255, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        columnGap: 0,
        paddingVertical: 0,
        paddingHorizontal: 19.223297119140625,
        borderRadius: 6
    },
    _r: {
        flexShrink: 0,
        alignItems: "center",
        justifyContent: "center",
        rowGap: 0
    },
    __r: {
        flexShrink: 0,
        textAlign: "center",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Roboto",
        fontSize: 18.349510192871094,
        fontWeight: "400",
        letterSpacing: 0,
        lineHeight: 20.970869064331055
    },
    t: {
        position: "absolute",
        flexShrink: 0,
        height: 40,
        left: 141,
        width: 30,
        backgroundColor: "rgba(255, 255, 255, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        columnGap: 0,
        paddingVertical: 0,
        paddingHorizontal: 19.223297119140625,
        borderRadius: 6
    },
    _t: {
        flexShrink: 0,
        alignItems: "center",
        justifyContent: "center",
        rowGap: 0
    },
    __t: {
        flexShrink: 0,
        textAlign: "center",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Roboto",
        fontSize: 18.349510192871094,
        fontWeight: "400",
        letterSpacing: 0,
        lineHeight: 20.970869064331055
    },
    y: {
        position: "absolute",
        flexShrink: 0,
        height: 40,
        left: 176,
        width: 30,
        backgroundColor: "rgba(255, 255, 255, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        columnGap: 0,
        paddingVertical: 0,
        paddingHorizontal: 19.223297119140625,
        borderRadius: 6
    },
    _y: {
        flexShrink: 0,
        alignItems: "center",
        justifyContent: "center",
        rowGap: 0
    },
    __y: {
        flexShrink: 0,
        textAlign: "center",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Roboto",
        fontSize: 18.349510192871094,
        fontWeight: "400",
        letterSpacing: 0,
        lineHeight: 20.970869064331055
    },
    u: {
        position: "absolute",
        flexShrink: 0,
        height: 40,
        left: 211,
        width: 30,
        backgroundColor: "rgba(255, 255, 255, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        columnGap: 0,
        paddingVertical: 0,
        paddingHorizontal: 19.223297119140625,
        borderRadius: 6
    },
    _u: {
        flexShrink: 0,
        alignItems: "center",
        justifyContent: "center",
        rowGap: 0
    },
    __u: {
        flexShrink: 0,
        textAlign: "center",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Roboto",
        fontSize: 18.349510192871094,
        fontWeight: "400",
        letterSpacing: 0,
        lineHeight: 20.970869064331055
    },
    i: {
        position: "absolute",
        flexShrink: 0,
        height: 40,
        left: 246,
        width: 30,
        backgroundColor: "rgba(255, 255, 255, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        columnGap: 0,
        paddingVertical: 0,
        paddingHorizontal: 19.223297119140625,
        borderRadius: 6
    },
    _i: {
        flexShrink: 0,
        alignItems: "center",
        justifyContent: "center",
        rowGap: 0
    },
    __i: {
        flexShrink: 0,
        textAlign: "center",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Roboto",
        fontSize: 18.349510192871094,
        fontWeight: "400",
        letterSpacing: 0,
        lineHeight: 20.970869064331055
    },
    o: {
        position: "absolute",
        flexShrink: 0,
        height: 40,
        left: 281,
        width: 30,
        backgroundColor: "rgba(255, 255, 255, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        columnGap: 0,
        paddingVertical: 0,
        paddingHorizontal: 19.223297119140625,
        borderRadius: 6
    },
    _o: {
        flexShrink: 0,
        alignItems: "center",
        justifyContent: "center",
        rowGap: 0
    },
    __o: {
        flexShrink: 0,
        textAlign: "center",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Roboto",
        fontSize: 18.349510192871094,
        fontWeight: "400",
        letterSpacing: 0,
        lineHeight: 20.970869064331055
    },
    p: {
        position: "absolute",
        flexShrink: 0,
        height: 40,
        left: 316,
        width: 30,
        backgroundColor: "rgba(255, 255, 255, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        columnGap: 0,
        paddingVertical: 0,
        paddingHorizontal: 19.223297119140625,
        borderRadius: 6
    },
    _p: {
        flexShrink: 0,
        alignItems: "center",
        justifyContent: "center",
        rowGap: 0
    },
    __p: {
        flexShrink: 0,
        textAlign: "center",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Roboto",
        fontSize: 18.349510192871094,
        fontWeight: "400",
        letterSpacing: 0,
        lineHeight: 20.970869064331055
    },
    secondrow: {
        flexShrink: 0,
        height: 40,
        width: 309
    },
    a: {
        position: "absolute",
        flexShrink: 0,
        top: 0.3204307556152344,
        height: 40,
        left: -0.3496074676513672,
        width: 30,
        backgroundColor: "rgba(255, 255, 255, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        columnGap: 0,
        paddingVertical: 0,
        paddingHorizontal: 19.223297119140625,
        borderRadius: 6
    },
    _a: {
        flexShrink: 0,
        alignItems: "center",
        justifyContent: "center",
        rowGap: 0
    },
    __a: {
        flexShrink: 0,
        textAlign: "center",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Roboto",
        fontSize: 18.349510192871094,
        fontWeight: "400",
        letterSpacing: 0,
        lineHeight: 20.970869064331055
    },
    s: {
        position: "absolute",
        flexShrink: 0,
        top: 0.3204307556152344,
        height: 40,
        left: 34.65039253234863,
        width: 30,
        backgroundColor: "rgba(255, 255, 255, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        columnGap: 0,
        paddingVertical: 0,
        paddingHorizontal: 19.223297119140625,
        borderRadius: 6
    },
    _s: {
        flexShrink: 0,
        alignItems: "center",
        justifyContent: "center",
        rowGap: 0
    },
    __s: {
        flexShrink: 0,
        textAlign: "center",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Roboto",
        fontSize: 18.349510192871094,
        fontWeight: "400",
        letterSpacing: 0,
        lineHeight: 20.970869064331055
    },
    d: {
        position: "absolute",
        flexShrink: 0,
        top: 0.3204307556152344,
        height: 40,
        left: 69.65039253234863,
        width: 30,
        backgroundColor: "rgba(255, 255, 255, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        columnGap: 0,
        paddingVertical: 0,
        paddingHorizontal: 19.223297119140625,
        borderRadius: 6
    },
    _d: {
        flexShrink: 0,
        alignItems: "center",
        justifyContent: "center",
        rowGap: 0
    },
    __d: {
        flexShrink: 0,
        textAlign: "center",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Roboto",
        fontSize: 18.349510192871094,
        fontWeight: "400",
        letterSpacing: 0,
        lineHeight: 20.970869064331055
    },
    f: {
        position: "absolute",
        flexShrink: 0,
        top: 0.3204307556152344,
        height: 40,
        left: 104.65039253234863,
        width: 30,
        backgroundColor: "rgba(255, 255, 255, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        columnGap: 0,
        paddingVertical: 0,
        paddingHorizontal: 19.223297119140625,
        borderRadius: 6
    },
    _f: {
        flexShrink: 0,
        alignItems: "center",
        justifyContent: "center",
        rowGap: 0
    },
    __f: {
        flexShrink: 0,
        textAlign: "center",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Roboto",
        fontSize: 18.349510192871094,
        fontWeight: "400",
        letterSpacing: 0,
        lineHeight: 20.970869064331055
    },
    g: {
        position: "absolute",
        flexShrink: 0,
        top: 0.3204307556152344,
        height: 40,
        left: 139.65039253234863,
        width: 30,
        backgroundColor: "rgba(255, 255, 255, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        columnGap: 0,
        paddingVertical: 0,
        paddingHorizontal: 19.223297119140625,
        borderRadius: 6
    },
    _g: {
        flexShrink: 0,
        alignItems: "center",
        justifyContent: "center",
        rowGap: 0
    },
    __g: {
        flexShrink: 0,
        textAlign: "center",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Roboto",
        fontSize: 18.349510192871094,
        fontWeight: "400",
        letterSpacing: 0,
        lineHeight: 20.970869064331055
    },
    h: {
        position: "absolute",
        flexShrink: 0,
        top: 0.3204307556152344,
        height: 40,
        left: 174.65039253234863,
        width: 30,
        backgroundColor: "rgba(255, 255, 255, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        columnGap: 0,
        paddingVertical: 0,
        paddingHorizontal: 19.223297119140625,
        borderRadius: 6
    },
    _h: {
        flexShrink: 0,
        alignItems: "center",
        justifyContent: "center",
        rowGap: 0
    },
    __h: {
        flexShrink: 0,
        textAlign: "center",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Roboto",
        fontSize: 18.349510192871094,
        fontWeight: "400",
        letterSpacing: 0,
        lineHeight: 20.970869064331055
    },
    j: {
        position: "absolute",
        flexShrink: 0,
        top: 0.3204307556152344,
        height: 40,
        left: 209.65039253234863,
        width: 30,
        backgroundColor: "rgba(255, 255, 255, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        columnGap: 0,
        paddingVertical: 0,
        paddingHorizontal: 19.223297119140625,
        borderRadius: 6
    },
    _j: {
        flexShrink: 0,
        alignItems: "center",
        justifyContent: "center",
        rowGap: 0
    },
    __j: {
        flexShrink: 0,
        textAlign: "center",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Roboto",
        fontSize: 18.349510192871094,
        fontWeight: "400",
        letterSpacing: 0,
        lineHeight: 20.970869064331055
    },
    k: {
        position: "absolute",
        flexShrink: 0,
        top: 0.3204307556152344,
        height: 40,
        left: 244.65039253234863,
        width: 30,
        backgroundColor: "rgba(255, 255, 255, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        columnGap: 0,
        paddingVertical: 0,
        paddingHorizontal: 19.223297119140625,
        borderRadius: 6
    },
    _k: {
        flexShrink: 0,
        alignItems: "center",
        justifyContent: "center",
        rowGap: 0
    },
    __k: {
        flexShrink: 0,
        textAlign: "center",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Roboto",
        fontSize: 18.349510192871094,
        fontWeight: "400",
        letterSpacing: 0,
        lineHeight: 20.970869064331055
    },
    l: {
        position: "absolute",
        flexShrink: 0,
        top: 0.3204307556152344,
        height: 40,
        left: 279.65039253234863,
        width: 30,
        backgroundColor: "rgba(255, 255, 255, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        columnGap: 0,
        paddingVertical: 0,
        paddingHorizontal: 19.223297119140625,
        borderRadius: 6
    },
    _l: {
        flexShrink: 0,
        alignItems: "center",
        justifyContent: "center",
        rowGap: 0
    },
    __l: {
        flexShrink: 0,
        textAlign: "center",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Roboto",
        fontSize: 18.349510192871094,
        fontWeight: "400",
        letterSpacing: 0,
        lineHeight: 20.970869064331055
    },
    thirdrow: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 5.242717266082764
    },
    leftshift: {
        flexShrink: 0,
        height: 40,
        width: 48,
        backgroundColor: "rgba(255, 255, 255, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        columnGap: 0,
        paddingVertical: 0,
        paddingHorizontal: 19.223297119140625,
        borderRadius: 6
    },
    shiftkey: {
        flexShrink: 0,
        height: 21,
        width: 21,
        alignItems: "flex-start",
        rowGap: 0
    },
    ___icon: {
        position: "absolute",
        flexShrink: 0,
        top: 3,
        right: 3,
        bottom: 3,
        left: 3,
        overflow: "visible"
    },
    _thirdrow: {
        flexShrink: 0,
        height: 40,
        width: 239
    },
    z: {
        position: "absolute",
        flexShrink: 0,
        top: -0.000006250755177461542,
        height: 40,
        left: -0.30096435546875,
        width: 30,
        backgroundColor: "rgba(255, 255, 255, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        columnGap: 0,
        paddingVertical: 0,
        paddingHorizontal: 19.223297119140625,
        borderRadius: 6
    },
    _z: {
        flexShrink: 0,
        alignItems: "center",
        justifyContent: "center",
        rowGap: 0
    },
    __z: {
        flexShrink: 0,
        textAlign: "center",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Roboto",
        fontSize: 18.349510192871094,
        fontWeight: "400",
        letterSpacing: 0,
        lineHeight: 20.970869064331055
    },
    x: {
        position: "absolute",
        flexShrink: 0,
        top: -0.000006250755177461542,
        height: 40,
        left: 34.69903564453125,
        width: 30,
        backgroundColor: "rgba(255, 255, 255, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        columnGap: 0,
        paddingVertical: 0,
        paddingHorizontal: 19.223297119140625,
        borderRadius: 6
    },
    _x: {
        flexShrink: 0,
        alignItems: "center",
        justifyContent: "center",
        rowGap: 0
    },
    __x: {
        flexShrink: 0,
        textAlign: "center",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Roboto",
        fontSize: 18.349510192871094,
        fontWeight: "400",
        letterSpacing: 0,
        lineHeight: 20.970869064331055
    },
    c: {
        position: "absolute",
        flexShrink: 0,
        top: -0.000006250755177461542,
        height: 40,
        left: 69.69903564453125,
        width: 30,
        backgroundColor: "rgba(255, 255, 255, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        columnGap: 0,
        paddingVertical: 0,
        paddingHorizontal: 19.223297119140625,
        borderRadius: 6
    },
    _c: {
        flexShrink: 0,
        alignItems: "center",
        justifyContent: "center",
        rowGap: 0
    },
    __c: {
        flexShrink: 0,
        textAlign: "center",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Roboto",
        fontSize: 18.349510192871094,
        fontWeight: "400",
        letterSpacing: 0,
        lineHeight: 20.970869064331055
    },
    v: {
        position: "absolute",
        flexShrink: 0,
        top: -0.000006250755177461542,
        height: 40,
        left: 104.69903564453125,
        width: 30,
        backgroundColor: "rgba(255, 255, 255, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        columnGap: 0,
        paddingVertical: 0,
        paddingHorizontal: 19.223297119140625,
        borderRadius: 6
    },
    _v: {
        flexShrink: 0,
        alignItems: "center",
        justifyContent: "center",
        rowGap: 0
    },
    __v: {
        flexShrink: 0,
        textAlign: "center",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Roboto",
        fontSize: 18.349510192871094,
        fontWeight: "400",
        letterSpacing: 0,
        lineHeight: 20.970869064331055
    },
    b: {
        position: "absolute",
        flexShrink: 0,
        top: -0.000006250755177461542,
        height: 40,
        left: 139.69903564453125,
        width: 30,
        backgroundColor: "rgba(255, 255, 255, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        columnGap: 0,
        paddingVertical: 0,
        paddingHorizontal: 19.223297119140625,
        borderRadius: 6
    },
    _b: {
        flexShrink: 0,
        alignItems: "center",
        justifyContent: "center",
        rowGap: 0
    },
    __b: {
        flexShrink: 0,
        textAlign: "center",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Roboto",
        fontSize: 18.349510192871094,
        fontWeight: "400",
        letterSpacing: 0,
        lineHeight: 20.970869064331055
    },
    n: {
        position: "absolute",
        flexShrink: 0,
        top: -0.000006250755177461542,
        height: 40,
        left: 174.69903564453125,
        width: 30,
        backgroundColor: "rgba(255, 255, 255, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        columnGap: 0,
        paddingVertical: 0,
        paddingHorizontal: 19.223297119140625,
        borderRadius: 6
    },
    _n: {
        flexShrink: 0,
        alignItems: "center",
        justifyContent: "center",
        rowGap: 0
    },
    __n: {
        flexShrink: 0,
        textAlign: "center",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Roboto",
        fontSize: 18.349510192871094,
        fontWeight: "400",
        letterSpacing: 0,
        lineHeight: 20.970869064331055
    },
    m: {
        position: "absolute",
        flexShrink: 0,
        top: -0.000006250755177461542,
        height: 40,
        left: 209.69903564453125,
        width: 30,
        backgroundColor: "rgba(255, 255, 255, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        columnGap: 0,
        paddingVertical: 0,
        paddingHorizontal: 19.223297119140625,
        borderRadius: 6
    },
    _m: {
        flexShrink: 0,
        alignItems: "center",
        justifyContent: "center",
        rowGap: 0
    },
    __m: {
        flexShrink: 0,
        textAlign: "center",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Roboto",
        fontSize: 18.349510192871094,
        fontWeight: "400",
        letterSpacing: 0,
        lineHeight: 20.970869064331055
    },
    backspace: {
        flexShrink: 0,
        height: 40,
        width: 48,
        backgroundColor: "rgba(255, 255, 255, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        columnGap: 0,
        paddingVertical: 0,
        paddingHorizontal: 19.223297119140625,
        borderRadius: 6
    },
    _backspace: {
        flexShrink: 0,
        height: 21,
        width: 21,
        alignItems: "flex-start",
        rowGap: 0
    },
    _____________vector: {
        position: "absolute",
        flexShrink: 0,
        top: 3,
        right: 0,
        bottom: 3,
        left: 0,
        overflow: "visible"
    },
    bottomrow: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 5.242717266082764
    },
    _123: {
        flexShrink: 0,
        height: 40,
        width: 48,
        backgroundColor: "rgba(255, 255, 255, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        columnGap: 0,
        paddingVertical: 0,
        paddingHorizontal: 19.223297119140625,
        borderRadius: 6
    },
    __123: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Roboto",
        fontSize: 12.233007431030273,
        fontWeight: "500",
        letterSpacing: 0,
        lineHeight: 17.475723266601562
    },
    emoji: {
        flexShrink: 0,
        height: 40,
        width: 30,
        paddingTop: 12.233007431030273,
        paddingBottom: 20.970869064331055,
        backgroundColor: "rgba(255, 255, 255, 1)",
        alignItems: "center",
        justifyContent: "space-between",
        rowGap: 0,
        paddingHorizontal: 19.223297119140625,
        borderRadius: 6
    },
    myVar: {
        flexShrink: 0,
        width: 10,
        textAlign: "center",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Roboto",
        fontSize: 18.349510192871094,
        fontWeight: "400",
        letterSpacing: 0
    },
    _emoji: {
        flexShrink: 0,
        height: 10,
        width: 10
    },
    ___q: {
        flexShrink: 0,
        height: 40,
        width: 30,
        backgroundColor: "rgba(255, 255, 255, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        columnGap: 0,
        paddingVertical: 0,
        paddingHorizontal: 19.223297119140625,
        borderRadius: 6
    },
    iconsLanguage_24px: {
        flexShrink: 0,
        height: 21,
        width: 21,
        alignItems: "flex-start",
        rowGap: 0
    },
    ____icon: {
        position: "absolute",
        flexShrink: 0,
        top: 2,
        right: 2,
        bottom: 2,
        left: 2,
        overflow: "visible"
    },
    lightcolorkeyborder03: {
        flexShrink: 0,
        width: 135,
        height: 40,
        overflow: "visible"
    },
    period: {
        flexShrink: 0,
        height: 40,
        width: 30,
        backgroundColor: "rgba(255, 255, 255, 1)",
        alignItems: "center",
        justifyContent: "space-between",
        rowGap: 0,
        paddingVertical: 0,
        paddingHorizontal: 19.223297119140625,
        borderRadius: 6
    },
    _myVar: {
        flexShrink: 0,
        width: 10,
        textAlign: "center",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Roboto",
        fontSize: 18.349510192871094,
        fontWeight: "400",
        letterSpacing: 0
    },
    enterkey: {
        flexShrink: 0,
        height: 40,
        width: 48,
        backgroundColor: "rgba(8, 86, 219, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        columnGap: 0,
        paddingVertical: 0,
        paddingHorizontal: 19.223297119140625,
        borderRadius: 6
    },
    iconsKeyboard_return_24px: {
        alignSelf: "center",
        flexShrink: 0,
        height: 21,
        width: 21,
        alignItems: "flex-start",
        rowGap: 0
    },
    _____icon: {
        position: "absolute",
        flexShrink: 0,
        top: 5,
        right: 3,
        bottom: 5,
        left: 3,
        overflow: "visible"
    },
    navbar: {
        position: "absolute",
        flexShrink: 0,
        height: 38,
        left: 0,
        right: 0,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 20.970869064331055,
        padding: 6.990289688110352
    },
    _iconleft: {
        flexShrink: 0,
        height: 23,
        width: 23,
        backgroundColor: "rgba(255, 255, 255, 1)",
        alignItems: "flex-start",
        rowGap: 0,
        borderRadius: 100
    },
    iconsNavigate_next: {
        position: "absolute",
        flexShrink: 0,
        top: 1,
        bottom: 1,
        left: 1,
        right: 1,
        transform: [
            {
                rotateZ: "-180.00deg"
            }
        ],
        alignItems: "flex-start",
        rowGap: 0
    },
    ______icon: {
        position: "absolute",
        flexShrink: 0,
        top: 5,
        right: 7,
        bottom: 5,
        left: 7,
        overflow: "visible"
    },
    iconrow: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 45.43688201904297
    },
    iconscentre: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 34.951446533203125
    },
    iconsGIF_24px: {
        flexShrink: 0,
        height: 21,
        width: 21,
        alignItems: "flex-start",
        rowGap: 0
    },
    _______icon: {
        position: "absolute",
        flexShrink: 0,
        top: 6,
        right: 0,
        bottom: 6,
        left: 0,
        overflow: "visible"
    },
    iconsSettings_filled_24px: {
        flexShrink: 0,
        height: 21,
        width: 21,
        alignItems: "flex-start",
        rowGap: 0
    },
    ________icon: {
        position: "absolute",
        flexShrink: 0,
        top: 2,
        right: 2,
        bottom: 2,
        left: 2,
        overflow: "visible"
    },
    iconsTranslate_24px: {
        flexShrink: 0,
        height: 21,
        width: 21,
        alignItems: "flex-start",
        rowGap: 0
    },
    _________icon: {
        position: "absolute",
        flexShrink: 0,
        top: 2,
        right: 2,
        bottom: 2,
        left: 2,
        overflow: "visible"
    },
    iconsSticker_24px: {
        flexShrink: 0,
        height: 21,
        width: 21,
        alignItems: "flex-start",
        rowGap: 0
    },
    __________icon: {
        position: "absolute",
        flexShrink: 0,
        top: 2,
        right: 2,
        bottom: 2,
        left: 2,
        overflow: "visible"
    },
    iconsright: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 26.213586807250977
    },
    iconsMore_24px: {
        flexShrink: 0,
        height: 21,
        width: 21,
        alignItems: "flex-start",
        rowGap: 0
    },
    ___________icon: {
        position: "absolute",
        flexShrink: 0,
        top: 9,
        right: 3,
        bottom: 9,
        left: 3,
        overflow: "visible"
    },
    iconsMic_24px: {
        flexShrink: 0,
        height: 21,
        width: 21,
        alignItems: "flex-start",
        rowGap: 0
    },
    ____________icon: {
        position: "absolute",
        flexShrink: 0,
        top: 2,
        right: 4,
        bottom: 2,
        left: 4,
        overflow: "visible"
    },
    dividerline: {
        position: "absolute",
        flexShrink: 0,
        top: 0,
        right: 90,
        bottom: 0,
        left: 211,
        backgroundColor: "rgba(197, 203, 214, 1)"
    }
})