import React from 'react';
import {StyleSheet, View} from 'react-native';
import Logomark, {LogoSize} from "../Components/Logomark";

export default function SplashScreen() {
    return (
        <View style={[styles.splashScreen, styles.MainPage]}>
            <Logomark size={LogoSize.Medium} />
        </View>
    )
}

const styles = StyleSheet.create({
    splashScreen: {
        flexShrink: 0,
        height: 800,
        width: 360,
        backgroundColor: "rgba(255, 255, 255, 1)",
        alignItems: "center",
        justifyContent: "center",
        rowGap: 0
    },
    MainPage: {
        display: 'flex',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'flex-start',
        overflow: 'hidden',
        flexDirection: 'column',
        height: '100%',
        width: '100%'
    }
})
