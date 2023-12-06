import { StyleSheet, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'

interface TextareaProps {
  placeholder?: string
}
const Textarea: React.FC<TextareaProps> = ({ placeholder = 'Placeholder' }) => {
  const [value, onChangeText] = React.useState(placeholder)

  return (
    <View style={styles.formTextarea}>
      <View style={styles.inputvaluewrapper}>
          <TextInput
        editable
        multiline
        numberOfLines={4}
        maxLength={40}
        onChangeText={text => onChangeText(text)}
        value={value}
        style={styles.inputvalue}
      />
      </View>
    </View>
  )
}

export default Textarea

const styles = StyleSheet.create({
  formTextarea: {
    alignSelf: 'stretch',
    flexShrink: 0,
    height: 80,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 4,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'rgba(225, 229, 235, 1)',
    borderRadius: 12
  },
  inputvaluewrapper: {
    alignSelf: 'stretch',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    flexDirection: 'row',
    alignItems: 'flex-start',
    columnGap: 0,
    paddingVertical: 2,
    paddingHorizontal: 4
  },
  inputvalue: {
    alignSelf: 'stretch',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    textAlign: 'left',
    color: 'rgba(145, 155, 173, 1)',
    fontFamily: 'Satoshi Variable',
    fontSize: 14,
    fontWeight: '400',
    letterSpacing: 0,
    lineHeight: 20
  }
})
