import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native';
import Icon from '../../../Components/Icon';
import theme from '../../../Components/theme';
import InputField, { BaseInputFieldSize, BaseInputFieldState } from '../../../Components/InputField';
import SearchResult from './SearchResult';
import { router, useNavigation } from 'expo-router';
import BaseInputField from '../../../Components/InputField';
import SearchFilter from '../SearchFilter';
import Notification from './notification';

const Stack = createStackNavigator();

const CustomHeader = ({ }) => {
  const [searchText, setSearchText] = useState('');

  const handleClearPress = () => {
    setSearchText('');
  };
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => { router.back() }}><Icon iconName='arrow_back' color={theme.colors.gray100} size='Small' /></TouchableOpacity>
      <View style={styles.inputContainer}>

        <Text style={{marginLeft: 130 ,fontSize: 16 ,fontWeight: 'bold'}}>Notifications</Text>
      </View>
      <TouchableOpacity onPress={()=>{}}>
        <Icon iconName="settings" color={theme.colors.gray100} size="Small" />
      </TouchableOpacity>
      
    </View>
  );
};

const Layout = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: ({ }) => <CustomHeader />,
      }}
    >
      <Stack.Screen
        name="Profile"
        component={Notification}
        options={{ title: 'Profile' }}
      />
    </Stack.Navigator>
  );
};

export default Layout;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: theme.colors.white,
  },
  inputContainer: {
    flex: 1,
    marginLeft: 12,
  },
  inputField: {
    flex: 1,
    paddingVertical: 8,
    marginLeft: 8,
    marginRight: 8,
  },
});