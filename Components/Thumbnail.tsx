import React from 'react'
import { StyleSheet, View, Image, type ImageSourcePropType } from 'react-native'

export interface ThumbnailProps {
  type: '1 Image' | '2 Image' | '3 Image' | '4 Image'
  image: ImageSourcePropType
}

export const Thumbnail: React.FC<ThumbnailProps> = ({ type, image }) => {
  return (
        <View >
            {type === '1 Image' && <><View style={styles.root1}>
                <Image source={image} style={styles.image1} contentFit="cover" />
            </View></>}
            {type === '2 Image' && <><View style={styles.root2}>
                <View style={styles.col2} >
                    <Image source={image} style={styles.image2} contentFit="cover" />
                    <Image source={image} style={styles.image2} contentFit="cover" />
                </View>
            </View></>}
            {type === '3 Image' && <><View style={styles.root3}>
                <View style={styles.col31} >
                    <Image source={image} style={styles.image2} contentFit="cover" />
                </View>
                <View style={styles.col32}>
                    <Image source={image} style={styles.image3} contentFit="cover" />
                    <Image source={image} style={styles.image3} contentFit="cover" />
                </View>
            </View></>}
            {type === '4 Image' && <><View style={styles.root4}>
                <View style={styles.col31} >
                    <Image source={image} style={styles.image3} contentFit="cover" />
                    <Image source={image} style={styles.image3} contentFit="cover" />
                </View>
                <View style={styles.col32} >
                    <Image source={image} style={styles.image3} contentFit="cover" />
                    <Image source={image} style={styles.image3} contentFit="cover" />
                </View>
            </View></>}

        </View>
  )
}

const styles = StyleSheet.create({
  root1: {
    width: 144,
    height: 144,
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 2,
    flexShrink: 0
  },
  root2: {
    width: 144,
    height: 144,
    flexDirection: 'column',
    alignItems: 'flex-start',
    rowGap: 2,
    columnGap: 2,
    flexShrink: 0
  },
  root3: {
    flexDirection: 'row',
    width: 144,
    height: 144,
    alignItems: 'flex-start',
    rowGap: 2,
    columnGap: 2,
    flexShrink: 0
  },
  root4: {
    width: 144,
    height: 144,
    flexDirection: 'column',
    alignItems: 'flex-start',
    rowGap: 2,
    columnGap: 2,
    flexShrink: 0
  },
  col2: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    rowGap: 2,
    columnGap: 2,
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    alignSelf: 'stretch'
  },
  col31: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    rowGap: 2,
    columnGap: 2,
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    alignSelf: 'stretch'
  },
  col32: {
    flexDirection: 'column'
  },
  rootType3Image: {
    flexDirection: 'row'
  },

  image1: {
    width: 144,
    height: 144,
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    alignSelf: 'stretch',
    borderRadius: 8
  },
  image2: {
    width: 71,
    height: 144,
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    alignSelf: 'stretch',
    backgroundColor: 'lightgraycoverno-repeat'
  },
  image3: {
    width: 71,
    height: 71,
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    alignSelf: 'stretch',
    backgroundColor: 'lightgraycoverno-repeat'
  }
})
