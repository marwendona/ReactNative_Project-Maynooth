import { StyleSheet, Text, Touchable, View, Image } from "react-native";
import React from "react";
import { Slot, Tabs, router, usePathname } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import NavItem from "../../Components/NavItem";
import { themeGlobal } from "../../styles/themeGlobal";
const TabsLayout = () => {
  const routeActive = usePathname();

  console.log(routeActive);
  console.log("routeActive");
  return (
    <Tabs >
      <Tabs.Screen
        name="home"
        options={{
          headerLeft: () => (
            <View style={{ flexDirection: "row", alignItems: "center", marginLeft: 24, marginRight:24 }}>
              
              <Image
                source={require("../../assets/logo.png")}
              />
              <Image source={require("../../assets/MAYNOOTH.png")} />
            </View>
          ),
          title:"",
          headerTitle:"",
          headerRight: () => (
            <View>
            <View><TouchableOpacity style={{ marginRight: 24 }}
              onPress={() => {
                router.push({ pathname: "(aux)/notification" });
              }}
            >
              <Ionicons name="notifications-outline" size={24} color="black" />
            </TouchableOpacity></View></View>
          ),
          tabBarIcon: ({ focused, color, size }) => {
            // You can return any component that you like here!
            return <NavItem icon="home" text="Home" active={routeActive === "/home"}/>;
          },
        }}
      ></Tabs.Screen>

     

      <Tabs.Screen
        name="search"
        options={{
          headerLeft: () => (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              
              <Image
                source={require("../../assets/logo.png")}
                style={{ marginRight: 8 }}
              />
              <Image source={require("../../assets/MAYNOOTH.png")} />
            </View>
          ),
          title:"",
          headerRight: () => (
            <View><TouchableOpacity
              onPress={() => {
                router.push({ pathname: "(aux)/notification" });
              }}
            >
              <Ionicons name="notifications-outline" size={24} color="black" />
            </TouchableOpacity></View>
          ),
          tabBarIcon: ({ focused, color, size }) => {
            // You can return any component that you like here!
            return <NavItem icon="search" text="Search" active={routeActive === "/search"}/>
          },
        }}
      ></Tabs.Screen>
            <Tabs.Screen
        name="cart"
        options={{
          headerLeft: () => (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              
              <Image
                source={require("../../assets/logo.png")}
                style={{ marginRight: 8 }}
              />
              <Image source={require("../../assets/MAYNOOTH.png")} />
            </View>
          ),
          title:"",
          headerRight: () => (
            <View><TouchableOpacity
              onPress={() => {
                router.push({ pathname: "(aux)/notification" });
              }}
            >
              <Ionicons name="notifications-outline" size={24} color="black" />
            </TouchableOpacity></View>
          ),
          tabBarIcon: ({ focused, color, size }) => {
            // You can return any component that you like here!
            return <NavItem icon="shopping_cart" text="Cart" active={routeActive === "/cart"}/>
          },
        }}
      ></Tabs.Screen>
            <Tabs.Screen
        name="favorite"
        options={{
          headerLeft: () => (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              
              <Image
                source={require("../../assets/logo.png")}
                style={{ marginRight: 8 }}
              />
              <Image source={require("../../assets/MAYNOOTH.png")} />
            </View>
          ),
          title:"",
          headerRight: () => (
            <View><TouchableOpacity
              onPress={() => {
                router.push({ pathname: "(aux)/notification" });
              }}
            >
              <Ionicons name="notifications-outline" size={24} color="black" />
            </TouchableOpacity></View>
          ),
          tabBarIcon: ({ focused, color, size }) => {
            // You can return any component that you like here!
            return <NavItem icon="favorite" text="Favorite" active={routeActive === "/favorite"}/>
          },
        }}
      ></Tabs.Screen>
       <Tabs.Screen
        name="profile"
        options={{
          headerTitle:()=> (<Text style={[themeGlobal.themeGlobalText.h4,{marginLeft: 120}]}> Profile</Text>),
          headerLeft: () => (
            <View style={{ flexDirection: "row", alignItems: "center", marginLeft: 24 }}>
               <View><TouchableOpacity
              onPress={() => {
                router.back();
              }}
            >
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity></View>
          
            </View>
          ),
          title:"",
          
          headerRight: () => (
            <View style={{ marginRight: 24 }}><TouchableOpacity
              onPress={() => {
                router.push({ pathname: "(aux)/notification" });
              }}
            >
              <Ionicons name="notifications-outline" size={24} color="black" />
            </TouchableOpacity></View>
          ),
          tabBarIcon: ({ focused, color, size }) => {
            // You can return any component that you like here!
            return <NavItem icon="person" text="Profile" active={routeActive === "/profile"}/>;
          },
        }}
      ></Tabs.Screen>
    </Tabs>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({});
