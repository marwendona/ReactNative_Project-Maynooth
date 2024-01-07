import { StyleSheet, Text, Touchable, View, Image } from "react-native";
import React from "react";
import { Slot, Tabs, router, usePathname } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import NavItem from "../../Components/NavItem";
const TabsLayout = () => {
  const routeActive = usePathname();

  console.log(routeActive);
  console.log("routeActive");
  const home = routeActive === "/home" ? "Home" : "";
  const search = routeActive === "/search" ? "Search" : "";
  const profile = routeActive === "/profile" ? "Profile" : "";
  console.log(home);
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          headerLeft: () => (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              {" "}
              <Image
                source={require("../../assets/logo.png")}
                style={{ marginRight: 8 }}
              />{" "}
              <Image source={require("../../assets/MAYNOOTH.png")} />
            </View>
          ),
          title:"",
          headerTitle:"",
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                router.push({ pathname: "(aux)/notification" });
              }}
            >
              <Ionicons name="notifications-outline" size={24} color="black" />
            </TouchableOpacity>
          ),
          tabBarIcon: ({ focused, color, size }) => {
            // You can return any component that you like here!
            return <NavItem icon="home" text="Home" active={routeActive === "/home"}/>;
          },
        }}
      ></Tabs.Screen>

      <Tabs.Screen
        name="profile"
        
        options={{
          headerLeft: () => (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              {" "}
              <Image
                source={require("../../assets/logo.png")}
                style={{ marginLeft: 8 }}
              />{" "}
              <Image source={require("../../assets/MAYNOOTH.png")} />
            </View>
          ),
          title:"",
          
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                router.push({ pathname: "(aux)/notification" });
              }}
            >
              <Ionicons name="notifications-outline" size={24} color="black" />
            </TouchableOpacity>
          ),
          tabBarIcon: ({ focused, color, size }) => {
            // You can return any component that you like here!
            return <NavItem icon="person" text="Profile" active={routeActive === "/profile"}/>;
          },
        }}
      ></Tabs.Screen>

      <Tabs.Screen
        name="search"
        options={{
          headerLeft: () => (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              {" "}
              <Image
                source={require("../../assets/logo.png")}
                style={{ marginRight: 8 }}
              />{" "}
              <Image source={require("../../assets/MAYNOOTH.png")} />
            </View>
          ),
          title:"",
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                router.push({ pathname: "(aux)/notification" });
              }}
            >
              <Ionicons name="notifications-outline" size={24} color="black" />
            </TouchableOpacity>
          ),
          tabBarIcon: ({ focused, color, size }) => {
            // You can return any component that you like here!
            return <NavItem icon="search" text="Search" active={routeActive === "/search"}/>;
          },
        }}
      ></Tabs.Screen>
    </Tabs>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({});
