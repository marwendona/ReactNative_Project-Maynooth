import {StyleSheet, View, Text} from 'react-native'
import React from 'react'
import Icon from "./Icon";
import {Badge} from "./Badge";

export interface ListListItemProps {
    subtitle?: string;
    title?: string;
    text?: string;
    state?: 'Default' | 'Hover' | 'Active';
}

const ListListItem = ({subtitle, title, text, state = 'Default'}: ListListItemProps) => {
    const getStateStyles = () => {
        switch (state) {
            case 'Hover':
                return styles.hover;
            case 'Active':
                return styles.active;
            default:
                return styles.default;
        }
    };

    return (
        <View style={[styles.listListitem, getStateStyles()]}>
            <Icon iconName={'help'} />
            <View style={styles.text}>
                <Text style={styles.title}>
                    {title}
                </Text>
            </View>
            <View style={styles.itemright}>
                <View style={styles.badgewrapper}>
                    <Badge text={subtitle} type={'Text'} size={'Small'} />
                </View>
                <Icon iconName={'chevron_right'} />
            </View>
        </View>
    );
};

export default ListListItem

const styles = StyleSheet.create({
    // Common styles
    listListitem: {
        flexShrink: 0,
        width: 360,
        paddingLeft: 24,
        paddingRight: 20,
        flexDirection: "row",
        alignItems: "center",
        columnGap: 8,
        paddingVertical: 10,
    },
    text: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        alignItems: "flex-start",
        justifyContent: "center",
        rowGap: 0,
    },
    title: {
        alignSelf: "stretch",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 14,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 20,
    },
    itemright: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        columnGap: 0,
    },
    badgewrapper: {
        flexShrink: 0,
        paddingLeft: 0,
        paddingRight: 4,
        alignItems: "flex-start",
        justifyContent: "center",
        rowGap: 0,
        paddingVertical: 0,
    },
    // State-specific styles
    default: {
        backgroundColor: "rgba(255, 255, 255, 1)",
    },
    hover: {
        backgroundColor: "rgba(240, 242, 245, 1)",
    },
    active: {
        backgroundColor: "rgba(225, 229, 235, 1)",
    },
});
