import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Animated, Button, Modal } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import Card1 from '../../Components/Card1';
import Icon from '../../Components/Icon';
import { ScrollView, TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import ButtonRegular from '../../Components/ButtonRegular';

interface SearchFilterProps {
    isVisible: boolean;
    onClose: () => void;
  }
  const SearchFilter: React.FC<SearchFilterProps> = ({ isVisible, onClose }) => {

    const scaleValue = new Animated.Value(1);

    const handleIconPress = () => {
        // Animation logic
        Animated.sequence([
            Animated.timing(scaleValue, { toValue: 1.2, duration: 100, useNativeDriver: true }),
            Animated.timing(scaleValue, { toValue: 1, duration: 100, useNativeDriver: true }),
        ]).start();
    };
    return (
        
        <Modal visible={isVisible} onBackdropPress={onClose} transparent={true}   animationType="slide" backdropTransitionOutTiming={100} style={{ margin: 0 }}>

            <View style={{ flex: 10, justifyContent: 'center' }}>

                <View style={{ backgroundColor: 'white', padding: 0 }} >

                <View style={styles.searchFilter}>
                    <View style={styles.modal}>
                        <View style={styles.modalbackdrop} />
                        <View style={styles.modaldialog}>
                            <View style={styles.modalheader}>
                                <Text style={styles.filter}>
                                    {`Filter`}
                                </Text>
                                <View style={styles.buttonclosemodal}>
                                    <TouchableOpacity  onPress={() => onClose()}>  
                                        <Icon  iconName='close' size='Small'></Icon>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.modalbody}>
                                <View style={styles._______price}>
                                    <View style={styles.labelprice}>
                                        <View style={styles.left}>
                                            <Text style={styles.label}>
                                                {`Price range`}
                                            </Text>
                                        </View>
                                        <View style={styles.right} />
                                    </View>
                                    <View style={styles._inputwrapper}>
                                        <View style={styles.inputminprice}>
                                            <View style={styles.inputvaluewrapper}>
                                                <TextInput style={styles.__inputvalue} placeholder='Minimum price'>

                                                </TextInput>
                                            </View>
                                        </View>
                                        <View style={styles.divider}>
                                            <View style={styles.____textwrapper}>
                                                <Text style={styles.text}>
                                                    {`to`}
                                                </Text>
                                            </View>
                                        </View>
                                        <View style={styles.inputmaxprice}>
                                            <View style={styles.inputvaluewrapper}>
                                                <TextInput style={styles.__inputvalue} placeholder='Maximum price'>

                                                </TextInput>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles._______price}>
                                    <View style={styles.labelrating}>
                                        <View style={styles.left}>
                                            <Text style={styles.label}>
                                                {`Rating`}
                                            </Text>
                                        </View>
                                        <View style={styles.right} />
                                    </View>
                                    <View style={styles._items}>
                                        <View style={styles.star_colors_living}>
                                            <View style={styles.iconleft}>
                                                <Icon iconName='star' color="#FAB30F"></Icon>
                                            </View>
                                            <View style={styles._____textwrapper}>
                                                <Text style={styles.text}>
                                                    {`5`}
                                                </Text>
                                            </View>
                                        </View>
                                        <View style={styles.star_colors_living}>
                                            <View style={styles.iconleft}>
                                                <Icon iconName='star' color="#FAB30F"></Icon>
                                            </View>
                                            <View style={styles.____textwrapper}>
                                                <Text style={styles.text}>
                                                    {`4`}
                                                </Text>
                                            </View>
                                        </View>
                                        <View style={styles.star_colors_living}>
                                            <View style={styles.iconleft}>
                                                <Icon iconName='star' color="#FAB30F"></Icon>
                                            </View>
                                            <View style={styles.____textwrapper}>
                                                <Text style={styles.text}>
                                                    {`3`}
                                                </Text>
                                            </View>
                                        </View>
                                        <View style={styles.star_colors_living}>
                                            <View style={styles.iconleft}>
                                                <Icon iconName='star' color="#FAB30F"></Icon>
                                            </View>
                                            <View style={styles.____textwrapper}>
                                                <Text style={styles.text}>
                                                    {`2`}
                                                </Text>
                                            </View>
                                        </View>
                                        <View style={styles.star_colors_living}>
                                            <View style={styles.iconleft}>
                                                <Icon iconName='star' color="#FAB30F"></Icon>
                                            </View>
                                            <View style={styles.____textwrapper}>
                                                <Text style={styles.text}>
                                                    {`1`}
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles._______price}>
                                    <View style={styles.labelroom}>
                                        <View style={styles.left}>
                                            <Text style={styles.label}>
                                                {`Room`}
                                            </Text>
                                        </View>
                                        <View style={styles.right} />
                                    </View>
                                    <View style={styles._______price}>
                                        <View style={styles.row}>
                                            <View style={styles.star_colors_living}>
                                                <View style={styles.____textwrapper}>
                                                    <TouchableOpacity onPress={handleIconPress}>
                                                        <Text style={styles.text}>
                                                            {`Bedroom`}
                                                        </Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                            <View style={styles.star_colors_living}>
                                                <View style={styles.____textwrapper}>
                                                    <TouchableOpacity onPress={handleIconPress}>
                                                        <Text style={styles.text}>
                                                            {`Dining room`}
                                                        </Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                            <View style={styles.star_colors_living}>
                                                <View style={styles.____textwrapper}>
                                                    <TouchableOpacity onPress={handleIconPress}>
                                                        <Text style={styles.text}>
                                                            {`Kids`}
                                                        </Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        </View>
                                        <View style={styles._row}>
                                            <View style={styles.star_colors_living}>
                                                <View style={styles.____textwrapper}>
                                                    <TouchableOpacity onPress={handleIconPress}>
                                                        <Text style={styles.text}>
                                                            {`Living room`}
                                                        </Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                            <View style={styles.star_colors_living}>
                                                <View style={styles.____textwrapper}>
                                                    <TouchableOpacity onPress={handleIconPress}>
                                                        <Text style={styles.text}>
                                                            {`Office`}
                                                        </Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                            <View style={styles.star_colors_living}>
                                                <View style={styles.____textwrapper}>
                                                    <TouchableOpacity onPress={handleIconPress}>
                                                        <Text style={styles.text}>
                                                            {`Outdoor`}
                                                        </Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles._______price}>
                                    <View style={styles.labelcolor}>
                                        <View style={styles.left}>
                                            <TouchableOpacity onPress={handleIconPress}>
                                                <Text style={styles.label}>
                                                    {`Color`}
                                                </Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={styles.right} />
                                    </View>
                                    <View style={styles.___items}>
                                        <View style={styles.__row}>
                                            <TouchableOpacity onPress={handleIconPress}>
                                                <View style={styles.star_colors_living}>
                                                    <View style={styles.icon}>{/*left*/}
                                                        <View style={styles.boundingbox} />
                                                        <Svg style={styles.vector} width="14" height="14" viewBox="0 0 14 14" fill="none" >
                                                            <Path d="M7.00004 13.6667C6.07782 13.6667 5.21115 13.4917 4.40004 13.1417C3.58893 12.7917 2.88337 12.3167 2.28337 11.7167C1.68337 11.1167 1.20837 10.4112 0.858374 9.60004C0.508374 8.78893 0.333374 7.92226 0.333374 7.00004C0.333374 6.07782 0.508374 5.21115 0.858374 4.40004C1.20837 3.58893 1.68337 2.88337 2.28337 2.28337C2.88337 1.68337 3.58893 1.20837 4.40004 0.858374C5.21115 0.508374 6.07782 0.333374 7.00004 0.333374C7.92226 0.333374 8.78893 0.508374 9.60004 0.858374C10.4112 1.20837 11.1167 1.68337 11.7167 2.28337C12.3167 2.88337 12.7917 3.58893 13.1417 4.40004C13.4917 5.21115 13.6667 6.07782 13.6667 7.00004C13.6667 7.92226 13.4917 8.78893 13.1417 9.60004C12.7917 10.4112 12.3167 11.1167 11.7167 11.7167C11.1167 12.3167 10.4112 12.7917 9.60004 13.1417C8.78893 13.4917 7.92226 13.6667 7.00004 13.6667Z" fill="black" />
                                                        </Svg>
                                                    </View>
                                                    <View style={styles.____textwrapper}>
                                                        <Text style={styles.text}>
                                                            {`Black`}
                                                        </Text>
                                                    </View>
                                                </View>
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={handleIconPress}>
                                                <View style={styles.star_colors_living}>
                                                    <View style={styles.iconleft}>
                                                        <View style={styles.boundingbox} />
                                                        <Svg style={styles.vector} width="14" height="14" viewBox="0 0 14 14" fill="none" >
                                                            <Path d="M7.00004 13.6667C6.07782 13.6667 5.21115 13.4917 4.40004 13.1417C3.58893 12.7917 2.88337 12.3167 2.28337 11.7167C1.68337 11.1167 1.20837 10.4112 0.858374 9.60004C0.508374 8.78893 0.333374 7.92226 0.333374 7.00004C0.333374 6.07782 0.508374 5.21115 0.858374 4.40004C1.20837 3.58893 1.68337 2.88337 2.28337 2.28337C2.88337 1.68337 3.58893 1.20837 4.40004 0.858374C5.21115 0.508374 6.07782 0.333374 7.00004 0.333374C7.92226 0.333374 8.78893 0.508374 9.60004 0.858374C10.4112 1.20837 11.1167 1.68337 11.7167 2.28337C12.3167 2.88337 12.7917 3.58893 13.1417 4.40004C13.4917 5.21115 13.6667 6.07782 13.6667 7.00004C13.6667 7.92226 13.4917 8.78893 13.1417 9.60004C12.7917 10.4112 12.3167 11.1167 11.7167 11.7167C11.1167 12.3167 10.4112 12.7917 9.60004 13.1417C8.78893 13.4917 7.92226 13.6667 7.00004 13.6667Z" fill="#0856DB" />
                                                        </Svg>
                                                    </View>
                                                    <View style={styles.____textwrapper}>
                                                        <Text style={styles.text}>
                                                            {`Blue`}
                                                        </Text>
                                                    </View>
                                                </View>
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={handleIconPress}>
                                                <View style={styles.star_colors_living}>
                                                    <View style={styles.iconleft}>
                                                        <View style={styles.boundingbox} />
                                                        <Svg style={styles.vector} width="14" height="14" viewBox="0 0 14 14" fill="none" >
                                                            <Path d="M7.00004 13.6667C6.07782 13.6667 5.21115 13.4917 4.40004 13.1417C3.58893 12.7917 2.88337 12.3167 2.28337 11.7167C1.68337 11.1167 1.20837 10.4112 0.858374 9.60004C0.508374 8.78893 0.333374 7.92226 0.333374 7.00004C0.333374 6.07782 0.508374 5.21115 0.858374 4.40004C1.20837 3.58893 1.68337 2.88337 2.28337 2.28337C2.88337 1.68337 3.58893 1.20837 4.40004 0.858374C5.21115 0.508374 6.07782 0.333374 7.00004 0.333374C7.92226 0.333374 8.78893 0.508374 9.60004 0.858374C10.4112 1.20837 11.1167 1.68337 11.7167 2.28337C12.3167 2.88337 12.7917 3.58893 13.1417 4.40004C13.4917 5.21115 13.6667 6.07782 13.6667 7.00004C13.6667 7.92226 13.4917 8.78893 13.1417 9.60004C12.7917 10.4112 12.3167 11.1167 11.7167 11.7167C11.1167 12.3167 10.4112 12.7917 9.60004 13.1417C8.78893 13.4917 7.92226 13.6667 7.00004 13.6667Z" fill="#919BAD" />
                                                        </Svg>
                                                    </View>
                                                    <View style={styles.____textwrapper}>
                                                        <Text style={styles.text}>
                                                            {`Gray`}
                                                        </Text>
                                                    </View>
                                                </View>
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={handleIconPress}>
                                                <View style={styles.star_colors_living}>
                                                    <View style={styles.iconleft}>
                                                        <View style={styles.boundingbox} />
                                                        <Svg style={styles.vector} width="14" height="14" viewBox="0 0 14 14" fill="none" >
                                                            <Path d="M7.00004 13.6667C6.07782 13.6667 5.21115 13.4917 4.40004 13.1417C3.58893 12.7917 2.88337 12.3167 2.28337 11.7167C1.68337 11.1167 1.20837 10.4112 0.858374 9.60004C0.508374 8.78893 0.333374 7.92226 0.333374 7.00004C0.333374 6.07782 0.508374 5.21115 0.858374 4.40004C1.20837 3.58893 1.68337 2.88337 2.28337 2.28337C2.88337 1.68337 3.58893 1.20837 4.40004 0.858374C5.21115 0.508374 6.07782 0.333374 7.00004 0.333374C7.92226 0.333374 8.78893 0.508374 9.60004 0.858374C10.4112 1.20837 11.1167 1.68337 11.7167 2.28337C12.3167 2.88337 12.7917 3.58893 13.1417 4.40004C13.4917 5.21115 13.6667 6.07782 13.6667 7.00004C13.6667 7.92226 13.4917 8.78893 13.1417 9.60004C12.7917 10.4112 12.3167 11.1167 11.7167 11.7167C11.1167 12.3167 10.4112 12.7917 9.60004 13.1417C8.78893 13.4917 7.92226 13.6667 7.00004 13.6667Z" fill="#08C754" />
                                                        </Svg>
                                                    </View>
                                                    <View style={styles.____textwrapper}>
                                                        <Text style={styles.text}>
                                                            {`Green`}
                                                        </Text>
                                                    </View>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={styles.__row}>
                                            <TouchableOpacity onPress={handleIconPress}>
                                                <View style={styles.star_colors_living}>
                                                    <View style={styles.iconleft}>
                                                        <View style={styles.boundingbox} />
                                                        <Svg style={styles.vector} width="14" height="14" viewBox="0 0 14 14" fill="none" >
                                                            <Path d="M7.00004 13.6667C6.07782 13.6667 5.21115 13.4917 4.40004 13.1417C3.58893 12.7917 2.88337 12.3167 2.28337 11.7167C1.68337 11.1167 1.20837 10.4112 0.858374 9.60004C0.508374 8.78893 0.333374 7.92226 0.333374 7.00004C0.333374 6.07782 0.508374 5.21115 0.858374 4.40004C1.20837 3.58893 1.68337 2.88337 2.28337 2.28337C2.88337 1.68337 3.58893 1.20837 4.40004 0.858374C5.21115 0.508374 6.07782 0.333374 7.00004 0.333374C7.92226 0.333374 8.78893 0.508374 9.60004 0.858374C10.4112 1.20837 11.1167 1.68337 11.7167 2.28337C12.3167 2.88337 12.7917 3.58893 13.1417 4.40004C13.4917 5.21115 13.6667 6.07782 13.6667 7.00004C13.6667 7.92226 13.4917 8.78893 13.1417 9.60004C12.7917 10.4112 12.3167 11.1167 11.7167 11.7167C11.1167 12.3167 10.4112 12.7917 9.60004 13.1417C8.78893 13.4917 7.92226 13.6667 7.00004 13.6667Z" fill="#E50D24" />
                                                        </Svg>
                                                    </View>
                                                    <View style={styles.____textwrapper}>
                                                        <Text style={styles.text}>
                                                            {`Red`}
                                                        </Text>
                                                    </View>
                                                </View>
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={handleIconPress}>
                                                <View style={styles.star_colors_living}>
                                                    <View style={styles.iconleft}>
                                                        <View style={styles.boundingbox} />
                                                        <Svg style={styles.vector} width="14" height="14" viewBox="0 0 14 14" fill="none" >
                                                            <Path d="M7.00004 13.6667C6.07782 13.6667 5.21115 13.4917 4.40004 13.1417C3.58893 12.7917 2.88337 12.3167 2.28337 11.7167C1.68337 11.1167 1.20837 10.4112 0.858374 9.60004C0.508374 8.78893 0.333374 7.92226 0.333374 7.00004C0.333374 6.07782 0.508374 5.21115 0.858374 4.40004C1.20837 3.58893 1.68337 2.88337 2.28337 2.28337C2.88337 1.68337 3.58893 1.20837 4.40004 0.858374C5.21115 0.508374 6.07782 0.333374 7.00004 0.333374C7.92226 0.333374 8.78893 0.508374 9.60004 0.858374C10.4112 1.20837 11.1167 1.68337 11.7167 2.28337C12.3167 2.88337 12.7917 3.58893 13.1417 4.40004C13.4917 5.21115 13.6667 6.07782 13.6667 7.00004C13.6667 7.92226 13.4917 8.78893 13.1417 9.60004C12.7917 10.4112 12.3167 11.1167 11.7167 11.7167C11.1167 12.3167 10.4112 12.7917 9.60004 13.1417C8.78893 13.4917 7.92226 13.6667 7.00004 13.6667Z" fill="white" />
                                                        </Svg>
                                                    </View>
                                                    <View style={styles.____textwrapper}>
                                                        <Text style={styles.text}>
                                                            {`White`}
                                                        </Text>
                                                    </View>
                                                </View>
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={handleIconPress}>
                                                <View style={styles.star_colors_living}>
                                                    <View style={styles.iconleft}>
                                                        <View style={styles.boundingbox} />
                                                        <Svg style={styles.vector} width="14" height="14" viewBox="0 0 14 14" fill="none" >
                                                            <Path d="M7.00004 13.6667C6.07782 13.6667 5.21115 13.4917 4.40004 13.1417C3.58893 12.7917 2.88337 12.3167 2.28337 11.7167C1.68337 11.1167 1.20837 10.4112 0.858374 9.60004C0.508374 8.78893 0.333374 7.92226 0.333374 7.00004C0.333374 6.07782 0.508374 5.21115 0.858374 4.40004C1.20837 3.58893 1.68337 2.88337 2.28337 2.28337C2.88337 1.68337 3.58893 1.20837 4.40004 0.858374C5.21115 0.508374 6.07782 0.333374 7.00004 0.333374C7.92226 0.333374 8.78893 0.508374 9.60004 0.858374C10.4112 1.20837 11.1167 1.68337 11.7167 2.28337C12.3167 2.88337 12.7917 3.58893 13.1417 4.40004C13.4917 5.21115 13.6667 6.07782 13.6667 7.00004C13.6667 7.92226 13.4917 8.78893 13.1417 9.60004C12.7917 10.4112 12.3167 11.1167 11.7167 11.7167C11.1167 12.3167 10.4112 12.7917 9.60004 13.1417C8.78893 13.4917 7.92226 13.6667 7.00004 13.6667Z" fill="#FAB30F" />
                                                        </Svg>
                                                    </View>
                                                    <View style={styles.____textwrapper}>
                                                        <Text style={styles.text}>
                                                            {`Yellow`}
                                                        </Text>
                                                    </View>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.modalfooter}>
                                <View style={styles.buttonleft}>
                                    <View style={styles.____textwrapper}>
                                        <ButtonRegular text='Reset'></ButtonRegular>
                                    </View>
                                </View>
                                <View style={styles.buttonright}>
                                    <ButtonRegular color='Dark' text='Apply'></ButtonRegular>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            
            </View>
           
  
        </Modal>
    )
}
export default SearchFilter;
const styles = StyleSheet.create({
    searchFilter: {
        flexShrink: 0,
        height: 550,
        width: 390,
        marginBottom: -300,
        backgroundColor: "rgba(255, 255, 255, 1)",
        alignItems: "flex-start",
        rowGap: 0,
        paddingHorizontal: 0
        
    },

    resultsforTable: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 16,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 24
    },
    items: {
        alignSelf: "stretch",
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 24
    },
    col: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        alignItems: "flex-start",
        rowGap: 24
    },
    card: {
        alignSelf: "stretch",
        flexShrink: 0,
        alignItems: "flex-start",
        rowGap: 0,
        borderRadius: 12
    },
    image: {
        alignSelf: "stretch",
        flexShrink: 0,
        height: 144,
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 0,
        borderLeftWidth: 1,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
        borderColor: "rgba(225, 229, 235, 1)"
    },
    cardbody: {
        alignSelf: "stretch",
        flexShrink: 0,
        borderTopWidth: 0,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 12,
        borderBottomLeftRadius: 12,
        backgroundColor: "rgba(255, 255, 255, 1)",
        alignItems: "flex-start",
        rowGap: 2,
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderColor: "rgba(225, 229, 235, 1)"
    },
 
    price: {
        alignSelf: "stretch",
        flexShrink: 0,
        paddingTop: 0,
        paddingBottom: 4,
        alignItems: "flex-start",
        rowGap: 0,
        paddingHorizontal: 0
    },

    label: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(8, 199, 84, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16
    },
    ratingProduct: {
        flexShrink: 0,
        paddingTop: 0,
        paddingBottom: 4,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 2,
        paddingHorizontal: 0
    },
    iconsFilledStar: {
        flexShrink: 0,
        height: 16,
        width: 16,
        alignItems: "flex-start",
        rowGap: 0
    },
    boundingbox: {
        position: "absolute",
        flexShrink: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: "rgba(217, 217, 217, 1)"
    },
    vector: {
        position: "absolute",
        flexShrink: 0,
        top: 1,
        right: 1,
        bottom: 1,
        left: 1,
        overflow: "visible"
    },
    _label: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(76, 89, 112, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16
    },
    buttonfloating: {
        position: "absolute",
        flexShrink: 0,
        top: 12,
        right: 12,
        backgroundColor: "rgba(255, 255, 255, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 2,
        padding: 6,
        borderRadius: 9999
    },
    icon: {
        flexShrink: 0,
        height: 16,
        width: 16,
        alignItems: "flex-start",
        rowGap: 0
    },

    iconleft: {
        flexShrink: 0,
        height: 20,
        width: 20,
        alignItems: "flex-start",
        rowGap: 0
    },

    inputvaluewrapper: {
        alignSelf: "stretch",
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 0,
        paddingVertical: 2,
        paddingHorizontal: 4
    },
    inputvalue: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 14,
        fontWeight: "400",
        letterSpacing: 0,
        lineHeight: 20
    },
    itemrightwrapper: {
        flexShrink: 0,
        paddingLeft: 4,
        paddingRight: 0,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 0,
        paddingVertical: 0
    },
    itemright: {
        flexShrink: 0,
        height: 40,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 4,
        padding: 10,
        borderRadius: 9999
    },
    iconsOutlineTune: {
        flexShrink: 0,
        height: 20,
        width: 20,
        alignItems: "flex-start",
        rowGap: 0
    },

    tabssort: {
        alignSelf: "stretch",
        flexShrink: 0,
        paddingTop: 0,
        paddingBottom: 12,
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 1,
        borderLeftWidth: 0,
        backgroundColor: "rgba(255, 255, 255, 1)",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        columnGap: 14,
        paddingHorizontal: 24,
        borderColor: "rgba(225, 229, 235, 1)"
    },
    relevance: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        columnGap: 0,
        paddingVertical: 1,
        paddingHorizontal: 0
    },
    textwrapper: {
        flexShrink: 0,
        paddingTop: 0,
        paddingBottom: 2,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 0,
        paddingHorizontal: 0
    },
    text: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16
    },
    latest: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        columnGap: 0,
        paddingVertical: 1,
        paddingHorizontal: 0
    },

    _text: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(76, 89, 112, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16
    },
    topsales: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        columnGap: 0,
        paddingVertical: 1,
        paddingHorizontal: 0
    },
 
    
    ______price: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        columnGap: 0,
        paddingVertical: 1,
        paddingHorizontal: 0
    },

    modal: {
        position: "absolute",
        flexShrink: 0,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        paddingTop: 64,
        paddingBottom: 0,
        alignItems: "center",
        justifyContent: "flex-end",
        rowGap: 0,
        paddingHorizontal: 0
    },
    modalbackdrop: {
        position: "absolute",
        flexShrink: 0,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "rgba(0, 0, 0, 0)", // Fully transparent
        alignItems: "flex-start",
        rowGap: 0
      },
      
    modaldialog: {
        alignSelf: "stretch",
        flexShrink: 0,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
        backgroundColor: "rgba(255, 255, 255, 1)",
        alignItems: "flex-start",
        rowGap: 0
    },
    modalheader: {
        alignSelf: "stretch",
        flexShrink: 0,
        paddingLeft: 24,
        paddingRight: 16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        columnGap: 0,
        paddingVertical: 12
    },
    filter: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 16,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 24
    },
    buttonclosemodal: {
        flexShrink: 0,
        backgroundColor: "rgba(255, 255, 255, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 2,
        padding: 6,
        borderRadius: 9999
    },
 
    modalbody: {
        alignSelf: "stretch",
        flexShrink: 0,
        paddingTop: 10,
        paddingBottom: 76,
        alignItems: "flex-start",
        rowGap: 24,
        paddingHorizontal: 24
    },
    _______price: {
        alignSelf: "stretch",
        flexShrink: 0,
        alignItems: "flex-start",
        rowGap: 8
    },
    labelprice: {
        flexShrink: 0,
        width: 312,
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        columnGap: 12
    },
    left: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        columnGap: 4
    },

    right: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        columnGap: 4
    },
    _inputwrapper: {
        alignSelf: "stretch",
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 0
    },
    inputminprice: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        backgroundColor: "rgba(255, 255, 255, 1)",
        flexDirection: "row",
        alignItems: "center",
        columnGap: 4,
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: "rgba(225, 229, 235, 1)",
        borderRadius: 12
    },
 
    _inputvalue: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        textAlign: "left",
        color: "rgba(145, 155, 173, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 14,
        fontWeight: "400",
        letterSpacing: 0,
        lineHeight: 20
    },
    divider: {
        flexShrink: 0,
        width: 39,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 0
    },
    ____textwrapper: {
        flexShrink: 0,
        paddingTop: 2,
        paddingBottom: 6,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 0,
        paddingHorizontal: 8
    },

    inputmaxprice: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        backgroundColor: "rgba(255, 255, 255, 1)",
        flexDirection: "row",
        alignItems: "center",
        columnGap: 4,
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: "rgba(225, 229, 235, 1)",
        borderRadius: 12
    },

    __inputvalue: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        textAlign: "left",
        color: "rgba(145, 155, 173, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 14,
        fontWeight: "400",
        letterSpacing: 0,
        lineHeight: 20
    },
 
    labelrating: {
        alignSelf: "stretch",
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        columnGap: 12
    },

  
    _items: {
        alignSelf: "stretch",
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 8
    },

    star_colors_living: {
        flexShrink: 0,
        backgroundColor: "rgba(240, 242, 245, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 0,
        padding: 6,
        borderRadius: 8
    },



    _____textwrapper: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 0,
        paddingVertical: 0,
        paddingHorizontal: 4
    },




    labelroom: {
        alignSelf: "stretch",
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        columnGap: 12
    },

    row: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 8
    },

  

    _row: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 8
    },

    labelcolor: {
        alignSelf: "stretch",
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        columnGap: 12
    },

    ___items: {
        flexShrink: 0,
        alignItems: "flex-start",
        rowGap: 8
    },
    __row: {
        flexShrink: 0,
        width: 312,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 8
    },


    

 

    modalfooter: {
        position: "absolute",
        flexShrink: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "rgba(255, 255, 255, 1)",
        flexDirection: "row",
        alignItems: "center",
        columnGap: 12,
        paddingVertical: 12,
        paddingHorizontal: 24
    },
    buttonleft: {
        flexShrink: 0,
        backgroundColor: "rgba(255, 255, 255, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 4,
        padding: 10,
        borderWidth: 1,
        borderColor: "rgba(225, 229, 235, 1)",
        borderRadius: 12
    },

    _______________________text: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 14,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 20
    },
    buttonright: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        backgroundColor: "rgba(9, 17, 31, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 4,
        padding: 10,
        borderRadius: 12
    },

    ________________________text: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(255, 255, 255, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 14,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 20
    }
})