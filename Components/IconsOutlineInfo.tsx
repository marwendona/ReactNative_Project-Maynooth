import React from 'react';
import {View,Image, StyleSheet} from 'react-native';

export interface IconsOutlineInfoProps {
  color?: string,
  testID?: string,
}

export function IconsOutlineInfo(props: IconsOutlineInfoProps) {
  return (
    <View style={styles.root}>
      <Image source={require('../assets/info.png')} style={styles.boundingBox}/>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: 24,
    height: 24,
    flexShrink: 0,
  },
  boundingBox: {
    width: 24,
    height: 24,
    flexShrink: 0,
    backgroundColor: 'rgba(217, 217, 217, 1)',
  },
});
