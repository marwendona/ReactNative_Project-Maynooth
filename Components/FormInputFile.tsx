import {View, Text, StyleSheet} from 'react-native';
import Icon from "./Icon";
import React from "react";
export interface FormInputFileProps {
    label: string;
}

const FormInputFile: React.FC<FormInputFileProps> = ({label}) => {
    return (
        <View style={styles.formInputfile}>
            <View style={styles.icon}>
                <Icon iconName={'add_photo_alternate'} size={'Small'} />
            </View>
            <Text style={styles.text}>
                {label}
            </Text>
        </View>
    )
}

export default FormInputFile

const styles = StyleSheet.create({
    formInputfile: {
        flexShrink: 0,
        width: 312,
        alignItems: "center",
        rowGap: 4,
        paddingVertical: 16,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: "rgba(225, 229, 235, 1)",
        borderRadius: 12
    },
    icon: {
        flexShrink: 0,
        height: 28,
        width: 28,
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
        top: 3,
        right: 4,
        bottom: 4,
        left: 3,
        overflow: "visible"
    },
    text: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(76, 89, 112, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "400",
        letterSpacing: 0,
        lineHeight: 16
    }
})
