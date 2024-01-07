import { StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import React, { useEffect } from 'react';
import { Stack, router, usePathname } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from './signIn';
import signUp from './signUp';

const LayoutAuth = () => {
  const route = usePathname(); // Access the current route
  const Stack = createStackNavigator();
  useEffect(() => {
    // Log the current route's name to the console
    console.log('Current Route Name:', route);
  }, [route]); // Run the effect whenever the route changes

  const screenWidth = Dimensions.get('window').width;

  return (
    
    <Stack.Navigator>
    <Stack.Screen
      name="signIn"
      component={SignIn}
      options={{
        title: 'Sign In',
        headerStyle: {
          

        },
        headerTintColor: 'black',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign:'center',
        headerLeft: () => (
          <TouchableOpacity onPress={() => router.back()}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
        ),
      }}
    />
    <Stack.Screen
      name="signUp"
      component={signUp}
      options={{
        title: 'Sign Up',
        headerStyle: {
          

        },
        headerTintColor: 'black',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign:'center',
        headerLeft: () => (
          <TouchableOpacity onPress={() => router.back()}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
        ),
      }}
    />
  </Stack.Navigator>
  );
};

export default LayoutAuth;

const styles = StyleSheet.create({
  textD: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign:"center"
  },
});
