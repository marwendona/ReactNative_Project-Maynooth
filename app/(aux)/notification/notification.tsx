import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { service } from "../../../service";
import NotificationItem from "../../../Components/Notification";


const Notification = () => {
    const notificationStore = useSelector((state) => state.notifications);
    const [parsedResponses, setParsedResponses] = useState<any[]>([]);
    const dispatch = useDispatch();
    const [activeTab, setActiveTab] = useState("All");

    const handleTabPress = (tabName: string) => {
        setActiveTab(tabName);
        if (tabName === "Orders") {
            fetchDataByType("Order");
        }
        if (tabName === "Promotions") {
            fetchDataByType("Promotion");
        }
        if (tabName === "Info") {
            fetchDataByType("Info");
        }
        if (tabName === "All") {
            fetchDataByType("All");
        }

    };
    const fetchDataByType= async (type: any) => {
        try {
            const { data } = await service.notifications.notificationsList();

            const parsedArray = data.paginatedResult.map((item) => {
                const parsedValue =
                    item.response && item.response.value
                        ? JSON.parse(item.response.value)
                        : null;

                return {
                    ...item,
                    response: {
                        ...item.response,
                        value: parsedValue,
                    },
                };
            });

            const filteredArray = parsedArray.filter((item) => {
                try {
                    if (item.user && item.value && JSON.parse(item.value)) {
                        return true;
                    }
                } catch (error) {

                }
                return false;
            });
            let filteredArrayByType;
            if (type === "All") {
                filteredArrayByType = filteredArray.filter((item) => {
                    return item;
                });
            } else {
                filteredArrayByType = filteredArray.filter((item) => {
                    return item.typeNotification === type;
                });
            }

            const parsedResponsesArray = filteredArrayByType.map((item) => {
                if (item && item.response && item.response.value) {
                    try {
                        const { title, subtitle, date, type } = JSON.parse(
                            item.response.value
                        );

                        const parsedItem = {
                            ...item,
                            response: {
                                ...item.response,
                                value: {
                                    title,
                                    subtitle,
                                    date,
                                    type,
                                },
                            },
                        };

                        return parsedItem;
                    } catch (error) {
                        console.error(
                            `Error parsing JSON for item with ID ${item.id}: ${error.message}`
                        );
                        return item;
                    }
                } else {
                    return item;
                }
            });

            setParsedResponses(parsedResponsesArray);
        } catch (error) {
            console.error("Error fetching data:", error.message);
        }
    };

    useEffect(() => {
        fetchDataByType("All");
    }, []);
    return (
        <View style={{height: "100%"}}>
        <ScrollView style={styles.page}>
            <View style={styles.tabscategory}>
                <TouchableOpacity
                    style={styles.all}
                    onPress={() => handleTabPress("All")}
                >
                    <View style={styles.textwrapper}>
                        <Text
                            style={[styles.text, activeTab === "All" && styles.activeTab]}
                        >{`All`}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.orders}
                    onPress={() => handleTabPress("Orders")}
                >
                    <View style={styles._textwrapper}>
                        <Text
                            style={[styles._text, activeTab === "Orders" && styles.activeTab]}
                        >{`Orders`}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.promotions}
                    onPress={() => handleTabPress("Promotions")}
                >
                    <View style={styles.__textwrapper}>
                        <Text
                            style={[
                                styles.__text,
                                activeTab === "Promotions" && styles.activeTab,
                            ]}
                        >{`Promotions`}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.info}
                    onPress={() => handleTabPress("Info")}
                >
                    <View style={styles.___textwrapper}>
                        <Text
                            style={[styles.___text, activeTab === "Info" && styles.activeTab]}
                        >{`Info`}</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.items}>
                {parsedResponses.map((parsedResponse) => (
                    <NotificationItem
                        key={parsedResponse.id}
                        parsedResponse={parsedResponse}
                        styles={styles}
                    />
                ))}
            </View>
        </ScrollView>
        </View>
    );
};

export default Notification;

const styles = StyleSheet.create({
    page: {
        backgroundColor: "white",
    },
    tabscategory: {
        alignSelf: "stretch",
        flexShrink: 0,
        paddingTop: 0,
        paddingBottom: 12,
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 1,
        borderLeftWidth: 0,
        backgroundColor: "rgba(255, 255, 255, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        columnGap: 0,
        paddingHorizontal: 24,
    },
    tab: {
        paddingVertical: 1,
        paddingHorizontal: 0,
    },
    activeTab: {
        fontWeight: "bold",
    },
    all: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        columnGap: 0,
        paddingVertical: 1,
        paddingHorizontal: 0,
    },
    textwrapper: {
        flexShrink: 0,
        paddingTop: 0,
        paddingBottom: 2,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 0,
        paddingHorizontal: 0,
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
    orders: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        columnGap: 0,
        paddingVertical: 1,
        paddingHorizontal: 0,
    },
    _textwrapper: {
        flexShrink: 0,
        paddingTop: 0,
        paddingBottom: 2,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 0,
        paddingHorizontal: 0,
    },
    _text: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(76, 89, 112, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16,
    },
    promotions: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        columnGap: 0,
        paddingVertical: 1,
        paddingHorizontal: 0,
    },
    __textwrapper: {
        flexShrink: 0,
        paddingTop: 0,
        paddingBottom: 2,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 0,
        paddingHorizontal: 0,
    },
    __text: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(76, 89, 112, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16,
    },
    info: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        columnGap: 0,
        paddingVertical: 1,
        paddingHorizontal: 0,
    },
    ___textwrapper: {
        flexShrink: 0,
        paddingTop: 0,
        paddingBottom: 2,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 0,
        paddingHorizontal: 0,
    },
    ___text: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(76, 89, 112, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16,
    },

    items: {
        alignSelf: "stretch",
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        alignItems: "flex-start",
        rowGap: 24,
        padding: 24,
    },
    notification: {
        alignSelf: "stretch",
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 12,
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
    vector: {
        position: "absolute",
        flexShrink: 0,
        top: 2,
        right: 2,
        bottom: 2,
        left: 2,
        overflow: "visible",
    },
    text: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        alignItems: "flex-start",
        rowGap: 4,
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
    _notification: {
        alignSelf: "stretch",
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 12,
    },
    _icon: {
        flexShrink: 0,
        backgroundColor: "rgba(254, 246, 226, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 0,
        padding: 10,
        borderRadius: 8,
    },
    iconsOutlineReceipt_long: {
        flexShrink: 0,
        height: 24,
        width: 24,
        alignItems: "flex-start",
        rowGap: 0,
    },
    _boundingbox: {
        position: "absolute",
        flexShrink: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: "rgba(217, 217, 217, 1)",
    },
    _vector: {
        position: "absolute",
        flexShrink: 0,
        top: 2,
        right: 3,
        bottom: 2,
        left: 3,
        overflow: "visible",
    },
    _text: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        alignItems: "flex-start",
        rowGap: 4,
    },
    _labeltype: {
        alignSelf: "stretch",
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        columnGap: 12,
    },
    _left: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        columnGap: 4,
    },
    _label: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(76, 89, 112, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16,
    },
    _right: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        columnGap: 4,
    },
    _labelright: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(76, 89, 112, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "400",
        letterSpacing: 0,
        lineHeight: 16,
    },
    _content: {
        alignSelf: "stretch",
        flexShrink: 0,
        alignItems: "flex-start",
        rowGap: 0,
    },
    _title: {
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
    _subtitle: {
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
    __notification: {
        alignSelf: "stretch",
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 12,
    },
    __icon: {
        flexShrink: 0,
        backgroundColor: "rgba(254, 246, 226, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 0,
        padding: 10,
        borderRadius: 8,
    },
    _iconsOutlineReceipt_long: {
        flexShrink: 0,
        height: 24,
        width: 24,
        alignItems: "flex-start",
        rowGap: 0,
    },
    __boundingbox: {
        position: "absolute",
        flexShrink: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: "rgba(217, 217, 217, 1)",
    },
    __vector: {
        position: "absolute",
        flexShrink: 0,
        top: 2,
        right: 3,
        bottom: 2,
        left: 3,
        overflow: "visible",
    },
    __text: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        alignItems: "flex-start",
        rowGap: 4,
    },
    __labeltype: {
        alignSelf: "stretch",
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        columnGap: 12,
    },
    __left: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        columnGap: 4,
    },
    __label: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(76, 89, 112, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16,
    },
    __right: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        columnGap: 4,
    },
    __labelright: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(76, 89, 112, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "400",
        letterSpacing: 0,
        lineHeight: 16,
    },
    __content: {
        alignSelf: "stretch",
        flexShrink: 0,
        alignItems: "flex-start",
        rowGap: 0,
    },
    __title: {
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
    __subtitle: {
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
    ___notification: {
        alignSelf: "stretch",
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 12,
    },
    ___icon: {
        flexShrink: 0,
        backgroundColor: "rgba(254, 246, 226, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 0,
        padding: 10,
        borderRadius: 8,
    },
    __iconsOutlineReceipt_long: {
        flexShrink: 0,
        height: 24,
        width: 24,
        alignItems: "flex-start",
        rowGap: 0,
    },
    ___boundingbox: {
        position: "absolute",
        flexShrink: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: "rgba(217, 217, 217, 1)",
    },
    ___vector: {
        position: "absolute",
        flexShrink: 0,
        top: 2,
        right: 3,
        bottom: 2,
        left: 3,
        overflow: "visible",
    },
    ___text: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        alignItems: "flex-start",
        rowGap: 4,
    },
    ___labeltype: {
        alignSelf: "stretch",
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        columnGap: 12,
    },
    ___left: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        columnGap: 4,
    },
    ___label: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(76, 89, 112, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16,
    },
    ___right: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        columnGap: 4,
    },
    ___labelright: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(76, 89, 112, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "400",
        letterSpacing: 0,
        lineHeight: 16,
    },
    ___content: {
        alignSelf: "stretch",
        flexShrink: 0,
        alignItems: "flex-start",
        rowGap: 0,
    },
    ___title: {
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
    ___subtitle: {
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
    ____notification: {
        alignSelf: "stretch",
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 12,
    },
    ____icon: {
        flexShrink: 0,
        backgroundColor: "rgba(254, 246, 226, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 0,
        padding: 10,
        borderRadius: 8,
    },
    ___iconsOutlineReceipt_long: {
        flexShrink: 0,
        height: 24,
        width: 24,
        alignItems: "flex-start",
        rowGap: 0,
    },
    ____boundingbox: {
        position: "absolute",
        flexShrink: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: "rgba(217, 217, 217, 1)",
    },
    ____vector: {
        position: "absolute",
        flexShrink: 0,
        top: 2,
        right: 3,
        bottom: 2,
        left: 3,
        overflow: "visible",
    },
    ____text: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        alignItems: "flex-start",
        rowGap: 4,
    },
    ____labeltype: {
        alignSelf: "stretch",
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        columnGap: 12,
    },
    ____left: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        columnGap: 4,
    },
    ____label: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(76, 89, 112, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16,
    },
    ____right: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        columnGap: 4,
    },
    ____labelright: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(76, 89, 112, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "400",
        letterSpacing: 0,
        lineHeight: 16,
    },
    ____content: {
        alignSelf: "stretch",
        flexShrink: 0,
        alignItems: "flex-start",
        rowGap: 0,
    },
    ____title: {
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
    ____subtitle: {
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
    _____notification: {
        alignSelf: "stretch",
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 12,
    },
    _____icon: {
        flexShrink: 0,
        backgroundColor: "rgba(235, 251, 241, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 0,
        padding: 10,
        borderRadius: 8,
    },
    _iconsOutlineSell: {
        flexShrink: 0,
        height: 24,
        width: 24,
        alignItems: "flex-start",
        rowGap: 0,
    },
    _____boundingbox: {
        position: "absolute",
        flexShrink: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: "rgba(217, 217, 217, 1)",
    },
    _____vector: {
        position: "absolute",
        flexShrink: 0,
        top: 2,
        right: 2,
        bottom: 2,
        left: 2,
        overflow: "visible",
    },
    _____text: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        alignItems: "flex-start",
        rowGap: 4,
    },
    _____labeltype: {
        alignSelf: "stretch",
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        columnGap: 12,
    },
    _____left: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        columnGap: 4,
    },
    _____label: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(76, 89, 112, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16,
    },
    _____right: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        columnGap: 4,
    },
    _____labelright: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(76, 89, 112, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "400",
        letterSpacing: 0,
        lineHeight: 16,
    },
    _____content: {
        alignSelf: "stretch",
        flexShrink: 0,
        alignItems: "flex-start",
        rowGap: 0,
    },
    _____title: {
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
    _____subtitle: {
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
    ______notification: {
        alignSelf: "stretch",
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 12,
    },
    ______icon: {
        flexShrink: 0,
        backgroundColor: "rgba(235, 241, 252, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 0,
        padding: 10,
        borderRadius: 8,
    },
    iconsOutlineInfo: {
        flexShrink: 0,
        height: 24,
        width: 24,
        alignItems: "flex-start",
        rowGap: 0,
    },
    ______boundingbox: {
        position: "absolute",
        flexShrink: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: "rgba(217, 217, 217, 1)",
    },
    ______vector: {
        position: "absolute",
        flexShrink: 0,
        top: 2,
        right: 2,
        bottom: 2,
        left: 2,
        overflow: "visible",
    },
    ______text: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        alignItems: "flex-start",
        rowGap: 4,
    },
    ______labeltype: {
        alignSelf: "stretch",
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        columnGap: 12,
    },
    ______left: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        columnGap: 4,
    },
    ______label: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(76, 89, 112, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16,
    },
    ______right: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        columnGap: 4,
    },
    ______labelright: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(76, 89, 112, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "400",
        letterSpacing: 0,
        lineHeight: 16,
    },
    ______content: {
        alignSelf: "stretch",
        flexShrink: 0,
        alignItems: "flex-start",
        rowGap: 0,
    },
    ______title: {
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
    ______subtitle: {
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
