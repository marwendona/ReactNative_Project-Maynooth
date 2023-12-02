import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Svg, Path } from 'react-native-svg'
interface IconsFilledStarProps {
  size: 'Small' | 'Medium'
}
const IconsFilledStar: React.FC<IconsFilledStarProps> = ({ size }) => {
  const styles = size === 'Small' ? stylesSmall : stylesMedium

  return (
      <View style={styles.IconsFilledStar}>
      <View style={styles.boundingbox} />
      <Svg style={styles.vector} width="13" height="12" viewBox="0 0 13 12" fill="none" >
          <Path d="M6.04 9.66508L3.11226 11.4288C2.98292 11.5111 2.8477 11.5464 2.7066 11.5346C2.56551 11.5228 2.44205 11.4758 2.33623 11.3935C2.2304 11.3112 2.1481 11.2083 2.08931 11.0849C2.03052 10.9614 2.01876 10.8232 2.05403 10.6704L2.83006 7.337L0.237421 5.0971C0.119841 4.99128 0.0463537 4.87076 0.0169587 4.73554C-0.0124364 4.60032 -0.00361785 4.46804 0.0434142 4.33871C0.0904462 4.20937 0.160994 4.10355 0.255058 4.02124C0.349122 3.93893 0.478461 3.88602 0.643073 3.86251L4.06465 3.56268L5.38743 0.423288C5.44622 0.282192 5.53735 0.17637 5.6608 0.105822C5.78426 0.035274 5.91066 0 6.04 0C6.16934 0 6.29574 0.035274 6.4192 0.105822C6.54266 0.17637 6.63378 0.282192 6.69257 0.423288L8.01535 3.56268L11.4369 3.86251C11.6015 3.88602 11.7309 3.93893 11.8249 4.02124C11.919 4.10355 11.9896 4.20937 12.0366 4.33871C12.0836 4.46804 12.0924 4.60032 12.063 4.73554C12.0336 4.87076 11.9602 4.99128 11.8426 5.0971L9.24994 7.337L10.026 10.6704C10.0612 10.8232 10.0495 10.9614 9.99069 11.0849C9.9319 11.2083 9.8496 11.3112 9.74377 11.3935C9.63795 11.4758 9.51449 11.5228 9.3734 11.5346C9.2323 11.5464 9.09708 11.5111 8.96775 11.4288L6.04 9.66508Z" fill="#FAB30F" />
      </Svg>
  </View>
  )
}

export default IconsFilledStar
const stylesSmall = StyleSheet.create({
  IconsFilledStar: {
    flexShrink: 0,
    height: 16,
    width: 16,
    alignItems: 'flex-start',
    rowGap: 0
  },
  boundingbox: {
    position: 'absolute',
    flexShrink: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  vector: {
    position: 'absolute',
    flexShrink: 0,
    top: 2,
    right: 2,
    bottom: 2,
    left: 2,
    overflow: 'visible'
  }
})
const stylesMedium = StyleSheet.create({
  IconsFilledStar: {
    flexShrink: 0,
    height: 20,
    width: 20,
    alignItems: 'flex-start',
    rowGap: 0
  },
  boundingbox: {
    position: 'absolute',
    flexShrink: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  vector: {
    position: 'absolute',
    flexShrink: 0,
    top: 3,
    right: 2,
    bottom: 3,
    left: 3,
    overflow: 'visible'
  }
})
