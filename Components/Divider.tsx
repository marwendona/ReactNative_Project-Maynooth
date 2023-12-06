import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Svg, Line} from 'react-native-svg';

interface DividerProps {
    text: string
    type: 'Vertical' | 'Horizontal'

}

const Divider: React.FC<DividerProps> = ({text, type}) => {
    const styles = type ===  'Horizontal' ? stylesHorizontal : stylesVertical
    return (
        <View style={styles.divider}>
            <View style={styles.linewrapper}>
                { type ===  'Horizontal' ? <Svg style={styles.line} width="161" height="1" viewBox="0 0 161 1" fill="none">
                    <Line y1="0.5" x2="160.5" y2="0.5" stroke="#E1E5EB"/>
                </Svg>:<Svg style={styles.line} width="1" height="24" viewBox="0 0 1 24" fill="none" >
            <Line x1="0.5" y1="2.18557e-08" x2="0.499999" y2="24" stroke="#E1E5EB"/>
        </Svg>
            }
            </View>
            <View style={styles.textwrapper}>
                <Text style={styles.text}>
                    {`Text`}
                </Text>
            </View>
            <View style={styles._linewrapper}>
                {type ===  'Horizontal' ? <Svg style={styles._line} width="161" height="1" viewBox="0 0 161 1" fill="none">
                    <Line x1="0.5" y1="0.5" x2="161" y2="0.5" stroke="#E1E5EB"/>
                </Svg> : <Svg style={styles.line} width="1" height="24" viewBox="0 0 1 24" fill="none" >
                    <Line x1="0.5" y1="2.18557e-08" x2="0.499999" y2="24" stroke="#E1E5EB"/>
                </Svg>
                }
            </View>
        </View>
    )
}
export default Divider
const stylesVertical = StyleSheet.create({
    divider: {
        flexShrink: 0,
        height: 76,
        alignItems: "center",
        justifyContent: "center",
        rowGap: 0
    },
    linewrapper: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        width: 24,
        alignItems: "flex-start",
        rowGap: 0,
        paddingVertical: 0,
        paddingHorizontal: 12
    },
    line: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        width: 24,
        overflow: "visible"
    },
    textwrapper: {
        flexShrink: 0,
        paddingTop: 4,
        paddingBottom: 8,
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
    _linewrapper: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        width: 24,
        alignItems: "flex-start",
        rowGap: 0,
        paddingVertical: 0,
        paddingHorizontal: 12
    },
    _line: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        width: 24,
        overflow: "visible"
    }
})
const stylesHorizontal = StyleSheet.create({
    divider: {
        flexShrink: 0,
        width: 360,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 0
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
        overflow: "visible",
        width: "100%"
    },
    textwrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexShrink: 0,
        paddingTop: 2,
        paddingBottom: 6,
        flexDirection: "row",
        columnGap: 0,
        paddingHorizontal: 8
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
        overflow: "visible",
        width: "100%"
    }
})
