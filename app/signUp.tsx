import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LogoMark, { LogoSize } from '../Components/Logomark';
import FormInputGroup from '../Components/FormInputGroup';
import BaseLabel, { BaseInputLabelColor } from '../Components/BaseLabel';
import ButtonRegular, { ButtonRegularSize, ButtonRegularColor } from '../Components/ButtonRegular';
import {router} from "expo-router";
import Divider from "../Components/Divider";

const SignUp = () => {
    return (
        <View style={styles.signUp}>
            <LogoMark size={LogoSize.Small} />
            <View style={styles.buttonsocialwrapper}>
                <ButtonRegular
                    size={ButtonRegularSize.Large}
                    iconLeft="google"
                    text="Continue with Google"
                />
                <ButtonRegular
                    size={ButtonRegularSize.Large}
                    iconLeft="facebook"
                    text="Continue with Facebook"
                />
            </View>
            <View style={styles.divider}>
                <Divider text={"or"} type={"Horizontal"} />
            </View>
            <View style={styles.formsignup}>
                <FormInputGroup
                    color={BaseInputLabelColor.Dark}
                    labelPrimary="Email"
                    iconLeftInner="mail"
                    value="your@email.com"
                />
                <FormInputGroup
                    color={BaseInputLabelColor.Dark}
                    labelPrimary="Password"
                    iconLeftInner="lock"
                    value="Your password"
                />
                <View style={styles.buttonsignupwrapper}>
                    <View style={styles.buttonsignup}>
                        <ButtonRegular
                            size={ButtonRegularSize.Large}
                            color={ButtonRegularColor.Dark}
                            text="Create account"/>
                    </View>
                </View>
            </View>
            <View style={styles.ctasignupwrapper}>
                <Text style={styles.alreadyhaveanaccount}>Already have an account?</Text>
                <TouchableOpacity onPress={()=>{router.push({pathname: "login"})}}>
                    <Text style={styles.linksignup}>Log in</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default SignUp;

const styles = StyleSheet.create({
    signUp: {
        flexShrink: 0,
        height: 800,
        width: 360,
        backgroundColor: "rgba(255, 255, 255, 1)",
        alignItems: "center",
        justifyContent: "center",
        rowGap: 24,
        paddingVertical: 88,
        paddingHorizontal: 0
    },
    buttonsocialwrapper: {
        alignSelf: "stretch",
        flexShrink: 0,
        alignItems: "flex-start",
        rowGap: 24,
        paddingVertical: 0,
        paddingHorizontal: 24
    },
    divider: {
        alignSelf: "stretch",
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 0,
        paddingVertical: 0,
        paddingHorizontal: 0
    },
    formsignup: {
        alignSelf: "stretch",
        flexShrink: 0,
        alignItems: "flex-start",
        rowGap: 24,
        paddingVertical: 0,
        paddingHorizontal: 24
    },
    buttonsignupwrapper: {
        alignSelf: "stretch",
        flexShrink: 0,
        paddingBottom: 0,
        alignItems: "flex-start",
        rowGap: 0,
        paddingHorizontal: 0
    },
    buttonsignup: {
        alignSelf: "stretch",
        flexShrink: 0,
        backgroundColor: "rgba(9, 17, 31, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 4,
        padding: 10,
        borderRadius: 12
    },
    ctasignupwrapper: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "center",
        columnGap: 4
    },
    alreadyhaveanaccount: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 14,
        fontWeight: "400",
        letterSpacing: 0,
        lineHeight: 20
    },
    linksignup: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 14,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 20
    }
});
