import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from "./Icon";
import { Badge, BadgeSize, BadgeType } from "./Badge";
import theme from "./theme";

export interface NavItemProps {
    icon: string;
    text?: string;
    hasBadge?: boolean;
    active?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, text, hasBadge = false, active=false }) => {
    const [isActive, setIsActive] = useState(active);

    const handlePress = () => {
        setIsActive(!isActive);
    };

    return (
        <TouchableOpacity style={[styles.baseNavitem, isActive && styles.active]} onPress={handlePress}>
            <Icon iconName={icon} size={'Medium'} color={theme.colors.gray100} />
            {hasBadge && <View style={styles.badge}> <Badge type={BadgeType.Dot} size={BadgeSize.Small} /> </View>}
            {isActive && text && <Text style={styles.label}>
                {text}
            </Text>}
        </TouchableOpacity>
    );
};

export default NavItem;

const styles = StyleSheet.create({
    // Common styles
    baseNavitem: {
        flexShrink: 0,
        flexDirection: "row",
        columnGap: 4,
        padding: 10,
        borderRadius: 9999,
        backgroundColor: "rgba(255, 255, 255, 1)",
    },
    label: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 14,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 20,
    },
    badge: {
        zIndex: 1,
        position: "absolute",
        flexShrink: 0,
        top: 7,
        height: 6,
        left: 27,
        width: 6,
        alignItems: "flex-start",
        rowGap: 0,
    },
    // State-specific styles
    active: {
        backgroundColor: "rgba(225, 229, 235, 1)",
    },
});
