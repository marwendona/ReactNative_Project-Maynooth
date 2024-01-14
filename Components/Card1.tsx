import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PriceComponent from './PriceComponent'
import { themeGlobal } from '../styles/themeGlobal'
import RatingProduct from './RatingProduct'
import { Thumbnail } from './Thumbnail'
import CardBody from './CardBody'
import ButtonRegular, { ButtonRegularColor, ButtonRegularSize, ButtonRegularType } from './ButtonRegular'

export interface CardProps {
  title: string
  subtitle: string
  type: 'Product' | 'Collection' | 'Variation'
  initialPrice: string
  discount: string
  newPrice: string
  size?: 'Small' | 'Medium'
  orientation?: 'Vertical' | 'Horizontal'
  image?: string,
  rating?: string
}

export const Card1: React.FC<CardProps> = ({ title, size, orientation, type, subtitle,
  initialPrice = '', discount = '', newPrice = '', image = '', rating = '' }) => {
  let styles
  if (type === 'Product') {
    if (orientation === 'Horizontal') {
      styles = size === 'Medium' ? stylesHorizontalMedium : stylesHorizontalSmall
    } else {
      styles = stylesVertical
    }
  } else {
    styles = type === 'Collection' ? stylesCollection : stylesVariation
  }

  return (
    <View style={styles.card}>
      <View>
        {orientation === 'Vertical' && type === 'Product' &&
          <View style={{ position: 'absolute', top: 3, right: 3, zIndex: 1 }}> 
          <ButtonRegular iconLeft={'favorite'} size={ButtonRegularSize.Small} type={ButtonRegularType.FilledCircle} color={ButtonRegularColor.Light}></ButtonRegular></View>}
        {type !== 'Collection'
          ? <Image style={styles.image} source={{ uri: image }} />
          : <Thumbnail image={image} type='1 Image'></Thumbnail>
        }
      </View>
      <View style={styles.cardbody}>
        {type === 'Product'
          ? <View>
            <Text style={themeGlobal.themeGlobalText.h6}>
              {title}
            </Text>
            <PriceComponent size={size} initialPrice={initialPrice} newPrice={newPrice} discount={discount} ></PriceComponent>
            {type === 'Product' && orientation === 'Vertical' && <RatingProduct size='Small' text={rating}></RatingProduct>}
          </View>
          : <View><CardBody text={subtitle} title={title}></CardBody></View>}

      </View>
    </View>
  )
}
export default Card1
const stylesHorizontalMedium = StyleSheet.create({
  card: {
    flexShrink: 0,
    width: 238,
    flexDirection: 'row',
    alignItems: 'flex-start',
    columnGap: 16,
    borderRadius: 12
  },
  image: {
    flexShrink: 0,
    width: 80,
    height: 80,
    borderRadius: 8
  },
  cardbody: {
    alignSelf: 'stretch',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    alignItems: 'flex-start',
    justifyContent: 'center',
    rowGap: 4
  }
})
const stylesHorizontalSmall = StyleSheet.create({
  card: {
    flexShrink: 0,
    width: 184,
    flexDirection: 'row',
    alignItems: 'flex-start',
    columnGap: 12,
    borderRadius: 12
  },
  image: {
    flexShrink: 0,
    width: 56,
    height: 56,
    borderRadius: 8
  },
  cardbody: {
    alignSelf: 'stretch',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    alignItems: 'flex-start',
    justifyContent: 'center',
    rowGap: 2
  }
})

const stylesVertical = StyleSheet.create({
  card: {
    flexShrink: 0,
    width: 144,
    alignItems: 'flex-start',
    rowGap: 0,
    borderRadius: 12
  },
  image: {
    alignSelf: 'stretch',
    flexShrink: 0,
    height: 144,
    width: 144,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 0,
    borderLeftWidth: 1,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderColor: 'rgba(225, 229, 235, 1)'
  },
  cardbody: {
    alignSelf: 'stretch',
    flexShrink: 0,
    borderTopWidth: 0,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    alignItems: 'flex-start',
    rowGap: 2,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderColor: 'rgba(225, 229, 235, 1)'
  }
})

const stylesCollection = StyleSheet.create({
  card: {
    flexShrink: 0,
    width: 144,
    alignItems: 'flex-start',
    rowGap: 0,
    borderRadius: 12
  },
  cardbody: {
    alignSelf: 'stretch',
    flexShrink: 0,
    alignItems: 'flex-start',
    rowGap: 0,
    paddingVertical: 4,
    paddingHorizontal: 8
  },
  image: {}
})
const stylesVariation = StyleSheet.create({
  card: {
    flexShrink: 0,
    width: 144,
    flexDirection: 'row',
    alignItems: 'flex-start',
    columnGap: 8,
    borderRadius: 12
  },
  image: {
    flexShrink: 0,
    width: 44,
    height: 44,
    borderRadius: 8
  },
  cardbody: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    alignItems: 'flex-start',
    rowGap: 0,
    paddingVertical: 4,
    paddingHorizontal: 0
  }
})
