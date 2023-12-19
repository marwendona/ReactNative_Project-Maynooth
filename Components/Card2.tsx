import React from 'react'
import { StyleSheet, View, Text, ImageBackground } from 'react-native'

import '../assets/CARD.jpg'
import ButtonRegular, { ButtonRegularColor, ButtonRegularSize, ButtonRegularType } from './ButtonRegular'

export interface CardProps {
  subtitle: string
  title: string
  orientation: CardOrientation
  image: string
}

export enum CardOrientation {
  Vertical = 'Vertical',
  Horizontal = 'Horizontal',
}

const Card2: React.FC<CardProps> = ({ subtitle, title, orientation, image }) => {
  const styles = orientation === CardOrientation.Horizontal ? stylesHorizontal : stylesVertical

  return (
        <View>

            <ImageBackground style={styles.card} source={{ uri: image }}>

                <View style={styles.text}>
                    <Text style={styles.title}>
                        {title}
                    </Text>
                    <Text style={styles.subtitle}>
                        {subtitle}
                    </Text>
                </View>

                <ButtonRegular iconLeft={'arrow_forward'} size={ButtonRegularSize.Small} type={ButtonRegularType.FilledCircle} color={ButtonRegularColor.Light}></ButtonRegular>

            </ImageBackground>
        </View>

  )
}
export default Card2
const stylesHorizontal = StyleSheet.create({
  card: {
    zIndex: -1,
    flexShrink: 0,
    height: 154,
    width: 256,
    alignItems: 'flex-start',
    rowGap: 0,
    borderRadius: 12,
    overflow: 'hidden'
  },
  text: {
    alignSelf: 'stretch',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    alignItems: 'flex-start',
    rowGap: 0,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 12
  },
  title: {
    alignSelf: 'stretch',
    flexShrink: 0,
    textAlign: 'left',
    color: 'rgba(255, 255, 255, 1)',
    // "rgba(255, 255, 255, 1)"
    fontFamily: 'Satoshi Variable',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0,
    lineHeight: 24
  },
  subtitle: {
    alignSelf: 'stretch',
    flexShrink: 0,
    textAlign: 'left',
    color: 'rgba(255, 255, 255, 1)',
    fontFamily: 'Satoshi Variable',
    fontSize: 12,
    fontWeight: '400',
    letterSpacing: 0,
    lineHeight: 16
  }
})

const stylesVertical = StyleSheet.create({
  card: {
    zIndex: -1,
    flexShrink: 0,
    height: 154,
    width: 116,
    alignItems: 'flex-start',
    rowGap: 0,
    borderRadius: 12,
    overflow: 'hidden' // Necessary to apply borderRadius to ImageBackground
  },
  text: {
    alignSelf: 'stretch',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    alignItems: 'flex-start',
    rowGap: 0,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 12
  },
  title: {
    alignSelf: 'stretch',
    flexShrink: 0,
    textAlign: 'left',
    color: 'rgba(255, 255, 255, 1)',
    fontFamily: 'Satoshi Variable',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0,
    lineHeight: 20
  },
  subtitle: {
    alignSelf: 'stretch',
    flexShrink: 0,
    textAlign: 'left',
    color: 'rgba(255, 255, 255, 1)',
    fontFamily: 'Satoshi Variable',
    fontSize: 12,
    fontWeight: '400',
    letterSpacing: 0,
    lineHeight: 16
  }
})
