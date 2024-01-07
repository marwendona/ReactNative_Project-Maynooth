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
            <Svg style={styles.dot} width={circleSize.radius} height={circleSize.radius} viewBox="-125 -70 12 12" fill="none" >
                <Circle cx="6" cy="8" r={circleSize.radius} fill='#09111F'/>
           </Svg>
           <Svg style={styles.dot} width={circleSize.radius} height={circleSize.radius} viewBox="-125 -70 12 12" fill="none" >
                <Circle cx="6" cy="8" r={circleSize.radius} fill='white' />
           </Svg>
           <Svg style={styles.dot} width={circleSize.radius} height={circleSize.radius} viewBox="-125 -70 12 12" fill="none" >
                <Circle cx="6" cy="8" r={circleSize.radius} fill='white' />
           </Svg>
           <Svg style={styles.dot} width={circleSize.radius} height={circleSize.radius} viewBox="-125 -70 12 12" fill="none" >
                <Circle cx="6" cy="8" r={circleSize.radius} fill='white' />
           </Svg>
        </View>
  )
}

export default Pagination

const styles = StyleSheet.create({
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
    margin:6,
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
