import React, { ReactElement } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { BaseInputLabel } from './BaseInputLabel';
import theme from './theme';

export interface NotificationProps {
  subtitle: string,
  title: string,
  icon?: ReactElement,
}

export default function Notification(props: NotificationProps) {
  return (
    <View style={styles.root}>
      <View style={styles.icon}>
        {props.icon}
      </View>
      <View style={styles.text}>
        <BaseInputLabel hasLabelPrimary hasLabelRight color="Grey" labelPrimary={`Type`} labelRight={`01-12-2023 17:00`} labelSecondary={`(Label secondary)`}/>
        <View style={styles.content}>
          <Text style={styles.title}>
            {props.title}
          </Text>
          <Text style={styles.subtitle}>
            {props.subtitle}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    width: 312,
    alignItems: 'flex-start',
    rowGap: 12,
    columnGap: 12,
  },
  icon: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: theme.colors.gray10,
  },
  title: {
    alignSelf: 'stretch',
    color: theme.colors.gray100,
    fontFamily: 'Satoshi Variable',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 20,
  },
  subtitle: {
    alignSelf: 'stretch',
    color: theme.colors.gray70,
    fontFamily: 'Satoshi Variable',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 16,
  },
  text: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    rowGap: 4,
    columnGap: 4,
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
  },
  content: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    alignSelf: 'stretch',
  },
});
