import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Notification from './Components/Notification';
import { IconsOutlineInfo } from './Components/IconsOutlineInfo';

export default function App() {
  return (
    <View style={styles.container}> 
      <Notification subtitle='Subtitle' title='Title' icon={<IconsOutlineInfo></IconsOutlineInfo>}></Notification>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
