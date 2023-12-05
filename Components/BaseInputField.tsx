import {StyleSheet, View, Text} from 'react-native'
import React from 'react'
import Icon from "./Icon";

export interface BaseInputFieldProps {
    value?: string;
    size?: BaseInputFieldSize;
    state?: BaseInputFieldState;
}

export enum BaseInputFieldSize {
    Small = 'Small',
    Medium = 'Medium',
    Large = 'Large',
}

export enum BaseInputFieldState {
    Default = 'Default',
    FocusEmpty = 'Focus___Empty',
    FocusFilled = 'Focus___Filled',
    Filled = 'Filled',
    DisabledEmpty = 'Disabled___Empty',
    DisabledFilled = 'Disabled___Filled',
    ErrorEmpty = 'Error___Empty',
    ErrorFilled = 'Error___Filled',
    SuccessFilled = 'Success___Filled',
}

const BaseInputField = ({value, size, state}: BaseInputFieldProps) => {
    return (
        <View style={styles.inputfield}>
            <Icon iconName={'search'} />
            <View style={styles.inputvaluewrapper}>
                <Text style={styles.inputvalue}>
                    {value}
                </Text>
            </View>
            <Icon iconName={'close'} />
        </View>
    )
}

export default BaseInputField

const styles = StyleSheet.create({
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
    iconright: {
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
        top: 5,
        right: 5,
        bottom: 5,
        left: 5,
        overflow: "visible"
    }
})
