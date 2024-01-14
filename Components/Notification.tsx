import React from 'react';
import {StyleSheet, View, Text } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const NotificationItem = ({ parsedResponse, styles }) => {
    const renderIcon = () => {
        if (parsedResponse.typeNotification === "Promotion") {
            return (
                <Svg
                    style={styles.vector}
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                >
                    <Path
                        d="M12.25 19.4C11.8667 19.7833 11.3917 19.975 10.825 19.975C10.2583 19.975 9.78333 19.7833 9.4 19.4L0.6 10.6C0.416667 10.4167 0.270833 10.2 0.1625 9.95C0.0541667 9.7 0 9.43333 0 9.15V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H9.15C9.43333 0 9.7 0.0541667 9.95 0.1625C10.2 0.270833 10.4167 0.416667 10.6 0.6L19.4 9.425C19.7833 9.80833 19.975 10.2792 19.975 10.8375C19.975 11.3958 19.7833 11.8667 19.4 12.25L12.25 19.4ZM10.825 18L17.975 10.85L9.15 2H2V9.15L10.825 18ZM4.5 6C4.91667 6 5.27083 5.85417 5.5625 5.5625C5.85417 5.27083 6 4.91667 6 4.5C6 4.08333 5.85417 3.72917 5.5625 3.4375C5.27083 3.14583 4.91667 3 4.5 3C4.08333 3 3.72917 3.14583 3.4375 3.4375C3.14583 3.72917 3 4.08333 3 4.5C3 4.91667 3.14583 5.27083 3.4375 5.5625C3.72917 5.85417 4.08333 6 4.5 6Z"
                        fill="#08C754"
                    />
                </Svg>
            );
        } else if (parsedResponse.typeNotification === "Order") {
            return (
                <Svg
                    style={styles.__vector}
                    width="18"
                    height="20"
                    viewBox="0 0 18 20"
                    fill="none"
                >
                    <Path
                        d="M3 20C2.16667 20 1.45833 19.7083 0.875 19.125C0.291667 18.5417 0 17.8333 0 17V15C0 14.7167 0.0958333 14.4792 0.2875 14.2875C0.479167 14.0958 0.716667 14 1 14H3V0.724997C3 0.574997 3.06667 0.48333 3.2 0.449997C3.33333 0.416664 3.46667 0.466664 3.6 0.599997L4.5 1.5L5.65 0.349997C5.75 0.249997 5.86667 0.199997 6 0.199997C6.13333 0.199997 6.25 0.249997 6.35 0.349997L7.5 1.5L8.65 0.349997C8.75 0.249997 8.86667 0.199997 9 0.199997C9.13333 0.199997 9.25 0.249997 9.35 0.349997L10.5 1.5L11.65 0.349997C11.75 0.249997 11.8667 0.199997 12 0.199997C12.1333 0.199997 12.25 0.249997 12.35 0.349997L13.5 1.5L14.65 0.349997C14.75 0.249997 14.8667 0.199997 15 0.199997C15.1333 0.199997 15.25 0.249997 15.35 0.349997L16.5 1.5L17.4 0.599997C17.5333 0.466664 17.6667 0.412497 17.8 0.437497C17.9333 0.462497 18 0.55833 18 0.724997V17C18 17.8333 17.7083 18.5417 17.125 19.125C16.5417 19.7083 15.8333 20 15 20H3ZM15 18C15.2833 18 15.5208 17.9042 15.7125 17.7125C15.9042 17.5208 16 17.2833 16 17V3H5V14H13C13.2833 14 13.5208 14.0958 13.7125 14.2875C13.9042 14.4792 14 14.7167 14 15V17C14 17.2833 14.0958 17.5208 14.2875 17.7125C14.4792 17.9042 14.7167 18 15 18ZM6.975 7C6.69167 7 6.45833 6.90416 6.275 6.7125C6.09167 6.52083 6 6.28333 6 6C6 5.71666 6.09583 5.47916 6.2875 5.2875C6.47917 5.09583 6.71667 5 7 5H11C11.2833 5 11.5208 5.09583 11.7125 5.2875C11.9042 5.47916 12 5.71666 12 6C12 6.28333 11.9042 6.52083 11.7125 6.7125C11.5208 6.90416 11.2833 7 11 7H6.975ZM6.975 10C6.69167 10 6.45833 9.90416 6.275 9.7125C6.09167 9.52083 6 9.28333 6 9C6 8.71666 6.09583 8.47916 6.2875 8.2875C6.47917 8.09583 6.71667 8 7 8H11C11.2833 8 11.5208 8.09583 11.7125 8.2875C11.9042 8.47916 12 8.71666 12 9C12 9.28333 11.9042 9.52083 11.7125 9.7125C11.5208 9.90416 11.2833 10 11 10H6.975ZM14 7C13.7167 7 13.4792 6.90416 13.2875 6.7125C13.0958 6.52083 13 6.28333 13 6C13 5.71666 13.0958 5.47916 13.2875 5.2875C13.4792 5.09583 13.7167 5 14 5C14.2833 5 14.5208 5.09583 14.7125 5.2875C14.9042 5.47916 15 5.71666 15 6C15 6.28333 14.9042 6.52083 14.7125 6.7125C14.5208 6.90416 14.2833 7 14 7ZM14 10C13.7167 10 13.4792 9.90416 13.2875 9.7125C13.0958 9.52083 13 9.28333 13 9C13 8.71666 13.0958 8.47916 13.2875 8.2875C13.4792 8.09583 13.7167 8 14 8C14.2833 8 14.5208 8.09583 14.7125 8.2875C14.9042 8.47916 15 8.71666 15 9C15 9.28333 14.9042 9.52083 14.7125 9.7125C14.5208 9.90416 14.2833 10 14 10ZM3 18H12V16H2V17C2 17.2833 2.09583 17.5208 2.2875 17.7125C2.47917 17.9042 2.71667 18 3 18Z"
                        fill="#FAB30F"
                    />
                </Svg>
            );
        } else {
            return (
                <Svg
                    style={styles.______vector}
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                >

                    <Path
                        d="M10 15C10.2833 15 10.5208 14.9042 10.7125 14.7125C10.9042 14.5208 11 14.2833 11 14V10C11 9.71667 10.9042 9.47917 10.7125 9.2875C10.5208 9.09583 10.2833 9 10 9C9.71667 9 9.47917 9.09583 9.2875 9.2875C9.09583 9.47917 9 9.71667 9 10V14C9 14.2833 9.09583 14.5208 9.2875 14.7125C9.47917 14.9042 9.71667 15 10 15ZM10 7C10.2833 7 10.5208 6.90417 10.7125 6.7125C10.9042 6.52083 11 6.28333 11 6C11 5.71667 10.9042 5.47917 10.7125 5.2875C10.5208 5.09583 10.2833 5 10 5C9.71667 5 9.47917 5.09583 9.2875 5.2875C9.09583 5.47917 9 5.71667 9 6C9 6.28333 9.09583 6.52083 9.2875 6.7125C9.47917 6.90417 9.71667 7 10 7ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z"
                        fill="#0856DB"
                    />
                </Svg>
            );
        }
    };

    return (
        <View key={parsedResponse.id} style={styles.notification}>
            <View style={styles.icon}>
                <View style={styles.iconsOutlineSell}>
                    <View style={styles.boundingbox} />
                    {renderIcon()}
                </View>
            </View>
            {parsedResponse && parsedResponse.value && (
                <View style={styles.text}>
                    {(() => {
                        try {
                            const parsedValue = JSON.parse(parsedResponse.value);
                            return (
                                <>
                                    <View style={styles.labeltype}>
                                        <View style={styles.left}>
                                            <Text style={styles.label}>
                                                {parsedResponse.typeNotification}
                                            </Text>
                                        </View>
                                        <View style={styles.right}>
                                            <Text style={styles.labelright}>
                                                {parsedValue.date}
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={styles.content}>
                                        <Text style={styles.title}>{parsedValue.title}</Text>
                                        <Text style={styles.subtitle}>
                                            {parsedValue.subtitle}
                                        </Text>
                                    </View>
                                </>
                            );
                        } catch (error) {
                            console.error(
                                `Error parsing JSON for item with ID ${parsedResponse.id}: ${error.message}`
                            );
                            return null;
                        }
                    })()}
                </View>
            )}
        </View>
    );
};

export default NotificationItem;

const styles = StyleSheet.create({
    vector: {
        position: "absolute",
        flexShrink: 0,
        top: 2,
        right: 2,
        bottom: 2,
        left: 2,
        overflow: "visible",
    },

    icon: {
        flexShrink: 0,
        backgroundColor: "rgba(235, 251, 241, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 0,
        padding: 10,
        borderRadius: 8,
    },
    iconsOutlineSell: {
        flexShrink: 0,
        height: 24,
        width: 24,
        alignItems: "flex-start",
        rowGap: 0,
    },
    boundingbox: {
        position: "absolute",
        flexShrink: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
    },
    text: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16,
    },
    labeltype: {
        alignSelf: "stretch",
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        columnGap: 12,
    },
    left: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        columnGap: 4,
    },
    label: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(76, 89, 112, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16,
    },
    right: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        columnGap: 4,
    },
    labelright: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(76, 89, 112, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "400",
        letterSpacing: 0,
        lineHeight: 16,
    },
    content: {
        alignSelf: "stretch",
        flexShrink: 0,
        alignItems: "flex-start",
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
    subtitle: {
        alignSelf: "stretch",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(76, 89, 112, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "400",
        letterSpacing: 0,
        lineHeight: 16,
    },
});
