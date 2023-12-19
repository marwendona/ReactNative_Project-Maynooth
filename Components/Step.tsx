import React from 'react'
import { View, StyleSheet, ImageBackground } from 'react-native'
import { } from 'react-native-svg'

export interface StepProps {
  type: StepType
}

export enum StepType {
  Step1 = 'Step_1',
  Step2 = 'Step_2',
  Step3 = 'Step_3',
  Step4 = 'Step_4',
}

const Steps: React.FC<StepProps> = ({ type }) => {
  let Styles
  switch (type) {
    case StepType.Step1:
      Styles = stylesS1
      break
    case StepType.Step2:
      Styles = stylesS2
      break
    case StepType.Step3:
      Styles = stylesS3
      break
    case StepType.Step4:
      Styles = stylesS4
      break
    default:
      Styles = stylesS1 // Default to Medium type if type is not recognized
      break
  }
  return (
    <ImageBackground
      source={require('../assets/#6f6e73.png')}
      style={Styles.backgroundImage}>
      <View style={Styles.container}>
        <View style={Styles.step}>
          <View style={Styles.rectangle1} />
          <View style={Styles.rectangle2} />
          <View style={Styles.rectangle3} />
          <View style={Styles.rectangle4} />
        </View>
      </View>
    </ImageBackground>
  )
}
export default Steps
const stylesS1 = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover' // or 'stretch' or 'contain'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  step: {
    flexShrink: 0,
    width: 312,
    flexDirection: 'row',
    alignItems: 'flex-start',
    columnGap: 12
  },
  rectangle1: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    height: 6,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 9999
  },
  rectangle2: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    height: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 9999
  },
  rectangle3: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    height: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 9999
  },
  rectangle4: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    height: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 9999
  }
})

const stylesS2 = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover' // or 'stretch' or 'contain'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  step: {
    flexShrink: 0,
    width: 312,
    flexDirection: 'row',
    alignItems: 'flex-start',
    columnGap: 12
  },
  rectangle1: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    height: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 9999
  },
  rectangle2: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    height: 6,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 9999
  },
  rectangle3: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    height: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 9999
  },
  rectangle4: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    height: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 9999
  }
})
const stylesS3 = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover' // or 'stretch' or 'contain'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  step: {
    flexShrink: 0,
    width: 312,
    flexDirection: 'row',
    alignItems: 'flex-start',
    columnGap: 12
  },
  rectangle1: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    height: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 9999
  },
  rectangle2: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    height: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 9999
  },
  rectangle3: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    height: 6,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 9999
  },
  rectangle4: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    height: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 9999
  }
})
const stylesS4 = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  step: {
    flexShrink: 0,
    width: 312,
    flexDirection: 'row',
    alignItems: 'flex-start',
    columnGap: 12
  },
  rectangle1: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    height: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 9999
  },
  rectangle2: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    height: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 9999
  },
  rectangle3: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    height: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 9999
  },
  rectangle4: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    height: 6,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 9999
  }
})
