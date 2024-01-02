import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import Icon from '../../../Components/Icon';
import theme from '../../../Components/theme';
import InputField, { BaseInputFieldSize, BaseInputFieldState } from '../../../Components/InputField';
import SearchResult from './SearchResult';
import { router, useNavigation } from 'expo-router';
import BaseInputField from '../../../Components/InputField';
import SearchFilter from '../SearchFilter';

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
        <InputField
        size={BaseInputFieldSize.Small}
        state={BaseInputFieldState.FocusFilled}
        text='Search...'
        iconLeft='search'
        iconRight='close'
      />
        {searchText.length > 0 && (
          <TouchableOpacity onPress={handleClearPress}>
            <Icon iconName="clear" color={theme.colors.gray100} size="Small" />
          </TouchableOpacity>
        )}
      </View>
      <TouchableOpacity onPress={toggleModal}>
        <Icon iconName="tune" color={theme.colors.gray100} size="Small" />
      </TouchableOpacity>
      
      <SearchFilter isVisible={isModalVisible} onClose={() => {
          toggleModal();          
        }} />
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
        name="SearchResult"
        component={SearchResult}
        options={{ title: 'Search Result' }}
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
