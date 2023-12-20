import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Animated, Button } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import Card1 from '../Components/Card1';
import Icon from '../Components/Icon';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import ButtonRegular from '../Components/ButtonRegular';

export default function SearchFilter() {
    const scaleValue = new Animated.Value(1);

    const handleIconPress = () => {
        // Animation logic
        Animated.sequence([
            Animated.timing(scaleValue, { toValue: 1.2, duration: 100, useNativeDriver: true }),
            Animated.timing(scaleValue, { toValue: 1, duration: 100, useNativeDriver: true }),
        ]).start();
    };
    return (
        <View style={styles.searchFilter}>
            <View style={styles.searchresult}>
                <View style={styles.title}>
                    <Text style={styles.resultsforTable}>
                        {`712 results for Table`}
                    </Text>
                </View>
                <View style={styles.items}>
                    <Card1 size='Small' image='assets/SingleDrawer.jpg' title='Single Drawer Beds' initialPrice='Rp 800.000' newPrice='Rp 600.000' discount='25%' type='Product'
                        orientation='Vertical' > </Card1>
                    <Card1 rating='5.0' size='Small' image='assets/DoubleDrawer.jpg' title='Double Drawer Bed' initialPrice='Rp 1.500.000' newPrice='Rp 900.000' discount='40%' type='Product'
                        orientation='Vertical'  > </Card1>
                </View>
            </View>
            <View style={styles.navbar}>
                <View style={styles.tabssort}>
                    <View style={styles.relevance}>
                        <View style={styles.textwrapper}>
                            <TouchableOpacity onPress={handleIconPress}>
                                <Text style={styles.text}>
                                    {`Relevance`}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.latest}>
                        <View style={styles._textwrapper}>
                            <TouchableOpacity onPress={handleIconPress}>
                                <Text style={styles._text}>
                                    {`Latest`}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.topsales}>
                        <View style={styles.__textwrapper}>
                            <TouchableOpacity onPress={handleIconPress}>
                                <Text style={styles.__text}>
                                    {`Top sales`}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.price}>
                        <View style={styles.___textwrapper}>
                            <Text style={styles.___text}>
                                {`Price`}
                            </Text>
                            <Icon iconName={'unfold_more'} size={'Small'} />
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.modal}>
                {/* Vigma RN:: can be replaced with <Modalbackdrop  /> */}
                <View style={styles.modalbackdrop} />
                <View style={styles.modaldialog}>
                    <View style={styles.modalheader}>
                        <Text style={styles.filter}>
                            {`Filter`}
                        </Text>
                        <View style={styles.buttonclosemodal}>
                            <TouchableOpacity onPress={handleIconPress}>
                                <Icon iconName='close' size='Small'></Icon>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.modalbody}>
                        <View style={styles._______price}>
                            <View style={styles.labelprice}>
                                <View style={styles.left}>
                                    <Text style={styles.____________label}>
                                        {`Price range`}
                                    </Text>
                                </View>
                                <View style={styles.right} />
                            </View>
                            <View style={styles._inputwrapper}>
                                <View style={styles.inputminprice}>
                                    <View style={styles._inputvaluewrapper}>
                                        <TextInput style={styles.__inputvalue} placeholder='Minimum price'>

                                        </TextInput>
                                    </View>
                                </View>
                                <View style={styles.divider}>
                                    <View style={styles.____textwrapper}>
                                        <Text style={styles.____text}>
                                            {`to`}
                                        </Text>
                                    </View>
                                </View>
                                <View style={styles.inputmaxprice}>
                                    <View style={styles.__inputvaluewrapper}>
                                        <TextInput style={styles.__inputvalue} placeholder='Maximum price'>

                                        </TextInput>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.rating}>
                            <View style={styles.labelrating}>
                                <View style={styles._left}>
                                    <Text style={styles._____________label}>
                                        {`Rating`}
                                    </Text>
                                </View>
                                <View style={styles._right} />
                            </View>
                            <View style={styles._items}>
                                <View style={styles.star5}>
                                    <View style={styles._iconleft}>
                                        <Icon iconName='star' color="#FAB30F"></Icon>
                                    </View>
                                    <View style={styles._____textwrapper}>
                                        <Text style={styles._____text}>
                                            {`5`}
                                        </Text>
                                    </View>
                                </View>
                                <View style={styles.star4}>
                                    <View style={styles.__iconleft}>
                                        <Icon iconName='star' color="#FAB30F"></Icon>
                                    </View>
                                    <View style={styles.______textwrapper}>
                                        <Text style={styles.______text}>
                                            {`4`}
                                        </Text>
                                    </View>
                                </View>
                                <View style={styles.star3}>
                                    <View style={styles.___iconleft}>
                                        <Icon iconName='star' color="#FAB30F"></Icon>
                                    </View>
                                    <View style={styles._______textwrapper}>
                                        <Text style={styles._______text}>
                                            {`3`}
                                        </Text>
                                    </View>
                                </View>
                                <View style={styles.star2}>
                                    <View style={styles.____iconleft}>
                                        <Icon iconName='star' color="#FAB30F"></Icon>
                                    </View>
                                    <View style={styles.________textwrapper}>
                                        <Text style={styles.________text}>
                                            {`2`}
                                        </Text>
                                    </View>
                                </View>
                                <View style={styles.star1}>
                                    <View style={styles._____iconleft}>
                                        <Icon iconName='star' color="#FAB30F"></Icon>
                                    </View>
                                    <View style={styles._________textwrapper}>
                                        <Text style={styles._________text}>
                                            {`1`}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.room}>
                            <View style={styles.labelroom}>
                                <View style={styles.__left}>
                                    <Text style={styles.______________label}>
                                        {`Room`}
                                    </Text>
                                </View>
                                <View style={styles.__right} />
                            </View>
                            <View style={styles.__items}>
                                <View style={styles.row}>
                                    <View style={styles.bedroom}>
                                        <View style={styles.__________textwrapper}>
                                            <TouchableOpacity onPress={handleIconPress}>
                                                <Text style={styles.__________text}>
                                                    {`Bedroom`}
                                                </Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <View style={styles.diningroom}>
                                        <View style={styles.___________textwrapper}>
                                            <TouchableOpacity onPress={handleIconPress}>
                                                <Text style={styles.___________text}>
                                                    {`Dining room`}
                                                </Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <View style={styles.kids}>
                                        <View style={styles.____________textwrapper}>
                                            <TouchableOpacity onPress={handleIconPress}>
                                                <Text style={styles.____________text}>
                                                    {`Kids`}
                                                </Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles._row}>
                                    <View style={styles.livingroom}>
                                        <View style={styles._____________textwrapper}>
                                            <TouchableOpacity onPress={handleIconPress}>
                                                <Text style={styles._____________text}>
                                                    {`Living room`}
                                                </Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <View style={styles.office}>
                                        <View style={styles.______________textwrapper}>
                                            <TouchableOpacity onPress={handleIconPress}>
                                                <Text style={styles.______________text}>
                                                    {`Office`}
                                                </Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <View style={styles.outdoor}>
                                        <View style={styles._______________textwrapper}>
                                            <TouchableOpacity onPress={handleIconPress}>
                                                <Text style={styles._______________text}>
                                                    {`Outdoor`}
                                                </Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.color}>
                            <View style={styles.labelcolor}>
                                <View style={styles.___left}>
                                    <TouchableOpacity onPress={handleIconPress}>
                                        <Text style={styles._______________label}>
                                            {`Color`}
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.___right} />
                            </View>
                            <View style={styles.___items}>
                                <View style={styles.__row}>
                                    <TouchableOpacity onPress={handleIconPress}>
                                        <View style={styles.black}>
                                            <View style={styles.______iconleft}>
                                                <View style={styles.______________________boundingbox} />
                                                <Svg style={styles.____________________vector} width="14" height="14" viewBox="0 0 14 14" fill="none" >
                                                    <Path d="M7.00004 13.6667C6.07782 13.6667 5.21115 13.4917 4.40004 13.1417C3.58893 12.7917 2.88337 12.3167 2.28337 11.7167C1.68337 11.1167 1.20837 10.4112 0.858374 9.60004C0.508374 8.78893 0.333374 7.92226 0.333374 7.00004C0.333374 6.07782 0.508374 5.21115 0.858374 4.40004C1.20837 3.58893 1.68337 2.88337 2.28337 2.28337C2.88337 1.68337 3.58893 1.20837 4.40004 0.858374C5.21115 0.508374 6.07782 0.333374 7.00004 0.333374C7.92226 0.333374 8.78893 0.508374 9.60004 0.858374C10.4112 1.20837 11.1167 1.68337 11.7167 2.28337C12.3167 2.88337 12.7917 3.58893 13.1417 4.40004C13.4917 5.21115 13.6667 6.07782 13.6667 7.00004C13.6667 7.92226 13.4917 8.78893 13.1417 9.60004C12.7917 10.4112 12.3167 11.1167 11.7167 11.7167C11.1167 12.3167 10.4112 12.7917 9.60004 13.1417C8.78893 13.4917 7.92226 13.6667 7.00004 13.6667Z" fill="black" />
                                                </Svg>
                                            </View>
                                            <View style={styles.________________textwrapper}>
                                                <Text style={styles.________________text}>
                                                    {`Black`}
                                                </Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={handleIconPress}>
                                        <View style={styles.blue}>
                                            <View style={styles._______iconleft}>
                                                <View style={styles._______________________boundingbox} />
                                                <Svg style={styles._____________________vector} width="14" height="14" viewBox="0 0 14 14" fill="none" >
                                                    <Path d="M7.00004 13.6667C6.07782 13.6667 5.21115 13.4917 4.40004 13.1417C3.58893 12.7917 2.88337 12.3167 2.28337 11.7167C1.68337 11.1167 1.20837 10.4112 0.858374 9.60004C0.508374 8.78893 0.333374 7.92226 0.333374 7.00004C0.333374 6.07782 0.508374 5.21115 0.858374 4.40004C1.20837 3.58893 1.68337 2.88337 2.28337 2.28337C2.88337 1.68337 3.58893 1.20837 4.40004 0.858374C5.21115 0.508374 6.07782 0.333374 7.00004 0.333374C7.92226 0.333374 8.78893 0.508374 9.60004 0.858374C10.4112 1.20837 11.1167 1.68337 11.7167 2.28337C12.3167 2.88337 12.7917 3.58893 13.1417 4.40004C13.4917 5.21115 13.6667 6.07782 13.6667 7.00004C13.6667 7.92226 13.4917 8.78893 13.1417 9.60004C12.7917 10.4112 12.3167 11.1167 11.7167 11.7167C11.1167 12.3167 10.4112 12.7917 9.60004 13.1417C8.78893 13.4917 7.92226 13.6667 7.00004 13.6667Z" fill="#0856DB" />
                                                </Svg>
                                            </View>
                                            <View style={styles._________________textwrapper}>
                                                <Text style={styles._________________text}>
                                                    {`Blue`}
                                                </Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={handleIconPress}>
                                        <View style={styles.gray}>
                                            <View style={styles.________iconleft}>
                                                <View style={styles.________________________boundingbox} />
                                                <Svg style={styles.______________________vector} width="14" height="14" viewBox="0 0 14 14" fill="none" >
                                                    <Path d="M7.00004 13.6667C6.07782 13.6667 5.21115 13.4917 4.40004 13.1417C3.58893 12.7917 2.88337 12.3167 2.28337 11.7167C1.68337 11.1167 1.20837 10.4112 0.858374 9.60004C0.508374 8.78893 0.333374 7.92226 0.333374 7.00004C0.333374 6.07782 0.508374 5.21115 0.858374 4.40004C1.20837 3.58893 1.68337 2.88337 2.28337 2.28337C2.88337 1.68337 3.58893 1.20837 4.40004 0.858374C5.21115 0.508374 6.07782 0.333374 7.00004 0.333374C7.92226 0.333374 8.78893 0.508374 9.60004 0.858374C10.4112 1.20837 11.1167 1.68337 11.7167 2.28337C12.3167 2.88337 12.7917 3.58893 13.1417 4.40004C13.4917 5.21115 13.6667 6.07782 13.6667 7.00004C13.6667 7.92226 13.4917 8.78893 13.1417 9.60004C12.7917 10.4112 12.3167 11.1167 11.7167 11.7167C11.1167 12.3167 10.4112 12.7917 9.60004 13.1417C8.78893 13.4917 7.92226 13.6667 7.00004 13.6667Z" fill="#919BAD" />
                                                </Svg>
                                            </View>
                                            <View style={styles.__________________textwrapper}>
                                                <Text style={styles.__________________text}>
                                                    {`Gray`}
                                                </Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={handleIconPress}>
                                        <View style={styles.green}>
                                            <View style={styles._________iconleft}>
                                                <View style={styles._________________________boundingbox} />
                                                <Svg style={styles._______________________vector} width="14" height="14" viewBox="0 0 14 14" fill="none" >
                                                    <Path d="M7.00004 13.6667C6.07782 13.6667 5.21115 13.4917 4.40004 13.1417C3.58893 12.7917 2.88337 12.3167 2.28337 11.7167C1.68337 11.1167 1.20837 10.4112 0.858374 9.60004C0.508374 8.78893 0.333374 7.92226 0.333374 7.00004C0.333374 6.07782 0.508374 5.21115 0.858374 4.40004C1.20837 3.58893 1.68337 2.88337 2.28337 2.28337C2.88337 1.68337 3.58893 1.20837 4.40004 0.858374C5.21115 0.508374 6.07782 0.333374 7.00004 0.333374C7.92226 0.333374 8.78893 0.508374 9.60004 0.858374C10.4112 1.20837 11.1167 1.68337 11.7167 2.28337C12.3167 2.88337 12.7917 3.58893 13.1417 4.40004C13.4917 5.21115 13.6667 6.07782 13.6667 7.00004C13.6667 7.92226 13.4917 8.78893 13.1417 9.60004C12.7917 10.4112 12.3167 11.1167 11.7167 11.7167C11.1167 12.3167 10.4112 12.7917 9.60004 13.1417C8.78893 13.4917 7.92226 13.6667 7.00004 13.6667Z" fill="#08C754" />
                                                </Svg>
                                            </View>
                                            <View style={styles.___________________textwrapper}>
                                                <Text style={styles.___________________text}>
                                                    {`Green`}
                                                </Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.___row}>
                                    <TouchableOpacity onPress={handleIconPress}>
                                        <View style={styles.red}>
                                            <View style={styles.__________iconleft}>
                                                <View style={styles.__________________________boundingbox} />
                                                <Svg style={styles.________________________vector} width="14" height="14" viewBox="0 0 14 14" fill="none" >
                                                    <Path d="M7.00004 13.6667C6.07782 13.6667 5.21115 13.4917 4.40004 13.1417C3.58893 12.7917 2.88337 12.3167 2.28337 11.7167C1.68337 11.1167 1.20837 10.4112 0.858374 9.60004C0.508374 8.78893 0.333374 7.92226 0.333374 7.00004C0.333374 6.07782 0.508374 5.21115 0.858374 4.40004C1.20837 3.58893 1.68337 2.88337 2.28337 2.28337C2.88337 1.68337 3.58893 1.20837 4.40004 0.858374C5.21115 0.508374 6.07782 0.333374 7.00004 0.333374C7.92226 0.333374 8.78893 0.508374 9.60004 0.858374C10.4112 1.20837 11.1167 1.68337 11.7167 2.28337C12.3167 2.88337 12.7917 3.58893 13.1417 4.40004C13.4917 5.21115 13.6667 6.07782 13.6667 7.00004C13.6667 7.92226 13.4917 8.78893 13.1417 9.60004C12.7917 10.4112 12.3167 11.1167 11.7167 11.7167C11.1167 12.3167 10.4112 12.7917 9.60004 13.1417C8.78893 13.4917 7.92226 13.6667 7.00004 13.6667Z" fill="#E50D24" />
                                                </Svg>
                                            </View>
                                            <View style={styles.____________________textwrapper}>
                                                <Text style={styles.____________________text}>
                                                    {`Red`}
                                                </Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={handleIconPress}>
                                        <View style={styles.white}>
                                            <View style={styles.___________iconleft}>
                                                <View style={styles.___________________________boundingbox} />
                                                <Svg style={styles._________________________vector} width="14" height="14" viewBox="0 0 14 14" fill="none" >
                                                    <Path d="M7.00004 13.6667C6.07782 13.6667 5.21115 13.4917 4.40004 13.1417C3.58893 12.7917 2.88337 12.3167 2.28337 11.7167C1.68337 11.1167 1.20837 10.4112 0.858374 9.60004C0.508374 8.78893 0.333374 7.92226 0.333374 7.00004C0.333374 6.07782 0.508374 5.21115 0.858374 4.40004C1.20837 3.58893 1.68337 2.88337 2.28337 2.28337C2.88337 1.68337 3.58893 1.20837 4.40004 0.858374C5.21115 0.508374 6.07782 0.333374 7.00004 0.333374C7.92226 0.333374 8.78893 0.508374 9.60004 0.858374C10.4112 1.20837 11.1167 1.68337 11.7167 2.28337C12.3167 2.88337 12.7917 3.58893 13.1417 4.40004C13.4917 5.21115 13.6667 6.07782 13.6667 7.00004C13.6667 7.92226 13.4917 8.78893 13.1417 9.60004C12.7917 10.4112 12.3167 11.1167 11.7167 11.7167C11.1167 12.3167 10.4112 12.7917 9.60004 13.1417C8.78893 13.4917 7.92226 13.6667 7.00004 13.6667Z" fill="white" />
                                                </Svg>
                                            </View>
                                            <View style={styles._____________________textwrapper}>
                                                <Text style={styles._____________________text}>
                                                    {`White`}
                                                </Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={handleIconPress}>
                                        <View style={styles.yellow}>
                                            <View style={styles.____________iconleft}>
                                                <View style={styles.____________________________boundingbox} />
                                                <Svg style={styles.__________________________vector} width="14" height="14" viewBox="0 0 14 14" fill="none" >
                                                    <Path d="M7.00004 13.6667C6.07782 13.6667 5.21115 13.4917 4.40004 13.1417C3.58893 12.7917 2.88337 12.3167 2.28337 11.7167C1.68337 11.1167 1.20837 10.4112 0.858374 9.60004C0.508374 8.78893 0.333374 7.92226 0.333374 7.00004C0.333374 6.07782 0.508374 5.21115 0.858374 4.40004C1.20837 3.58893 1.68337 2.88337 2.28337 2.28337C2.88337 1.68337 3.58893 1.20837 4.40004 0.858374C5.21115 0.508374 6.07782 0.333374 7.00004 0.333374C7.92226 0.333374 8.78893 0.508374 9.60004 0.858374C10.4112 1.20837 11.1167 1.68337 11.7167 2.28337C12.3167 2.88337 12.7917 3.58893 13.1417 4.40004C13.4917 5.21115 13.6667 6.07782 13.6667 7.00004C13.6667 7.92226 13.4917 8.78893 13.1417 9.60004C12.7917 10.4112 12.3167 11.1167 11.7167 11.7167C11.1167 12.3167 10.4112 12.7917 9.60004 13.1417C8.78893 13.4917 7.92226 13.6667 7.00004 13.6667Z" fill="#FAB30F" />
                                                </Svg>
                                            </View>
                                            <View style={styles.______________________textwrapper}>
                                                <Text style={styles.______________________text}>
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
                            <View style={styles._______________________textwrapper}>
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
    )
}

const styles = StyleSheet.create({
    searchFilter: {
        flexShrink: 0,
        height: 800,
        width: 390,
        paddingTop: 112,
        paddingBottom: 24,
        backgroundColor: "rgba(255, 255, 255, 1)",
        alignItems: "flex-start",
        rowGap: 0,
        paddingHorizontal: 0
    },
    searchresult: {
        alignSelf: "stretch",
        flexShrink: 0,
        alignItems: "flex-start",
        rowGap: 12,
        paddingVertical: 0,
        paddingHorizontal: 24
    },
    title: {
        alignSelf: "stretch",
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 0
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
    _title: {
        alignSelf: "stretch",
        flexShrink: 0,
        height: 20,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 14,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 20
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
    currentprice: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16
    },
    initialpricewrapper: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        columnGap: 4
    },
    initialprice: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(76, 89, 112, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "400",
        letterSpacing: 0,
        lineHeight: 16,
        textDecorationLine: "line-through"
    },
    badge: {
        flexShrink: 0,
        backgroundColor: "rgba(215, 246, 228, 1)",
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 0,
        paddingVertical: 0,
        paddingHorizontal: 4,
        borderRadius: 4
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
        top: 2,
        right: 2,
        bottom: 2,
        left: 2,
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
    _boundingbox: {
        position: "absolute",
        flexShrink: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: "rgba(217, 217, 217, 1)"
    },
    _vector: {
        position: "absolute",
        flexShrink: 0,
        top: 2,
        right: 1,
        bottom: 2,
        left: 1,
        overflow: "visible"
    },
    _card: {
        alignSelf: "stretch",
        flexShrink: 0,
        alignItems: "flex-start",
        rowGap: 0,
        borderRadius: 12
    },
    _image: {
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
    _cardbody: {
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
    __title: {
        alignSelf: "stretch",
        flexShrink: 0,
        height: 20,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 14,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 20
    },
    _price: {
        alignSelf: "stretch",
        flexShrink: 0,
        paddingTop: 0,
        paddingBottom: 4,
        alignItems: "flex-start",
        rowGap: 0,
        paddingHorizontal: 0
    },
    _currentprice: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16
    },
    _initialpricewrapper: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        columnGap: 4
    },
    _initialprice: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(76, 89, 112, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "400",
        letterSpacing: 0,
        lineHeight: 16,
        textDecorationLine: "line-through"
    },
    _badge: {
        flexShrink: 0,
        backgroundColor: "rgba(215, 246, 228, 1)",
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 0,
        paddingVertical: 0,
        paddingHorizontal: 4,
        borderRadius: 4
    },
    __label: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(8, 199, 84, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16
    },
    _ratingProduct: {
        flexShrink: 0,
        paddingTop: 0,
        paddingBottom: 4,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 2,
        paddingHorizontal: 0
    },
    _iconsFilledStar: {
        flexShrink: 0,
        height: 16,
        width: 16,
        alignItems: "flex-start",
        rowGap: 0
    },
    __boundingbox: {
        position: "absolute",
        flexShrink: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: "rgba(217, 217, 217, 1)"
    },
    __vector: {
        position: "absolute",
        flexShrink: 0,
        top: 2,
        right: 2,
        bottom: 2,
        left: 2,
        overflow: "visible"
    },
    ___label: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(76, 89, 112, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16
    },
    _buttonfloating: {
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
    _icon: {
        flexShrink: 0,
        height: 16,
        width: 16,
        alignItems: "flex-start",
        rowGap: 0
    },
    ___boundingbox: {
        position: "absolute",
        flexShrink: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: "rgba(217, 217, 217, 1)"
    },
    ___vector: {
        position: "absolute",
        flexShrink: 0,
        top: 2,
        right: 1,
        bottom: 2,
        left: 1,
        overflow: "visible"
    },
    __card: {
        alignSelf: "stretch",
        flexShrink: 0,
        alignItems: "flex-start",
        rowGap: 0,
        borderRadius: 12
    },
    __image: {
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
    __cardbody: {
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
    ___title: {
        alignSelf: "stretch",
        flexShrink: 0,
        height: 20,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 14,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 20
    },
    __price: {
        alignSelf: "stretch",
        flexShrink: 0,
        paddingTop: 0,
        paddingBottom: 4,
        alignItems: "flex-start",
        rowGap: 0,
        paddingHorizontal: 0
    },
    __currentprice: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16
    },
    __initialpricewrapper: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        columnGap: 4
    },
    __initialprice: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(76, 89, 112, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "400",
        letterSpacing: 0,
        lineHeight: 16,
        textDecorationLine: "line-through"
    },
    __badge: {
        flexShrink: 0,
        backgroundColor: "rgba(215, 246, 228, 1)",
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 0,
        paddingVertical: 0,
        paddingHorizontal: 4,
        borderRadius: 4
    },
    ____label: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(8, 199, 84, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16
    },
    __ratingProduct: {
        flexShrink: 0,
        paddingTop: 0,
        paddingBottom: 4,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 2,
        paddingHorizontal: 0
    },
    __iconsFilledStar: {
        flexShrink: 0,
        height: 16,
        width: 16,
        alignItems: "flex-start",
        rowGap: 0
    },
    ____boundingbox: {
        position: "absolute",
        flexShrink: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: "rgba(217, 217, 217, 1)"
    },
    _____label: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(76, 89, 112, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16
    },
    __buttonfloating: {
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
    __icon: {
        flexShrink: 0,
        height: 16,
        width: 16,
        alignItems: "flex-start",
        rowGap: 0
    },
    _____boundingbox: {
        position: "absolute",
        flexShrink: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: "rgba(217, 217, 217, 1)"
    },
    ____vector: {
        position: "absolute",
        flexShrink: 0,
        top: 2,
        right: 1,
        bottom: 2,
        left: 1,
        overflow: "visible"
    },
    _col: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        alignItems: "flex-start",
        rowGap: 24
    },
    ___card: {
        alignSelf: "stretch",
        flexShrink: 0,
        alignItems: "flex-start",
        rowGap: 0,
        borderRadius: 12
    },
    ___image: {
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
    ___cardbody: {
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
    ____title: {
        alignSelf: "stretch",
        flexShrink: 0,
        height: 20,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 14,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 20
    },
    ___price: {
        alignSelf: "stretch",
        flexShrink: 0,
        paddingTop: 0,
        paddingBottom: 4,
        alignItems: "flex-start",
        rowGap: 0,
        paddingHorizontal: 0
    },
    ___currentprice: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16
    },
    ___initialpricewrapper: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        columnGap: 4
    },
    ___initialprice: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(76, 89, 112, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "400",
        letterSpacing: 0,
        lineHeight: 16,
        textDecorationLine: "line-through"
    },
    ___badge: {
        flexShrink: 0,
        backgroundColor: "rgba(215, 246, 228, 1)",
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 0,
        paddingVertical: 0,
        paddingHorizontal: 4,
        borderRadius: 4
    },
    ______label: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(8, 199, 84, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16
    },
    ___ratingProduct: {
        flexShrink: 0,
        paddingTop: 0,
        paddingBottom: 4,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 2,
        paddingHorizontal: 0
    },
    ___iconsFilledStar: {
        flexShrink: 0,
        height: 16,
        width: 16,
        alignItems: "flex-start",
        rowGap: 0
    },
    ______boundingbox: {
        position: "absolute",
        flexShrink: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: "rgba(217, 217, 217, 1)"
    },
    _____vector: {
        position: "absolute",
        flexShrink: 0,
        top: 2,
        right: 2,
        bottom: 2,
        left: 2,
        overflow: "visible"
    },
    _______label: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(76, 89, 112, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16
    },
    ___buttonfloating: {
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
    ___icon: {
        flexShrink: 0,
        height: 16,
        width: 16,
        alignItems: "flex-start",
        rowGap: 0
    },
    _______boundingbox: {
        position: "absolute",
        flexShrink: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: "rgba(217, 217, 217, 1)"
    },
    ______vector: {
        position: "absolute",
        flexShrink: 0,
        top: 2,
        right: 1,
        bottom: 2,
        left: 1,
        overflow: "visible"
    },
    ____card: {
        alignSelf: "stretch",
        flexShrink: 0,
        alignItems: "flex-start",
        rowGap: 0,
        borderRadius: 12
    },
    ____image: {
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
    ____cardbody: {
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
    _____title: {
        alignSelf: "stretch",
        flexShrink: 0,
        height: 20,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 14,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 20
    },
    ____price: {
        alignSelf: "stretch",
        flexShrink: 0,
        paddingTop: 0,
        paddingBottom: 4,
        alignItems: "flex-start",
        rowGap: 0,
        paddingHorizontal: 0
    },
    ____currentprice: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16
    },
    ____initialpricewrapper: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        columnGap: 4
    },
    ____initialprice: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(76, 89, 112, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "400",
        letterSpacing: 0,
        lineHeight: 16,
        textDecorationLine: "line-through"
    },
    ____badge: {
        flexShrink: 0,
        backgroundColor: "rgba(215, 246, 228, 1)",
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 0,
        paddingVertical: 0,
        paddingHorizontal: 4,
        borderRadius: 4
    },
    ________label: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(8, 199, 84, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16
    },
    ____ratingProduct: {
        flexShrink: 0,
        paddingTop: 0,
        paddingBottom: 4,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 2,
        paddingHorizontal: 0
    },
    ____iconsFilledStar: {
        flexShrink: 0,
        height: 16,
        width: 16,
        alignItems: "flex-start",
        rowGap: 0
    },
    ________boundingbox: {
        position: "absolute",
        flexShrink: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: "rgba(217, 217, 217, 1)"
    },
    _______vector: {
        position: "absolute",
        flexShrink: 0,
        top: 2,
        right: 2,
        bottom: 2,
        left: 2,
        overflow: "visible"
    },
    _________label: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(76, 89, 112, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16
    },
    ____buttonfloating: {
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
    ____icon: {
        flexShrink: 0,
        height: 16,
        width: 16,
        alignItems: "flex-start",
        rowGap: 0
    },
    _________boundingbox: {
        position: "absolute",
        flexShrink: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: "rgba(217, 217, 217, 1)"
    },
    ________vector: {
        position: "absolute",
        flexShrink: 0,
        top: 2,
        right: 1,
        bottom: 2,
        left: 1,
        overflow: "visible"
    },
    _____card: {
        alignSelf: "stretch",
        flexShrink: 0,
        alignItems: "flex-start",
        rowGap: 0,
        borderRadius: 12
    },
    _____image: {
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
    _____cardbody: {
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
    ______title: {
        alignSelf: "stretch",
        flexShrink: 0,
        height: 20,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 14,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 20
    },
    _____price: {
        alignSelf: "stretch",
        flexShrink: 0,
        paddingTop: 0,
        paddingBottom: 4,
        alignItems: "flex-start",
        rowGap: 0,
        paddingHorizontal: 0
    },
    _____currentprice: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16
    },
    _____initialpricewrapper: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        columnGap: 4
    },
    _____initialprice: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(76, 89, 112, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "400",
        letterSpacing: 0,
        lineHeight: 16,
        textDecorationLine: "line-through"
    },
    _____badge: {
        flexShrink: 0,
        backgroundColor: "rgba(215, 246, 228, 1)",
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 0,
        paddingVertical: 0,
        paddingHorizontal: 4,
        borderRadius: 4
    },
    __________label: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(8, 199, 84, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16
    },
    _____ratingProduct: {
        flexShrink: 0,
        paddingTop: 0,
        paddingBottom: 4,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 2,
        paddingHorizontal: 0
    },
    _____iconsFilledStar: {
        flexShrink: 0,
        height: 16,
        width: 16,
        alignItems: "flex-start",
        rowGap: 0
    },
    __________boundingbox: {
        position: "absolute",
        flexShrink: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: "rgba(217, 217, 217, 1)"
    },
    ___________label: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(76, 89, 112, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16
    },
    _____buttonfloating: {
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
    _____icon: {
        flexShrink: 0,
        height: 16,
        width: 16,
        alignItems: "flex-start",
        rowGap: 0
    },
    ___________boundingbox: {
        position: "absolute",
        flexShrink: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: "rgba(217, 217, 217, 1)"
    },
    _________vector: {
        position: "absolute",
        flexShrink: 0,
        top: 2,
        right: 1,
        bottom: 2,
        left: 1,
        overflow: "visible"
    },
    navbar: {
        // zIndex:0,
        position: "absolute",
        flexShrink: 0,
        // height: 50,
        // width: 200,
        left: 0,
        right: 0,
        backgroundColor: "rgba(255, 255, 255, 1)",
        alignItems: "flex-start",
        rowGap: 0
    },
    navtop: {
        alignSelf: "stretch",
        flexShrink: 0,
        backgroundColor: "rgba(255, 255, 255, 1)",
        flexDirection: "row",
        alignItems: "center",
        columnGap: 0,
        paddingVertical: 12,
        paddingHorizontal: 16
    },
    itemleftwrapper: {
        flexShrink: 0,
        paddingLeft: 0,
        paddingRight: 4,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 0,
        paddingVertical: 0
    },
    itemleft: {
        flexShrink: 0,
        height: 40,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 4,
        padding: 10,
        borderRadius: 9999
    },
    iconsOutlineArrow_back: {
        flexShrink: 0,
        height: 20,
        width: 20,
        alignItems: "flex-start",
        rowGap: 0
    },
    ____________boundingbox: {
        position: "absolute",
        flexShrink: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: "rgba(217, 217, 217, 1)"
    },
    __________vector: {
        position: "absolute",
        flexShrink: 0,
        top: 4,
        right: 4,
        bottom: 4,
        left: 3,
        overflow: "visible"
    },
    inputwrapper: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        alignItems: "flex-start",
        rowGap: 0,
        paddingVertical: 0,
        paddingHorizontal: 8
    },
    inputfield: {
        alignSelf: "stretch",
        flexShrink: 0,
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
    iconleft: {
        flexShrink: 0,
        height: 20,
        width: 20,
        alignItems: "flex-start",
        rowGap: 0
    },
    _____________boundingbox: {
        position: "absolute",
        flexShrink: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: "rgba(217, 217, 217, 1)"
    },
    ___________vector: {
        position: "absolute",
        flexShrink: 0,
        top: 2,
        right: 3,
        bottom: 3,
        left: 2,
        overflow: "visible"
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
    ______________boundingbox: {
        position: "absolute",
        flexShrink: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: "rgba(217, 217, 217, 1)"
    },
    ____________vector: {
        position: "absolute",
        flexShrink: 0,
        top: 2,
        right: 3,
        bottom: 3,
        left: 2,
        overflow: "visible"
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
    _textwrapper: {
        flexShrink: 0,
        paddingTop: 0,
        paddingBottom: 2,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 0,
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
    __textwrapper: {
        flexShrink: 0,
        paddingTop: 0,
        paddingBottom: 2,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 0,
        paddingHorizontal: 0
    },
    __text: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(76, 89, 112, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16
    },
    ______price: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        columnGap: 0,
        paddingVertical: 1,
        paddingHorizontal: 0
    },
    ___textwrapper: {
        flexShrink: 0,
        paddingTop: 0,
        paddingBottom: 2,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 0,
        paddingHorizontal: 0
    },
    ___text: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(76, 89, 112, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16
    },
    ______icon: {
        flexShrink: 0,
        height: 16,
        width: 16,
        alignItems: "flex-start",
        rowGap: 0
    },
    _______________boundingbox: {
        position: "absolute",
        flexShrink: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: "rgba(217, 217, 217, 1)"
    },
    _____________vector: {
        position: "absolute",
        flexShrink: 0,
        top: 2,
        left: 5,
        width: 5,
        height: 11,
        overflow: "visible"
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
        backgroundColor: "rgba(0, 0, 0, 0.3)",
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
    _______icon: {
        flexShrink: 0,
        height: 16,
        width: 16,
        alignItems: "flex-start",
        rowGap: 0
    },
    ________________boundingbox: {
        position: "absolute",
        flexShrink: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: "rgba(217, 217, 217, 1)"
    },
    ______________vector: {
        position: "absolute",
        flexShrink: 0,
        top: 4,
        right: 4,
        bottom: 4,
        left: 4,
        overflow: "visible"
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
    ____________label: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16
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
    _inputvaluewrapper: {
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
    ____text: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16
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
    __inputvaluewrapper: {
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
    rating: {
        alignSelf: "stretch",
        flexShrink: 0,
        alignItems: "flex-start",
        rowGap: 8
    },
    labelrating: {
        alignSelf: "stretch",
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        columnGap: 12
    },
    _left: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        columnGap: 4
    },
    _____________label: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16
    },
    _right: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        columnGap: 4
    },
    _items: {
        alignSelf: "stretch",
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 8
    },
    star5: {
        flexShrink: 0,
        backgroundColor: "rgba(240, 242, 245, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 0,
        padding: 6,
        borderRadius: 8
    },
    _iconleft: {
        flexShrink: 0,
        height: 16,
        width: 16,
        alignItems: "flex-start",
        rowGap: 0
    },
    _________________boundingbox: {
        position: "absolute",
        flexShrink: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: "rgba(217, 217, 217, 1)"
    },
    _______________vector: {
        position: "absolute",
        flexShrink: 0,
        top: 2,
        right: 2,
        bottom: 2,
        left: 2,
        overflow: "visible"
    },
    _____textwrapper: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 0,
        paddingVertical: 0,
        paddingHorizontal: 4
    },
    _____text: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16
    },
    star4: {
        flexShrink: 0,
        backgroundColor: "rgba(240, 242, 245, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 0,
        padding: 6,
        borderRadius: 8
    },
    __iconleft: {
        flexShrink: 0,
        height: 16,
        width: 16,
        alignItems: "flex-start",
        rowGap: 0
    },
    __________________boundingbox: {
        position: "absolute",
        flexShrink: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: "rgba(217, 217, 217, 1)"
    },
    ________________vector: {
        position: "absolute",
        flexShrink: 0,
        top: 2,
        right: 2,
        bottom: 2,
        left: 2,
        overflow: "visible"
    },
    ______textwrapper: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 0,
        paddingVertical: 0,
        paddingHorizontal: 4
    },
    ______text: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16
    },
    star3: {
        flexShrink: 0,
        backgroundColor: "rgba(240, 242, 245, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 0,
        padding: 6,
        borderRadius: 8
    },
    ___iconleft: {
        flexShrink: 0,
        height: 16,
        width: 16,
        alignItems: "flex-start",
        rowGap: 0
    },
    ___________________boundingbox: {
        position: "absolute",
        flexShrink: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: "rgba(217, 217, 217, 1)"
    },
    _________________vector: {
        position: "absolute",
        flexShrink: 0,
        top: 2,
        right: 2,
        bottom: 2,
        left: 2,
        overflow: "visible"
    },
    _______textwrapper: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 0,
        paddingVertical: 0,
        paddingHorizontal: 4
    },
    _______text: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16
    },
    star2: {
        flexShrink: 0,
        backgroundColor: "rgba(240, 242, 245, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 0,
        padding: 6,
        borderRadius: 8
    },
    ____iconleft: {
        flexShrink: 0,
        height: 16,
        width: 16,
        alignItems: "flex-start",
        rowGap: 0
    },
    ____________________boundingbox: {
        position: "absolute",
        flexShrink: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: "rgba(217, 217, 217, 1)"
    },
    __________________vector: {
        position: "absolute",
        flexShrink: 0,
        top: 2,
        right: 2,
        bottom: 2,
        left: 2,
        overflow: "visible"
    },
    ________textwrapper: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 0,
        paddingVertical: 0,
        paddingHorizontal: 4
    },
    ________text: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16
    },
    star1: {
        flexShrink: 0,
        backgroundColor: "rgba(240, 242, 245, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 0,
        padding: 6,
        borderRadius: 8
    },
    _____iconleft: {
        flexShrink: 0,
        height: 16,
        width: 16,
        alignItems: "flex-start",
        rowGap: 0
    },
    _____________________boundingbox: {
        position: "absolute",
        flexShrink: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: "rgba(217, 217, 217, 1)"
    },
    ___________________vector: {
        position: "absolute",
        flexShrink: 0,
        top: 2,
        right: 2,
        bottom: 2,
        left: 2,
        overflow: "visible"
    },
    _________textwrapper: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 0,
        paddingVertical: 0,
        paddingHorizontal: 4
    },
    _________text: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16
    },
    room: {
        alignSelf: "stretch",
        flexShrink: 0,
        alignItems: "flex-start",
        rowGap: 8
    },
    labelroom: {
        alignSelf: "stretch",
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        columnGap: 12
    },
    __left: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        columnGap: 4
    },
    ______________label: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16
    },
    __right: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        columnGap: 4
    },
    __items: {
        alignSelf: "stretch",
        flexShrink: 0,
        alignItems: "flex-start",
        rowGap: 8
    },
    row: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 8
    },
    bedroom: {
        flexShrink: 0,
        backgroundColor: "rgba(240, 242, 245, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 0,
        padding: 6,
        borderRadius: 8
    },
    __________textwrapper: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 0,
        paddingVertical: 0,
        paddingHorizontal: 4
    },
    __________text: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16
    },
    diningroom: {
        flexShrink: 0,
        backgroundColor: "rgba(240, 242, 245, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 0,
        padding: 6,
        borderRadius: 8
    },
    ___________textwrapper: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 0,
        paddingVertical: 0,
        paddingHorizontal: 4
    },
    ___________text: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16
    },
    kids: {
        flexShrink: 0,
        backgroundColor: "rgba(240, 242, 245, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 0,
        padding: 6,
        borderRadius: 8
    },
    ____________textwrapper: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 0,
        paddingVertical: 0,
        paddingHorizontal: 4
    },
    ____________text: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16
    },
    _row: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 8
    },
    livingroom: {
        flexShrink: 0,
        backgroundColor: "rgba(240, 242, 245, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 0,
        padding: 6,
        borderRadius: 8
    },
    _____________textwrapper: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 0,
        paddingVertical: 0,
        paddingHorizontal: 4
    },
    _____________text: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16
    },
    office: {
        flexShrink: 0,
        backgroundColor: "rgba(240, 242, 245, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 0,
        padding: 6,
        borderRadius: 8
    },
    ______________textwrapper: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 0,
        paddingVertical: 0,
        paddingHorizontal: 4
    },
    ______________text: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16
    },
    outdoor: {
        flexShrink: 0,
        backgroundColor: "rgba(240, 242, 245, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 0,
        padding: 6,
        borderRadius: 8
    },
    _______________textwrapper: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 0,
        paddingVertical: 0,
        paddingHorizontal: 4
    },
    _______________text: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16
    },
    color: {
        alignSelf: "stretch",
        flexShrink: 0,
        alignItems: "flex-start",
        rowGap: 8
    },
    labelcolor: {
        alignSelf: "stretch",
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        columnGap: 12
    },
    ___left: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        columnGap: 4
    },
    _______________label: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16
    },
    ___right: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        columnGap: 4
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
    black: {
        flexShrink: 0,
        backgroundColor: "rgba(240, 242, 245, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 0,
        padding: 6,
        borderRadius: 8
    },
    ______iconleft: {
        flexShrink: 0,
        height: 16,
        width: 16,
        alignItems: "flex-start",
        rowGap: 0
    },
    ______________________boundingbox: {
        position: "absolute",
        flexShrink: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: "rgba(217, 217, 217, 1)"
    },
    ____________________vector: {
        position: "absolute",
        flexShrink: 0,
        top: 1,
        right: 1,
        bottom: 1,
        left: 1,
        overflow: "visible"
    },
    ________________textwrapper: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 0,
        paddingVertical: 0,
        paddingHorizontal: 4
    },
    ________________text: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16
    },
    blue: {
        flexShrink: 0,
        backgroundColor: "rgba(240, 242, 245, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 0,
        padding: 6,
        borderRadius: 8
    },
    _______iconleft: {
        flexShrink: 0,
        height: 16,
        width: 16,
        alignItems: "flex-start",
        rowGap: 0
    },
    _______________________boundingbox: {
        position: "absolute",
        flexShrink: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: "rgba(217, 217, 217, 1)"
    },
    _____________________vector: {
        position: "absolute",
        flexShrink: 0,
        top: 1,
        right: 1,
        bottom: 1,
        left: 1,
        overflow: "visible"
    },
    _________________textwrapper: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 0,
        paddingVertical: 0,
        paddingHorizontal: 4
    },
    _________________text: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16
    },
    gray: {
        flexShrink: 0,
        backgroundColor: "rgba(240, 242, 245, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 0,
        padding: 6,
        borderRadius: 8
    },
    ________iconleft: {
        flexShrink: 0,
        height: 16,
        width: 16,
        alignItems: "flex-start",
        rowGap: 0
    },
    ________________________boundingbox: {
        position: "absolute",
        flexShrink: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: "rgba(217, 217, 217, 1)"
    },
    ______________________vector: {
        position: "absolute",
        flexShrink: 0,
        top: 1,
        right: 1,
        bottom: 1,
        left: 1,
        overflow: "visible"
    },
    __________________textwrapper: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 0,
        paddingVertical: 0,
        paddingHorizontal: 4
    },
    __________________text: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16
    },
    green: {
        flexShrink: 0,
        backgroundColor: "rgba(240, 242, 245, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 0,
        padding: 6,
        borderRadius: 8
    },
    _________iconleft: {
        flexShrink: 0,
        height: 16,
        width: 16,
        alignItems: "flex-start",
        rowGap: 0
    },
    _________________________boundingbox: {
        position: "absolute",
        flexShrink: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: "rgba(217, 217, 217, 1)"
    },
    _______________________vector: {
        position: "absolute",
        flexShrink: 0,
        top: 1,
        right: 1,
        bottom: 1,
        left: 1,
        overflow: "visible"
    },
    ___________________textwrapper: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 0,
        paddingVertical: 0,
        paddingHorizontal: 4
    },
    ___________________text: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16
    },
    ___row: {
        flexShrink: 0,
        width: 312,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 8
    },
    red: {
        flexShrink: 0,
        backgroundColor: "rgba(240, 242, 245, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 0,
        padding: 6,
        borderRadius: 8
    },
    __________iconleft: {
        flexShrink: 0,
        height: 16,
        width: 16,
        alignItems: "flex-start",
        rowGap: 0
    },
    __________________________boundingbox: {
        position: "absolute",
        flexShrink: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: "rgba(217, 217, 217, 1)"
    },
    ________________________vector: {
        position: "absolute",
        flexShrink: 0,
        top: 1,
        right: 1,
        bottom: 1,
        left: 1,
        overflow: "visible"
    },
    ____________________textwrapper: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 0,
        paddingVertical: 0,
        paddingHorizontal: 4
    },
    ____________________text: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16
    },
    white: {
        flexShrink: 0,
        backgroundColor: "rgba(240, 242, 245, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 0,
        padding: 6,
        borderRadius: 8
    },
    ___________iconleft: {
        flexShrink: 0,
        height: 16,
        width: 16,
        alignItems: "flex-start",
        rowGap: 0
    },
    ___________________________boundingbox: {
        position: "absolute",
        flexShrink: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: "rgba(217, 217, 217, 1)"
    },
    _________________________vector: {
        position: "absolute",
        flexShrink: 0,
        top: 1,
        right: 1,
        bottom: 1,
        left: 1,
        overflow: "visible"
    },
    _____________________textwrapper: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 0,
        paddingVertical: 0,
        paddingHorizontal: 4
    },
    _____________________text: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16
    },
    yellow: {
        flexShrink: 0,
        backgroundColor: "rgba(240, 242, 245, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 0,
        padding: 6,
        borderRadius: 8
    },
    ____________iconleft: {
        flexShrink: 0,
        height: 16,
        width: 16,
        alignItems: "flex-start",
        rowGap: 0
    },
    ____________________________boundingbox: {
        position: "absolute",
        flexShrink: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: "rgba(217, 217, 217, 1)"
    },
    __________________________vector: {
        position: "absolute",
        flexShrink: 0,
        top: 1,
        right: 1,
        bottom: 1,
        left: 1,
        overflow: "visible"
    },
    ______________________textwrapper: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 0,
        paddingVertical: 0,
        paddingHorizontal: 4
    },
    ______________________text: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 16
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
    _______________________textwrapper: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 0,
        paddingVertical: 0,
        paddingHorizontal: 4
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
    ________________________textwrapper: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 0,
        paddingVertical: 0,
        paddingHorizontal: 4
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