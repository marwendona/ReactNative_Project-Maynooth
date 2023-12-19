import { ImageBackground, StyleSheet, View } from 'react-native'
import Svg, { Circle } from 'react-native-svg'

export interface PaginationProps {
  size: PaginationSize
  state: PaginationState
}

export enum PaginationSize {
  Small = 'Small',
  Medium = 'Medium',
}

export enum PaginationState {
  Active = 'Active',
  Hover = 'Hover',
  Default = 'Default',
}

const Pagination: React.FC<PaginationProps> = ({ size, state }) => {
  const circleSize = {
    radius: size === PaginationSize.Small ? 6 : 12
  }

  let circleState

  switch (state) {
    case PaginationState.Active:
      circleState = stylesActive
      break
    case PaginationState.Hover:
      circleState = stylesHover
      break
    case PaginationState.Default:
      circleState = stylesDefault
      break
    default:
      circleState = stylesDefault
      break
  }

  return (
        <View style={styles.baseDot}>
            <ImageBackground style={styles.photo} source={require('../assets/#6f6e73.png')}>
            <Svg style={styles.dot} width="12" height="12" viewBox="-125 -70 12 12" fill="none" >
                <Circle cx="6" cy="8" r={circleSize.radius} transform="rotate(-90 6 6)" fill={circleState.cercle.color} />
           </Svg>
           </ImageBackground>
        </View>
  )
}

export default Pagination

const styles = StyleSheet.create({
  photo: {
    zIndex: -1,
    flexShrink: 0,
    height: 154,
    width: 256,
    alignItems: 'flex-start',
    rowGap: 0,
    borderRadius: 12,
    overflow: 'hidden'
  },
  baseDot: {
    flexShrink: 0,
    height: 12,
    width: 12,
    transform: [
      {
        rotateZ: '-90.00deg'
      }
    ],
    alignItems: 'flex-start',
    rowGap: 0
  },
  dot: {
    position: 'absolute',
    flexShrink: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    overflow: 'visible'
  }
})

const stylesActive = StyleSheet.create({
  cercle: {
    color: '#09111F'
  }

})

const stylesHover = StyleSheet.create({
  cercle: {
    color: '#F0F2F5'
  }

})

const stylesDefault = StyleSheet.create({
  cercle: {
    color: 'white'
  }

})
