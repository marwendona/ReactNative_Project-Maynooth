import React from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { Svg, Path, Line, Circle } from 'react-native-svg';
import Icon from '../Components/Icon';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function SearchIndex() {
    const scaleValue = new Animated.Value(1);

    const handleIconPress = () => {
        // Animation logic
        Animated.sequence([
            Animated.timing(scaleValue, { toValue: 1.2, duration: 100, useNativeDriver: true }),
            Animated.timing(scaleValue, { toValue: 1, duration: 100, useNativeDriver: true }),
        ]).start();
    };

    return (
        <View style={styles.searchIndex}>
            <View style={styles.searchhistory}>
                <View style={styles.title}>
                    <Text style={styles._searchhistory}>
                        {`Search history`}
                    </Text>
                    <View style={styles.buttonviewmore}>
                        <View style={styles.textwrapper}>
                            <TouchableOpacity onPress={handleIconPress}>
                                <Text style={styles.text}>
                                    {`Clear all`}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.items}>
                    <View style={styles.item}>
                        <View style={styles._text}>
                            <Text style={styles._title}>
                                {`Sofa`}
                            </Text>
                        </View>
                        <TouchableOpacity onPress={handleIconPress}>
                            <Icon iconName={'close'} size={'Small'} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles._item}>
                        <View style={styles.__text}>
                            <Text style={styles.__title}>
                                {`Bed`}
                            </Text>
                        </View>
                        <TouchableOpacity onPress={handleIconPress}>
                            <Icon iconName={'close'} size={'Small'} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.__item}>
                        <View style={styles.___text}>
                            <Text style={styles.___title}>
                                {`Pillow`}
                            </Text>
                        </View>
                        <TouchableOpacity onPress={handleIconPress}>
                            <Icon iconName={'close'} size={'Small'} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.___item}>
                        <View style={styles.____text}>
                            <Text style={styles.____title}>
                                {`Table`}
                            </Text>
                        </View>
                        <TouchableOpacity onPress={handleIconPress}>
                            <Icon iconName={'close'} size={'Small'} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.____item}>
                        <View style={styles._____text}>
                            <Text style={styles._____title}>
                                {`Lamp`}
                            </Text>
                        </View>
                        <TouchableOpacity onPress={handleIconPress}>
                            <Icon iconName={'close'} size={'Small'} />
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity onPress={handleIconPress}>
                    <View style={styles._buttonviewmore}>
                        <View style={styles._textwrapper}>
                            <Text style={styles.______text}>
                                {`View more  `}
                            </Text>
                        </View>
                        <Icon iconName={'expand_more'} size={'Small'} />
                    </View>
                </TouchableOpacity>
            </View>
            {/* Vigma RN:: can be replaced with <Divider type={"horizontal"} /> */}
            <View style={styles.divider}>
                <View style={styles.linewrapper}>
                    <Svg style={styles.line} width="156" height="1" viewBox="0 0 156 1" fill="none" >
                        <Line y1="0.5" x2="156" y2="0.5" stroke="#E1E5EB" />
                    </Svg>

                </View>
                <View style={styles._linewrapper}>
                    <Svg style={styles._line} width="156" height="1" viewBox="0 0 156 1" fill="none" >
                        <Line y1="0.5" x2="156" y2="0.5" stroke="#E1E5EB" />
                    </Svg>
                </View>
            </View>
            <View style={styles.searchsugestions}>
                <View style={styles.______title}>
                    <Text style={styles._searchsugestions}>
                        {`Search sugestions`}
                    </Text>
                </View>
                <View style={styles._items}>
                    <View style={styles.row}>
                        {/* Vigma RN:: can be replaced with <_____item  /> */}
                        <View style={styles._____item}>
                            <View style={styles.__textwrapper}>
                                <TouchableOpacity onPress={handleIconPress}>
                                    <Text style={styles._______text}>
                                        {`Knife`}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        {/* Vigma RN:: can be replaced with <______item  /> */}
                        <View style={styles.______item}>
                            <View style={styles.___textwrapper}>
                                <TouchableOpacity onPress={handleIconPress}>
                                    <Text style={styles.________text}>
                                        {`Shoe racks`}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        {/* Vigma RN:: can be replaced with <_______item  /> */}
                        <View style={styles._______item}>
                            <View style={styles.____textwrapper}>
                                <TouchableOpacity onPress={handleIconPress}>
                                    <Text style={styles._________text}>
                                        {`Bathroom mirror`}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        {/* Vigma RN:: can be replaced with <________item  /> */}
                        <View style={styles.________item}>
                            <View style={styles._____textwrapper}>
                                <TouchableOpacity onPress={handleIconPress}>
                                    <Text style={styles.__________text}>
                                        {`Bed`}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles._row}>
                        {/* Vigma RN:: can be replaced with <_________item  /> */}
                        <View style={styles._________item}>
                            <View style={styles.______textwrapper}>
                                <TouchableOpacity onPress={handleIconPress}>
                                    <Text style={styles.___________text}>
                                        {`Table lamp`}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        {/* Vigma RN:: can be replaced with <__________item  /> */}
                        <View style={styles.__________item}>
                            <View style={styles._______textwrapper}>
                                <TouchableOpacity onPress={handleIconPress}>
                                    <Text style={styles.____________text}>
                                        {`Pillow`}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        {/* Vigma RN:: can be replaced with <___________item  /> */}
                        <View style={styles.___________item}>
                            <View style={styles.________textwrapper}>
                                <TouchableOpacity onPress={handleIconPress}>
                                    <Text style={styles._____________text}>
                                        {`Bookshelf`}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        {/* Vigma RN:: can be replaced with <____________item  /> */}
                        <View style={styles.____________item}>
                            <View style={styles._________textwrapper}>
                                <TouchableOpacity onPress={handleIconPress}>
                                    <Text style={styles.______________text}>
                                        {`Towel`}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.__row}>
                        {/* Vigma RN:: can be replaced with <_____________item  /> */}
                        <View style={styles._____________item}>
                            <View style={styles.__________textwrapper}>
                                <TouchableOpacity onPress={handleIconPress}>
                                    <Text style={styles._______________text}>
                                        {`Microwaves`}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        {/* Vigma RN:: can be replaced with <______________item  /> */}
                        <View style={styles.______________item}>
                            <View style={styles.___________textwrapper}>
                                <TouchableOpacity onPress={handleIconPress}>
                                    <Text style={styles.________________text}>
                                        {`Napkins`}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        {/* Vigma RN:: can be replaced with <_______________item  /> */}
                        <View style={styles._______________item}>
                            <View style={styles.____________textwrapper}>
                                <TouchableOpacity onPress={handleIconPress}>
                                    <Text style={styles._________________text}>
                                        {`Clocks`}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        {/* Vigma RN:: can be replaced with <________________item  /> */}
                        <View style={styles.________________item}>
                            <View style={styles._____________textwrapper}>
                                <TouchableOpacity onPress={handleIconPress}>
                                    <Text style={styles.__________________text}>
                                        {`Mirrors`}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    searchIndex: {
        flexShrink: 0,
        height: 800,
        width: 360,
        paddingTop: 0,
        paddingBottom: 64,
        backgroundColor: "rgba(255, 255, 255, 1)",
        alignItems: "flex-start",
        rowGap: 4,
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
        color: "rgba(145, 155, 173, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 14,
        fontWeight: "400",
        letterSpacing: 0,
        lineHeight: 20
    },
    searchhistory: {
        alignSelf: "stretch",
        flexShrink: 0,
        paddingTop: 0,
        paddingBottom: 4,
        alignItems: "center",
        rowGap: 12,
        paddingHorizontal: 0
    },
    title: {
        alignSelf: "stretch",
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "flex-end",
        columnGap: 12,
        paddingVertical: 0,
        paddingHorizontal: 24
    },
    _searchhistory: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 16,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 24
    },
    buttonviewmore: {
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
    items: {
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
    itemright: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        columnGap: 0
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
    _itemright: {
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
        right: 5,
        bottom: 5,
        left: 5,
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
    __itemright: {
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
        right: 5,
        bottom: 5,
        left: 5,
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
    ___itemright: {
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
        right: 5,
        bottom: 5,
        left: 5,
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
    _____text: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        alignItems: "flex-start",
        justifyContent: "center",
        rowGap: 0
    },
    _____title: {
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
        right: 5,
        bottom: 5,
        left: 5,
        overflow: "visible"
    },
    _buttonviewmore: {
        alignSelf: "stretch",
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
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
    ______text: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16
    },
    icon: {
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
        top: 6,
        right: 5,
        bottom: 6,
        left: 4,
        overflow: "visible"
    },
    divider: {
        alignSelf: "stretch",
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 0,
        paddingVertical: 0,
        paddingHorizontal: 24
    },
    linewrapper: {
        alignSelf: "stretch",
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        alignItems: "flex-start",
        rowGap: 0,
        paddingVertical: 12,
        paddingHorizontal: 0
    },
    line: {
        alignSelf: "stretch",
        flexShrink: 0,
        minHeight: 0.001,
        overflow: "visible"
    },
    _linewrapper: {
        alignSelf: "stretch",
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        alignItems: "flex-start",
        rowGap: 0,
        paddingVertical: 12,
        paddingHorizontal: 0
    },
    _line: {
        alignSelf: "stretch",
        flexShrink: 0,
        minHeight: 0.001,
        overflow: "visible"
    },
    searchsugestions: {
        flexShrink: 0,
        alignItems: "flex-start",
        rowGap: 12
    },
    ______title: {
        flexShrink: 0,
        width: 360,
        flexDirection: "row",
        alignItems: "center",
        columnGap: 12,
        paddingVertical: 0,
        paddingHorizontal: 24
    },
    _searchsugestions: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 16,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 24
    },
    _items: {
        alignSelf: "stretch",
        flexShrink: 0,
        alignItems: "flex-start",
        rowGap: 8,
        paddingVertical: 0,
        paddingHorizontal: 24
    },
    row: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 8
    },
    _____item: {
        flexShrink: 0,
        backgroundColor: "rgba(240, 242, 245, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 0,
        padding: 6,
        borderRadius: 8
    },
    __textwrapper: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 0,
        paddingVertical: 0,
        paddingHorizontal: 4
    },
    _______text: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16
    },
    ______item: {
        flexShrink: 0,
        backgroundColor: "rgba(240, 242, 245, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 0,
        padding: 6,
        borderRadius: 8
    },
    ___textwrapper: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 0,
        paddingVertical: 0,
        paddingHorizontal: 4
    },
    ________text: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16
    },
    _______item: {
        flexShrink: 0,
        backgroundColor: "rgba(240, 242, 245, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 0,
        padding: 6,
        borderRadius: 8
    },
    ____textwrapper: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 0,
        paddingVertical: 0,
        paddingHorizontal: 4
    },
    _________text: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16
    },
    ________item: {
        flexShrink: 0,
        backgroundColor: "rgba(240, 242, 245, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 0,
        padding: 6,
        borderRadius: 8
    },
    _____textwrapper: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 0,
        paddingVertical: 0,
        paddingHorizontal: 4
    },
    __________text: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16
    },
    _row: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 8
    },
    _________item: {
        flexShrink: 0,
        backgroundColor: "rgba(240, 242, 245, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 0,
        padding: 6,
        borderRadius: 8
    },
    ______textwrapper: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 0,
        paddingVertical: 0,
        paddingHorizontal: 4
    },
    ___________text: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16
    },
    __________item: {
        flexShrink: 0,
        backgroundColor: "rgba(240, 242, 245, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 0,
        padding: 6,
        borderRadius: 8
    },
    _______textwrapper: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 0,
        paddingVertical: 0,
        paddingHorizontal: 4
    },
    ____________text: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16
    },
    ___________item: {
        flexShrink: 0,
        backgroundColor: "rgba(240, 242, 245, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 0,
        padding: 6,
        borderRadius: 8
    },
    ________textwrapper: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 0,
        paddingVertical: 0,
        paddingHorizontal: 4
    },
    _____________text: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16
    },
    ____________item: {
        flexShrink: 0,
        backgroundColor: "rgba(240, 242, 245, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 0,
        padding: 6,
        borderRadius: 8
    },
    _________textwrapper: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 0,
        paddingVertical: 0,
        paddingHorizontal: 4
    },
    ______________text: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16
    },
    __row: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 8
    },
    _____________item: {
        flexShrink: 0,
        backgroundColor: "rgba(240, 242, 245, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 0,
        padding: 6,
        borderRadius: 8
    },
    __________textwrapper: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 0,
        paddingVertical: 0,
        paddingHorizontal: 4
    },
    _______________text: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16
    },
    ______________item: {
        flexShrink: 0,
        backgroundColor: "rgba(240, 242, 245, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 0,
        padding: 6,
        borderRadius: 8
    },
    ___________textwrapper: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 0,
        paddingVertical: 0,
        paddingHorizontal: 4
    },
    ________________text: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16
    },
    _______________item: {
        flexShrink: 0,
        backgroundColor: "rgba(240, 242, 245, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 0,
        padding: 6,
        borderRadius: 8
    },
    ____________textwrapper: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 0,
        paddingVertical: 0,
        paddingHorizontal: 4
    },
    _________________text: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16
    },
    ________________item: {
        flexShrink: 0,
        backgroundColor: "rgba(240, 242, 245, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 0,
        padding: 6,
        borderRadius: 8
    },
    _____________textwrapper: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 0,
        paddingVertical: 0,
        paddingHorizontal: 4
    },
    __________________text: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16
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
    _icon: {
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
    }
})
