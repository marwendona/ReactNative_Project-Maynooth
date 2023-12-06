import {StyleSheet, View} from "react-native";
import React from "react";
import BaseLabel, {BaseInputLabelColor} from "./BaseLabel";
import InputField, {BaseInputFieldSize, BaseInputFieldState} from "./InputField";

export interface FormInputGroupProps {
    labelPrimary: string
    labelRight?: string
    labelSecondary?: string
    value?: string;
    iconLeftLabel: string;
    iconRightLabel: string;
    iconLeftField: string;
    iconRightField: string;
    color: BaseInputLabelColor;
}

const FormInputGroup: React.FC<FormInputGroupProps> = ({ labelPrimary, iconRightLabel, labelSecondary,iconLeftField, iconRightField, value, iconLeftLabel, iconRight, color }) => {
    return (
        <View style={styles.formInputgroup}>
            <BaseLabel labelPrimary={labelPrimary} iconLeft={iconLeftLabel} color={color} iconRight={iconRight} labelSecondary={labelSecondary} labelRight={iconRightLabel}/>
            <InputField size={BaseInputFieldSize.Medium} state={BaseInputFieldState.Default} iconLeft={iconLeftField} iconRight={iconRightField}/>
        </View>
    )
}

export default FormInputGroup

const styles = StyleSheet.create({
    formInputgroup: {
        flexShrink: 0,
        width: 312,
        alignItems: "flex-start",
        rowGap: 4
    },
    labeltop: {
        alignSelf: "stretch",
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        columnGap: 12
    },
    left: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        columnGap: 4
    },
    iconleft: {
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
        top: 1,
        right: 1,
        bottom: 1,
        left: 1,
        overflow: "visible"
    },
    label: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16
    },
    labelsecondary: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(76, 89, 112, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "400",
        letterSpacing: 0,
        lineHeight: 16
    },
    right: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        columnGap: 4
    },
    labelright: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16
    },
    iconright: {
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
        top: 1,
        right: 1,
        bottom: 1,
        left: 1,
        overflow: "visible"
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
    _iconleft: {
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
    }
})
