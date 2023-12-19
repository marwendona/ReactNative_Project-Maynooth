import { StyleSheet, Text } from 'react-native'
import Icon from './Icon'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

export interface FormCheckboxProps {
  label?: string
  size?: 'Small' | 'Medium'
  state?: 'Uncheck' | 'Check'
}

const FormCheckbox: React.FC<FormCheckboxProps> = ({ label, size }) => {
  const [isChecked, setIsChecked] = useState(false)

  const toggleCheckbox = () => {
    setIsChecked(!isChecked)
  }

  const iconToRender = isChecked ? 'check_box_filled' : 'check_box_blank'

  return (
        <TouchableOpacity style={styles.formCheckbox} onPress={toggleCheckbox}>
            <Icon iconName={iconToRender} size={size} />
            <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>
  )
}

export default FormCheckbox

const styles = StyleSheet.create({
  formCheckbox: {
    flexShrink: 0,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 4
  },
  icon: {
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
    left: 0,
    backgroundColor: 'rgba(217, 217, 217, 1)'
  },
  vector: {
    position: 'absolute',
    flexShrink: 0,
    top: 2,
    right: 2,
    bottom: 2,
    left: 2,
    overflow: 'visible'
  },
  label: {
    flexShrink: 0,
    textAlign: 'left',
    color: 'rgba(9, 17, 31, 1)',
    fontFamily: 'Satoshi Variable',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0,
    lineHeight: 16
  }
})
