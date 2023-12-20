import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Svg, Path, Line, Circle } from 'react-native-svg';
import Icon from '../Components/Icon';

export default function SearchIndex() {
    return (
        <View style={styles.searchIndex}>
            <View style={styles.searchhistory}>
                <View style={styles.title}>
                    <Text style={styles._searchhistory}>
                        {`Search history`}
                    </Text>
                    <View style={styles.buttonviewmore}>
                        <View style={styles.textwrapper}>
                            <Text style={styles.text}>
                                {`Clear all`}
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.items}>
                    <View style={styles.item}>
                        <View style={styles._text}>
                            <Text style={styles._title}>
                                {`Sofa`}
                            </Text>
                        </View>
                        <View style={styles.itemright}>
                            <Icon iconName={'close'} size={'Small'} />
                        </View>
                    </View>
                    <View style={styles._item}>
                        <View style={styles.__text}>
                            <Text style={styles.__title}>
                                {`Bed`}
                            </Text>
                        </View>
                        <View style={styles._itemright}>
                            <Icon iconName={'close'} size={'Small'} />
                        </View>
                    </View>
                    <View style={styles.__item}>
                        <View style={styles.___text}>
                            <Text style={styles.___title}>
                                {`Pillow`}
                            </Text>
                        </View>
                        <View style={styles.__itemright}>
                            <Icon iconName={'close'} size={'Small'} />

                        </View>
                    </View>
                    <View style={styles.___item}>
                        <View style={styles.____text}>
                            <Text style={styles.____title}>
                                {`Table`}
                            </Text>
                        </View>
                        <View style={styles.___itemright}>
                            <Icon iconName={'close'} size={'Small'} />
                        </View>
                    </View>
                    <View style={styles.____item}>
                        <View style={styles._____text}>
                            <Text style={styles._____title}>
                                {`Lamp`}
                            </Text>
                        </View>
                        <View style={styles.____itemright}>
                            <Icon iconName={'close'} size={'Small'} />
                        </View>
                    </View>
                </View>
                <View style={styles._buttonviewmore}>
                    <View style={styles._textwrapper}>
                        <Text style={styles.______text}>
                            {`View more  `}
                        </Text>
                    </View>
                    <Icon iconName={'expand_more'} size={'Small'} />

                </View>
            </View>
            {/* Vigma RN:: can be replaced with <Divider type={"horizontal"} /> */}
            <View style={styles.divider}>
                <View style={styles.linewrapper}>
                    <Svg style={styles.line} width="156" height="1" viewBox="0 0 156 1" fill="none" >
                        <Line y1="0.5" x2="156" y2="0.5" stroke="#E1E5EB" />
                    </Svg>

                </View>
                <View style={styles._linewrapper}>
                    <Svg style={styles._line} width="156" height="1" viewBox="0 0 156 1" fill="none" >
                        <Line y1="0.5" x2="156" y2="0.5" stroke="#E1E5EB" />
                    </Svg>
                </View>
            </View>
            <View style={styles.searchsugestions}>
                <View style={styles.______title}>
                    <Text style={styles._searchsugestions}>
                        {`Search sugestions`}
                    </Text>
                </View>
                <View style={styles._items}>
                    <View style={styles.row}>
                        {/* Vigma RN:: can be replaced with <_____item  /> */}
                        <View style={styles._____item}>
                            <View style={styles.__textwrapper}>
                                <Text style={styles._______text}>
                                    {`Knife`}
                                </Text>
                            </View>
                        </View>
                        {/* Vigma RN:: can be replaced with <______item  /> */}
                        <View style={styles.______item}>
                            <View style={styles.___textwrapper}>
                                <Text style={styles.________text}>
                                    {`Shoe racks`}
                                </Text>
                            </View>
                        </View>
                        {/* Vigma RN:: can be replaced with <_______item  /> */}
                        <View style={styles._______item}>
                            <View style={styles.____textwrapper}>
                                <Text style={styles._________text}>
                                    {`Bathroom mirror`}
                                </Text>
                            </View>
                        </View>
                        {/* Vigma RN:: can be replaced with <________item  /> */}
                        <View style={styles.________item}>
                            <View style={styles._____textwrapper}>
                                <Text style={styles.__________text}>
                                    {`Bed`}
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles._row}>
                        {/* Vigma RN:: can be replaced with <_________item  /> */}
                        <View style={styles._________item}>
                            <View style={styles.______textwrapper}>
                                <Text style={styles.___________text}>
                                    {`Table lamp`}
                                </Text>
                            </View>
                        </View>
                        {/* Vigma RN:: can be replaced with <__________item  /> */}
                        <View style={styles.__________item}>
                            <View style={styles._______textwrapper}>
                                <Text style={styles.____________text}>
                                    {`Pillow`}
                                </Text>
                            </View>
                        </View>
                        {/* Vigma RN:: can be replaced with <___________item  /> */}
                        <View style={styles.___________item}>
                            <View style={styles.________textwrapper}>
                                <Text style={styles._____________text}>
                                    {`Bookshelf`}
                                </Text>
                            </View>
                        </View>
                        {/* Vigma RN:: can be replaced with <____________item  /> */}
                        <View style={styles.____________item}>
                            <View style={styles._________textwrapper}>
                                <Text style={styles.______________text}>
                                    {`Towel`}
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.__row}>
                        {/* Vigma RN:: can be replaced with <_____________item  /> */}
                        <View style={styles._____________item}>
                            <View style={styles.__________textwrapper}>
                                <Text style={styles._______________text}>
                                    {`Microwaves`}
                                </Text>
                            </View>
                        </View>
                        {/* Vigma RN:: can be replaced with <______________item  /> */}
                        <View style={styles.______________item}>
                            <View style={styles.___________textwrapper}>
                                <Text style={styles.________________text}>
                                    {`Napkins`}
                                </Text>
                            </View>
                        </View>
                        {/* Vigma RN:: can be replaced with <_______________item  /> */}
                        <View style={styles._______________item}>
                            <View style={styles.____________textwrapper}>
                                <Text style={styles._________________text}>
                                    {`Clocks`}
                                </Text>
                            </View>
                        </View>
                        {/* Vigma RN:: can be replaced with <________________item  /> */}
                        <View style={styles.________________item}>
                            <View style={styles._____________textwrapper}>
                                <Text style={styles.__________________text}>
                                    {`Mirrors`}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            {/* Vigma RN:: can be replaced with <Navbottom type={"main"} screen={"mobile"} /> */}
            <View style={styles.navbottom}>
                {/* Vigma RN:: can be replaced with <Item1 state={"default"} /> */}
                <View style={styles.item1}>
                    {/* Vigma RN:: can be replaced with <_icon  /> */}
                    <View style={styles._icon}>
                        <View style={styles.________boundingbox} />
                        <Svg style={styles.________vector} width="14" height="16" viewBox="0 0 14 16" fill="none" >
                            <Path d="M1.99999 13.8334H4.49999V8.83342H9.49999V13.8334H12V6.33342L6.99999 2.58341L1.99999 6.33342V13.8334ZM1.99999 15.5001C1.54166 15.5001 1.1493 15.3369 0.822912 15.0105C0.496523 14.6841 0.333328 14.2917 0.333328 13.8334V6.33342C0.333328 6.06953 0.392356 5.81953 0.510412 5.58342C0.628467 5.3473 0.791662 5.15286 0.999995 5.00008L5.99999 1.25008C6.15277 1.13897 6.31249 1.05564 6.47916 1.00008C6.64583 0.944526 6.81944 0.916748 6.99999 0.916748C7.18055 0.916748 7.35416 0.944526 7.52083 1.00008C7.68749 1.05564 7.84722 1.13897 7.99999 1.25008L13 5.00008C13.2083 5.15286 13.3715 5.3473 13.4896 5.58342C13.6076 5.81953 13.6667 6.06953 13.6667 6.33342V13.8334C13.6667 14.2917 13.5035 14.6841 13.1771 15.0105C12.8507 15.3369 12.4583 15.5001 12 15.5001H7.83333V10.5001H6.16666V15.5001H1.99999Z" fill="#09111F" />
                        </Svg>

                    </View>
                </View>
                {/* Vigma RN:: can be replaced with <Item2 state={"active"} /> */}
                <View style={styles.item2}>
                    {/* Vigma RN:: can be replaced with <IconsFilledSearch  /> */}
                    <View style={styles.iconsFilledSearch}>
                        <View style={styles._________boundingbox} />
                        <Svg style={styles._________vector} width="17" height="17" viewBox="0 0 17 17" fill="none" >
                            <Path d="M14.5 16.2708L9.97917 11.7499C9.5625 12.0694 9.05208 12.3228 8.44792 12.5103C7.84375 12.6978 7.22917 12.7916 6.60417 12.7916C4.95053 12.7916 3.55101 12.219 2.4056 11.0737C1.2602 9.92851 0.6875 8.5292 0.6875 6.87582C0.6875 5.22244 1.26012 3.82284 2.40535 2.677C3.55058 1.53117 4.94988 0.958252 6.60327 0.958252C8.25665 0.958252 9.65625 1.53095 10.8021 2.67636C11.9479 3.82176 12.5208 5.22128 12.5208 6.87492C12.5208 7.49992 12.434 8.09714 12.2604 8.66659C12.0868 9.23603 11.8333 9.74297 11.5 10.1874L16.0625 14.7499C16.2708 14.9524 16.375 15.201 16.375 15.4956C16.375 15.7901 16.2627 16.0497 16.038 16.2744C15.8321 16.4803 15.5764 16.5833 15.2708 16.5833C14.9653 16.5833 14.7083 16.4791 14.5 16.2708ZM6.60417 10.5833C7.64583 10.5833 8.52431 10.2256 9.23958 9.51034C9.95486 8.79506 10.3125 7.91659 10.3125 6.87492C10.3125 5.83325 9.95486 4.95478 9.23958 4.2395C8.52431 3.52422 7.64583 3.16659 6.60417 3.16659C5.5625 3.16659 4.68403 3.52422 3.96875 4.2395C3.25347 4.95478 2.89583 5.83325 2.89583 6.87492C2.89583 7.91659 3.25347 8.79506 3.96875 9.51034C4.68403 10.2256 5.5625 10.5833 6.60417 10.5833Z" fill="#09111F" />
                        </Svg>

                    </View>
                    <Text style={styles.label}>
                        {`Search`}
                    </Text>
                </View>
                {/* Vigma RN:: can be replaced with <Item3 state={"default"} /> */}
                <View style={styles.item3}>
                    {/* Vigma RN:: can be replaced with <IconsOutlineShopping_cart  /> */}
                    <View style={styles.iconsOutlineShopping_cart}>
                        <View style={styles.__________boundingbox} />
                        <Svg style={styles.__________vector} width="17" height="18" viewBox="0 0 17 18" fill="none" >
                            <Path d="M5.33333 17.3334C4.875 17.3334 4.48264 17.1702 4.15625 16.8438C3.82986 16.5174 3.66667 16.1251 3.66667 15.6667C3.66667 15.2084 3.82986 14.8161 4.15625 14.4897C4.48264 14.1633 4.875 14.0001 5.33333 14.0001C5.79167 14.0001 6.18403 14.1633 6.51042 14.4897C6.8368 14.8161 7 15.2084 7 15.6667C7 16.1251 6.8368 16.5174 6.51042 16.8438C6.18403 17.1702 5.79167 17.3334 5.33333 17.3334ZM13.6667 17.3334C13.2083 17.3334 12.816 17.1702 12.4896 16.8438C12.1632 16.5174 12 16.1251 12 15.6667C12 15.2084 12.1632 14.8161 12.4896 14.4897C12.816 14.1633 13.2083 14.0001 13.6667 14.0001C14.125 14.0001 14.5174 14.1633 14.8438 14.4897C15.1701 14.8161 15.3333 15.2084 15.3333 15.6667C15.3333 16.1251 15.1701 16.5174 14.8438 16.8438C14.5174 17.1702 14.125 17.3334 13.6667 17.3334ZM4.625 4.00008L6.625 8.16675H12.4583L14.75 4.00008H4.625ZM5.33333 13.1667C4.70833 13.1667 4.23611 12.8924 3.91667 12.3438C3.59722 11.7952 3.58333 11.2501 3.875 10.7084L5 8.66675L2 2.33341H1.14583C0.909722 2.33341 0.715277 2.25355 0.5625 2.09383C0.409722 1.93411 0.333333 1.73619 0.333333 1.50008C0.333333 1.26397 0.413194 1.06605 0.572916 0.906331C0.732639 0.746609 0.930555 0.666748 1.16667 0.666748H2.52083C2.67361 0.666748 2.81944 0.708415 2.95833 0.791748C3.09722 0.875081 3.20139 0.993137 3.27083 1.14591L3.83333 2.33341H16.125C16.5 2.33341 16.7569 2.4723 16.8958 2.75008C17.0347 3.02786 17.0278 3.31953 16.875 3.62508L13.9167 8.95842C13.7639 9.23619 13.5625 9.45147 13.3125 9.60425C13.0625 9.75703 12.7778 9.83342 12.4583 9.83342H6.25L5.33333 11.5001H14.5208C14.7569 11.5001 14.9514 11.5799 15.1042 11.7397C15.2569 11.8994 15.3333 12.0973 15.3333 12.3334C15.3333 12.5695 15.2535 12.7674 15.0937 12.9272C14.934 13.0869 14.7361 13.1667 14.5 13.1667H5.33333Z" fill="#09111F" />
                        </Svg>

                    </View>
                    {/* Vigma RN:: can be replaced with <Badge type={"dot"} size={"small"} /> */}
                    <View style={styles.badge}>
                        <Svg style={styles.dot} width="7" height="6" viewBox="0 0 7 6" fill="none" >
                            <Circle cx="3.5" cy="3" r="3" fill="#E50D24" />
                        </Svg>

                    </View>
                </View>
                {/* Vigma RN:: can be replaced with <Item4 state={"default"} /> */}
                <View style={styles.item4}>
                    {/* Vigma RN:: can be replaced with <IconsOutlineFavorite  /> */}
                    <View style={styles.iconsOutlineFavorite}>
                        <View style={styles.___________boundingbox} />
                        <Svg style={styles.___________vector} width="18" height="15" viewBox="0 0 18 15" fill="none" >
                            <Path d="M8.125 14.3334L6.6875 13.0209C5.21528 11.6737 3.88542 10.3369 2.69792 9.0105C1.51042 7.68411 0.916668 6.2223 0.916668 4.62508C0.916668 3.31953 1.35417 2.22925 2.22917 1.35425C3.10417 0.479248 4.19445 0.041748 5.5 0.041748C6.23611 0.041748 6.93056 0.197998 7.58333 0.510498C8.23611 0.822998 8.79167 1.25008 9.25 1.79175C9.70833 1.25008 10.2639 0.822998 10.9167 0.510498C11.5694 0.197998 12.2639 0.041748 13 0.041748C14.3056 0.041748 15.3958 0.479248 16.2708 1.35425C17.1458 2.22925 17.5833 3.31953 17.5833 4.62508C17.5833 6.2223 16.9931 7.68758 15.8125 9.02092C14.6319 10.3542 13.2917 11.6945 11.7917 13.0417L10.375 14.3334C10.0556 14.639 9.68056 14.7917 9.25 14.7917C8.81945 14.7917 8.44445 14.639 8.125 14.3334ZM8.45833 3.45841C8.05556 2.88897 7.625 2.45494 7.16667 2.15633C6.70833 1.85772 6.15278 1.70841 5.5 1.70841C4.66667 1.70841 3.97222 1.98619 3.41667 2.54175C2.86111 3.0973 2.58333 3.79175 2.58333 4.62508C2.58333 5.3473 2.84028 6.11467 3.35417 6.92717C3.86806 7.73967 4.48264 8.52786 5.19792 9.29175C5.9132 10.0556 6.64931 10.7709 7.40625 11.4376C8.1632 12.1042 8.77778 12.6529 9.25 13.0834C9.72222 12.6529 10.3368 12.1042 11.0938 11.4376C11.8507 10.7709 12.5868 10.0556 13.3021 9.29175C14.0174 8.52786 14.6319 7.73967 15.1458 6.92717C15.6597 6.11467 15.9167 5.3473 15.9167 4.62508C15.9167 3.79175 15.6389 3.0973 15.0833 2.54175C14.5278 1.98619 13.8333 1.70841 13 1.70841C12.3472 1.70841 11.7917 1.85772 11.3333 2.15633C10.875 2.45494 10.4444 2.88897 10.0417 3.45841C9.94445 3.5973 9.82639 3.70147 9.6875 3.77091C9.54861 3.84036 9.40278 3.87508 9.25 3.87508C9.09722 3.87508 8.95139 3.84036 8.8125 3.77091C8.67361 3.70147 8.55556 3.5973 8.45833 3.45841Z" fill="#09111F" />
                        </Svg>

                    </View>
                </View>
                {/* Vigma RN:: can be replaced with <Item5 state={"default"} /> */}
                <View style={styles.item5}>
                    {/* Vigma RN:: can be replaced with <IconsOutlinePerson  /> */}
                    <View style={styles.iconsOutlinePerson}>
                        <View style={styles.____________boundingbox} />
                        <Svg style={styles.____________vector} width="14" height="14" viewBox="0 0 14 14" fill="none" >
                            <Path d="M7 6.99992C6.08334 6.99992 5.29861 6.67353 4.64584 6.02075C3.99306 5.36797 3.66667 4.58325 3.66667 3.66659C3.66667 2.74992 3.99306 1.9652 4.64584 1.31242C5.29861 0.659641 6.08334 0.333252 7 0.333252C7.91667 0.333252 8.70139 0.659641 9.35417 1.31242C10.0069 1.9652 10.3333 2.74992 10.3333 3.66659C10.3333 4.58325 10.0069 5.36797 9.35417 6.02075C8.70139 6.67353 7.91667 6.99992 7 6.99992ZM12 13.6666H2C1.54167 13.6666 1.14931 13.5034 0.822919 13.177C0.49653 12.8506 0.333336 12.4583 0.333336 11.9999V11.3333C0.333336 10.861 0.454864 10.427 0.697919 10.0312C0.940975 9.63533 1.26389 9.33325 1.66667 9.12492C2.52778 8.69436 3.40278 8.37145 4.29167 8.15617C5.18056 7.94089 6.08334 7.83325 7 7.83325C7.91667 7.83325 8.81945 7.94089 9.70834 8.15617C10.5972 8.37145 11.4722 8.69436 12.3333 9.12492C12.7361 9.33325 13.059 9.63533 13.3021 10.0312C13.5451 10.427 13.6667 10.861 13.6667 11.3333V11.9999C13.6667 12.4583 13.5035 12.8506 13.1771 13.177C12.8507 13.5034 12.4583 13.6666 12 13.6666ZM2 11.9999H12V11.3333C12 11.1805 11.9618 11.0416 11.8854 10.9166C11.809 10.7916 11.7083 10.6944 11.5833 10.6249C10.8333 10.2499 10.0764 9.96867 9.3125 9.78117C8.54861 9.59367 7.77778 9.49992 7 9.49992C6.22222 9.49992 5.45139 9.59367 4.6875 9.78117C3.92361 9.96867 3.16667 10.2499 2.41667 10.6249C2.29167 10.6944 2.19097 10.7916 2.11459 10.9166C2.0382 11.0416 2 11.1805 2 11.3333V11.9999ZM7 5.33325C7.45834 5.33325 7.8507 5.17006 8.17709 4.84367C8.50348 4.51728 8.66667 4.12492 8.66667 3.66659C8.66667 3.20825 8.50348 2.81589 8.17709 2.4895C7.8507 2.16311 7.45834 1.99992 7 1.99992C6.54167 1.99992 6.14931 2.16311 5.82292 2.4895C5.49653 2.81589 5.33334 3.20825 5.33334 3.66659C5.33334 4.12492 5.49653 4.51728 5.82292 4.84367C6.14931 5.17006 6.54167 5.33325 7 5.33325Z" fill="#09111F" />
                        </Svg>

                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    searchIndex: {
        flexShrink: 0,
        height: 800,
        width: 360,
        paddingTop: 0,
        paddingBottom: 64,
        backgroundColor: "rgba(255, 255, 255, 1)",
        alignItems: "flex-start",
        rowGap: 4,
        paddingHorizontal: 0
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
        color: "rgba(145, 155, 173, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 14,
        fontWeight: "400",
        letterSpacing: 0,
        lineHeight: 20
    },
    searchhistory: {
        alignSelf: "stretch",
        flexShrink: 0,
        paddingTop: 0,
        paddingBottom: 4,
        alignItems: "center",
        rowGap: 12,
        paddingHorizontal: 0
    },
    title: {
        alignSelf: "stretch",
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "flex-end",
        columnGap: 12,
        paddingVertical: 0,
        paddingHorizontal: 24
    },
    _searchhistory: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 16,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 24
    },
    buttonviewmore: {
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
    items: {
        alignSelf: "stretch",
        flexShrink: 0,
        alignItems: "flex-start",
        rowGap: 0
    },
    item: {
        alignSelf: "stretch",
        flexShrink: 0,
        paddingLeft: 24,
        paddingRight: 20,
        backgroundColor: "rgba(255, 255, 255, 1)",
        flexDirection: "row",
        alignItems: "center",
        columnGap: 8,
        paddingVertical: 10
    },
    _text: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        alignItems: "flex-start",
        justifyContent: "center",
        rowGap: 0
    },
    _title: {
        alignSelf: "stretch",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(76, 89, 112, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 14,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 20
    },
    itemright: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        columnGap: 0
    },
    iconright: {
        flexShrink: 0,
        height: 20,
        width: 20,
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
        top: 5,
        right: 5,
        bottom: 5,
        left: 5,
        overflow: "visible"
    },
    _item: {
        alignSelf: "stretch",
        flexShrink: 0,
        paddingLeft: 24,
        paddingRight: 20,
        backgroundColor: "rgba(255, 255, 255, 1)",
        flexDirection: "row",
        alignItems: "center",
        columnGap: 8,
        paddingVertical: 10
    },
    __text: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        alignItems: "flex-start",
        justifyContent: "center",
        rowGap: 0
    },
    __title: {
        alignSelf: "stretch",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(76, 89, 112, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 14,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 20
    },
    _itemright: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        columnGap: 0
    },
    _iconright: {
        flexShrink: 0,
        height: 20,
        width: 20,
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
        top: 5,
        right: 5,
        bottom: 5,
        left: 5,
        overflow: "visible"
    },
    __item: {
        alignSelf: "stretch",
        flexShrink: 0,
        paddingLeft: 24,
        paddingRight: 20,
        backgroundColor: "rgba(255, 255, 255, 1)",
        flexDirection: "row",
        alignItems: "center",
        columnGap: 8,
        paddingVertical: 10
    },
    ___text: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        alignItems: "flex-start",
        justifyContent: "center",
        rowGap: 0
    },
    ___title: {
        alignSelf: "stretch",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(76, 89, 112, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 14,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 20
    },
    __itemright: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        columnGap: 0
    },
    __iconright: {
        flexShrink: 0,
        height: 20,
        width: 20,
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
    ____vector: {
        position: "absolute",
        flexShrink: 0,
        top: 5,
        right: 5,
        bottom: 5,
        left: 5,
        overflow: "visible"
    },
    ___item: {
        alignSelf: "stretch",
        flexShrink: 0,
        paddingLeft: 24,
        paddingRight: 20,
        backgroundColor: "rgba(255, 255, 255, 1)",
        flexDirection: "row",
        alignItems: "center",
        columnGap: 8,
        paddingVertical: 10
    },
    ____text: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        alignItems: "flex-start",
        justifyContent: "center",
        rowGap: 0
    },
    ____title: {
        alignSelf: "stretch",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(76, 89, 112, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 14,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 20
    },
    ___itemright: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        columnGap: 0
    },
    ___iconright: {
        flexShrink: 0,
        height: 20,
        width: 20,
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
    _____vector: {
        position: "absolute",
        flexShrink: 0,
        top: 5,
        right: 5,
        bottom: 5,
        left: 5,
        overflow: "visible"
    },
    ____item: {
        alignSelf: "stretch",
        flexShrink: 0,
        paddingLeft: 24,
        paddingRight: 20,
        backgroundColor: "rgba(255, 255, 255, 1)",
        flexDirection: "row",
        alignItems: "center",
        columnGap: 8,
        paddingVertical: 10
    },
    _____text: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        alignItems: "flex-start",
        justifyContent: "center",
        rowGap: 0
    },
    _____title: {
        alignSelf: "stretch",
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(76, 89, 112, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 14,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 20
    },
    ____itemright: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        columnGap: 0
    },
    ____iconright: {
        flexShrink: 0,
        height: 20,
        width: 20,
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
    ______vector: {
        position: "absolute",
        flexShrink: 0,
        top: 5,
        right: 5,
        bottom: 5,
        left: 5,
        overflow: "visible"
    },
    _buttonviewmore: {
        alignSelf: "stretch",
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
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
    icon: {
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
    _______vector: {
        position: "absolute",
        flexShrink: 0,
        top: 6,
        right: 5,
        bottom: 6,
        left: 4,
        overflow: "visible"
    },
    divider: {
        alignSelf: "stretch",
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 0,
        paddingVertical: 0,
        paddingHorizontal: 24
    },
    linewrapper: {
        alignSelf: "stretch",
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        alignItems: "flex-start",
        rowGap: 0,
        paddingVertical: 12,
        paddingHorizontal: 0
    },
    line: {
        alignSelf: "stretch",
        flexShrink: 0,
        minHeight: 0.001,
        overflow: "visible"
    },
    _linewrapper: {
        alignSelf: "stretch",
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        alignItems: "flex-start",
        rowGap: 0,
        paddingVertical: 12,
        paddingHorizontal: 0
    },
    _line: {
        alignSelf: "stretch",
        flexShrink: 0,
        minHeight: 0.001,
        overflow: "visible"
    },
    searchsugestions: {
        flexShrink: 0,
        alignItems: "flex-start",
        rowGap: 12
    },
    ______title: {
        flexShrink: 0,
        width: 360,
        flexDirection: "row",
        alignItems: "center",
        columnGap: 12,
        paddingVertical: 0,
        paddingHorizontal: 24
    },
    _searchsugestions: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 16,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 24
    },
    _items: {
        alignSelf: "stretch",
        flexShrink: 0,
        alignItems: "flex-start",
        rowGap: 8,
        paddingVertical: 0,
        paddingHorizontal: 24
    },
    row: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 8
    },
    _____item: {
        flexShrink: 0,
        backgroundColor: "rgba(240, 242, 245, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 0,
        padding: 6,
        borderRadius: 8
    },
    __textwrapper: {
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
    ______item: {
        flexShrink: 0,
        backgroundColor: "rgba(240, 242, 245, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 0,
        padding: 6,
        borderRadius: 8
    },
    ___textwrapper: {
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
    _______item: {
        flexShrink: 0,
        backgroundColor: "rgba(240, 242, 245, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 0,
        padding: 6,
        borderRadius: 8
    },
    ____textwrapper: {
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
    ________item: {
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
    _row: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 8
    },
    _________item: {
        flexShrink: 0,
        backgroundColor: "rgba(240, 242, 245, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 0,
        padding: 6,
        borderRadius: 8
    },
    ______textwrapper: {
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
    __________item: {
        flexShrink: 0,
        backgroundColor: "rgba(240, 242, 245, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 0,
        padding: 6,
        borderRadius: 8
    },
    _______textwrapper: {
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
    ___________item: {
        flexShrink: 0,
        backgroundColor: "rgba(240, 242, 245, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 0,
        padding: 6,
        borderRadius: 8
    },
    ________textwrapper: {
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
    ____________item: {
        flexShrink: 0,
        backgroundColor: "rgba(240, 242, 245, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 0,
        padding: 6,
        borderRadius: 8
    },
    _________textwrapper: {
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
    __row: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "flex-start",
        columnGap: 8
    },
    _____________item: {
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
    ______________item: {
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
    _______________item: {
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
    ________________item: {
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
    navbottom: {
        position: "absolute",
        flexShrink: 0,
        bottom: 0,
        left: 0,
        right: 0,
        borderTopWidth: 1,
        borderRightWidth: 0,
        borderBottomWidth: 0,
        borderLeftWidth: 0,
        backgroundColor: "rgba(255, 255, 255, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        columnGap: 0,
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderColor: "rgba(225, 229, 235, 1)"
    },
    item1: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 4,
        padding: 10,
        borderRadius: 9999
    },
    _icon: {
        flexShrink: 0,
        height: 20,
        width: 20,
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
    ________vector: {
        position: "absolute",
        flexShrink: 0,
        top: 3,
        right: 3,
        bottom: 2,
        left: 3,
        overflow: "visible"
    },
    item2: {
        flexShrink: 0,
        paddingLeft: 10,
        paddingRight: 14,
        backgroundColor: "rgba(240, 242, 245, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 4,
        paddingVertical: 10,
        borderRadius: 9999
    },
    iconsFilledSearch: {
        flexShrink: 0,
        height: 20,
        width: 20,
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
    _________vector: {
        position: "absolute",
        flexShrink: 0,
        top: 2,
        right: 2,
        bottom: 2,
        left: 2,
        overflow: "visible"
    },
    label: {
        flexShrink: 0,
        textAlign: "left",
        color: "rgba(9, 17, 31, 1)",
        fontFamily: "Satoshi Variable",
        fontSize: 14,
        fontWeight: "700",
        letterSpacing: 0,
        lineHeight: 20
    },
    item3: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 4,
        padding: 10,
        borderRadius: 9999
    },
    iconsOutlineShopping_cart: {
        flexShrink: 0,
        height: 20,
        width: 20,
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
    __________vector: {
        position: "absolute",
        flexShrink: 0,
        top: 2,
        right: 3,
        bottom: 2,
        left: 1,
        overflow: "visible"
    },
    badge: {
        position: "absolute",
        flexShrink: 0,
        top: 7,
        height: 6,
        left: 27,
        width: 6,
        alignItems: "flex-start",
        rowGap: 0
    },
    dot: {
        position: "absolute",
        flexShrink: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        overflow: "visible"
    },
    item4: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 4,
        padding: 10,
        borderRadius: 9999
    },
    iconsOutlineFavorite: {
        flexShrink: 0,
        height: 20,
        width: 20,
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
    ___________vector: {
        position: "absolute",
        flexShrink: 0,
        top: 3,
        right: 2,
        bottom: 2,
        left: 2,
        overflow: "visible"
    },
    item5: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 4,
        padding: 10,
        borderRadius: 9999
    },
    iconsOutlinePerson: {
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
    ____________vector: {
        position: "absolute",
        flexShrink: 0,
        top: 3,
        right: 3,
        bottom: 3,
        left: 3,
        overflow: "visible"
    }
})