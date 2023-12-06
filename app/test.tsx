import { Text, View } from 'react-native'
import React from 'react'
import BaseLabel, {BaseInputLabelColor} from "../Components/BaseLabel";
import ButtonRegular, {
    ButtonRegularColor,
    ButtonRegularSize,
    ButtonRegularState,
    ButtonRegularType
} from "../Components/ButtonRegular";
import Textarea from "../Components/Textarea";
import Icon from "../Components/Icon";
import Buttonlink from "../Components/Buttonlink";
import FormCheckbox from "../Components/FormCheckbox";
import Notification from "../Components/Notification";
import NavItem from "../Components/NavItem";
import {Badge, BadgeSize, BadgeType} from "../Components/Badge";
import List from "../Components/List";
import Divider from "../Components/Divider";


const test = () => {
    return (
        <View>
            <Text>hello</Text>
            <View>
                <Icon iconName='add' color='#221155'></Icon>
            </View>
            <Text>1</Text>
            <Textarea></Textarea>
            <BaseLabel color={BaseInputLabelColor.Green} labelPrimary='Hello' labelRight='right' labelSecondary='dd' iconLeft='add' iconRight='add' />
            <ButtonRegular text='hello' state={ButtonRegularState.Disabled} iconLeft='add' color={ButtonRegularColor.Dark} type={ButtonRegularType.Filled} size={ButtonRegularSize.Small} />
            <ButtonRegular text='hello' iconLeft='add' color={ButtonRegularColor.Dark} type={ButtonRegularType.Filled} size={ButtonRegularSize.Small}/>
            <Buttonlink text={'Example'} color={'Dark'} size={'Large'} icon={'add'}></Buttonlink>
            <Notification label={"ahhhhhhhhhhhh"} date={"2011"} icon={'add'} title={'hello'} subtitle={'hello'}/>
            <FormCheckbox size={"Small"} label={"waa"}/>
            <NavItem icon={'home'} hasBadge={true} text={"aaaaa"}/>
            <List title={'aazzz'}/>
            <Divider text={'Text'} type={'Horizontal'}></Divider>
            <Divider text={'Text'} type={'Vertical'}></Divider>
        </View>
    )
}

export default test
