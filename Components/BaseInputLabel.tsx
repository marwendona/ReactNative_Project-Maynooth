import React, { ReactElement } from 'react';
import {View, Text} from 'react-native';
import { StyleSheet } from 'react-native';
import theme from './theme';

export interface BaseInputLabelProps {
  labelPrimary: string,
  labelRight: string,
  labelSecondary: string,
  color: 'Dark' | 'Grey' | 'Green' | 'Red' | 'White',
  hasIconLeft?: boolean,
  hasIconRight?: boolean,
  hasLabelPrimary?: boolean,
  hasLabelRight?: boolean,
  hasLabelSecondary?: boolean,
  iconLeft?: ReactElement,
  iconRight?: ReactElement,
  testID?: string,
}

export function BaseInputLabel(props: BaseInputLabelProps) {

  const _colorGreen = props.color === 'Green';
  const _colorGrey = props.color === 'Grey';
  const _colorRed = props.color === 'Red';
  const _colorWhite = props.color === 'White';

  const $styles = React.useMemo(() => ({
    root: [
      styles.root,
      _colorGrey && styles.rootColorGrey,
      // _colorGreen && styles.rootColorGreen,
      // _colorRed && styles.rootColorRed,
      // _colorWhite && styles.rootColorWhite,
    ],
    label: [
      styles.label,
      _colorGrey && styles.labelColorGrey,
      _colorGreen && styles.labelColorGreen,
      _colorRed && styles.labelColorRed,
      _colorWhite && styles.labelColorWhite,
    ],
    labelSecondary: [
      styles.labelSecondary,
      _colorGrey && styles.labelSecondaryColorGrey,
      // _colorGreen && styles.labelSecondaryColorGreen,
      // _colorRed && styles.labelSecondaryColorRed,
      // _colorWhite && styles.labelSecondaryColorWhite,
    ],
    left: [
      styles.left,
      _colorGrey && styles.leftColorGrey,
      // _colorGreen && styles.leftColorGreen,
      // _colorRed && styles.leftColorRed,
      // _colorWhite && styles.leftColorWhite,
    ],
    labelRight: [
      styles.labelRight,
      _colorGrey && styles.labelRightColorGrey,
      _colorGreen && styles.labelRightColorGreen,
      _colorRed && styles.labelRightColorRed,
      _colorWhite && styles.labelRightColorWhite,
    ],
    right: [
      styles.right,
      _colorGrey && styles.rightColorGrey,
      // _colorGreen && styles.rightColorGreen,
      // _colorRed && styles.rightColorRed,
      // _colorWhite && styles.rightColorWhite,
    ],
  }), [styles, props.color]);

  return (
    <View style={$styles.root} testID={props.testID}>
      <View style={$styles.left} testID="1805:5708">
        {props.hasIconLeft && 
          props.iconLeft
        }
        {props.hasLabelPrimary && 
          <Text style={$styles.label} testID="1805:5710">
            {props.labelPrimary}
          </Text>
        }
        {props.hasLabelSecondary && 
          <Text style={$styles.labelSecondary} testID="1805:5711">
            {props.labelSecondary}
          </Text>
        }
      </View>
      <View style={$styles.right} testID="1805:5712">
        {props.hasLabelRight && 
          <Text style={$styles.labelRight} testID="1805:5713">
            {props.labelRight}
          </Text>
        }
        {props.hasIconRight && 
          props.iconRight
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    width: 312,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  rootColorGrey: {
    flexDirection: 'row',
    width: 312,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  iconLeft: {
    width: 16,
    height: 16,
  },
  label: {
    color: theme.colors.gray70,
    fontFamily: 'Satoshi Variable',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 16,
  },
  labelColorGrey: {
    color: theme.colors.gray70,
    fontFamily: 'Satoshi Variable',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 16,
  },
  labelColorGreen: {
    color: theme.colors.green100,
  },
  labelColorRed: {
    color: theme.colors.red100,
  },
  labelColorWhite: {
    color: theme.colors.white,
  },
  labelSecondary: {
    color: theme.colors.gray70,
    fontFamily: 'Satoshi Variable',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 16,
  },
  labelSecondaryColorGrey: {
    color: theme.colors.gray70,
    fontFamily: 'Satoshi Variable',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 16,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    rowGap: 4,
    columnGap: 4,
  },
  leftColorGrey: {
    flexDirection: 'row',
    alignItems: 'center',
    rowGap: 4,
    columnGap: 4,
  },
  labelRight: {
    color: theme.colors.gray70,
    fontFamily: 'Satoshi Variable',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 16,
  },
  labelRightColorGrey: {
    color: theme.colors.gray70,
    fontFamily: 'Satoshi Variable',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 16,
  },
  labelRightColorGreen: {
    color: theme.colors.green100,
  },
  labelRightColorRed: {
    color: theme.colors.red100,
  },
  labelRightColorWhite: {
    color: theme.colors.white,
  },
  iconRight: {
    width: 16,
    height: 16,
  },
  right: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    rowGap: 4,
    columnGap: 4,
  },
  rightColorGrey: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    rowGap: 4,
    columnGap: 4,
  },
});
