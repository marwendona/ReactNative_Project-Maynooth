import React from "react";
import {StyleSheet, View} from "react-native";

const Backdrop: React.FC = () => {
    return (
        <View style={styles.backdrop}/>
    )
}

export default Backdrop

const styles = StyleSheet.create({
    backdrop: {
        flexShrink: 0,
        height: 800,
        width: 360,
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        alignItems: "flex-start",
        rowGap: 0
    }
})
