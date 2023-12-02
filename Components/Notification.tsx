import {StyleSheet, View} from 'react-native'
import React from 'react'
import BaseInputLabel, {BaseInputLabelColor} from "./BaseInputLabel";

export interface NotificationProps {
    subtitle?: string
    title?: string
    label?: string
    date?: string
    icon?: JSX.Element
}

const Notification = ({subtitle, title, label, date, icon}: NotificationProps) => {
    return (
        <View style={styles.notification}>
            <View style={styles.icon}>
                {icon}
            </View>
            <View style={styles.text}>
                <BaseInputLabel
                    labelPrimary={label}
                    labelRight={date}
                    color={BaseInputLabelColor.Grey}
                />
                <View style={styles.title}>
                    {title}
                </View>
                <View style={styles.subtitle}>
                    {subtitle}
                </View>
            </View>
        </View>
    )
}

export default Notification

const styles = StyleSheet.create({
    notification: {
        flexShrink: 0,
        width: 312,
        flexDirection: 'row',
        alignItems: 'flex-start',
        columnGap: 12
    },
    icon: {
        flexShrink: 0,
        backgroundColor: 'rgba(240, 242, 245, 1)',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        columnGap: 0,
        padding: 10,
        borderRadius: 8
    },
    iconsOutlineInfo: {
        flexShrink: 0,
        height: 24,
        width: 24,
        alignItems: 'flex-start',
        rowGap: 0
    },
    boundingbox: {
        position: 'absolute',
        flexShrink: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: 'rgba(217, 217, 217, 1)'
    },
    vector: {
        position: 'absolute',
        flexShrink: 0,
        top: 2,
        right: 2,
        bottom: 2,
        left: 2,
        overflow: 'visible'
    },
    text: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        alignItems: 'flex-start',
        rowGap: 4
    },
    labeltype: {
        alignSelf: 'stretch',
        flexShrink: 0,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        columnGap: 12
    },
    left: {
        flexShrink: 0,
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 4
    },
    label: {
        flexShrink: 0,
        textAlign: 'left',
        color: 'rgba(76, 89, 112, 1)',
        fontFamily: 'Satoshi Variable',
        fontSize: 12,
        fontWeight: '700',
        letterSpacing: 0,
        lineHeight: 16
    },
    right: {
        flexShrink: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        columnGap: 4
    },
    labelright: {
        flexShrink: 0,
        textAlign: 'left',
        color: 'rgba(76, 89, 112, 1)',
        fontFamily: 'Satoshi Variable',
        fontSize: 12,
        fontWeight: '400',
        letterSpacing: 0,
        lineHeight: 16
    },
    content: {
        alignSelf: 'stretch',
        flexShrink: 0,
        alignItems: 'flex-start',
        rowGap: 0
    },
    title: {
        alignSelf: 'stretch',
        flexShrink: 0,
        textAlign: 'left',
        color: 'rgba(9, 17, 31, 1)',
        fontFamily: 'Satoshi Variable',
        fontSize: 14,
        fontWeight: '700',
        letterSpacing: 0,
        lineHeight: 20
    },
    subtitle: {
        alignSelf: 'stretch',
        flexShrink: 0,
        textAlign: 'left',
        color: 'rgba(76, 89, 112, 1)',
        fontFamily: 'Satoshi Variable',
        fontSize: 12,
        fontWeight: '400',
        letterSpacing: 0,
        lineHeight: 16
    }
})
