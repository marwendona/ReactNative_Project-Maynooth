import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import Icon from '../../../Components/Icon';
import Card1 from '../../../Components/Card1';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux';
import { service } from '../../../service';

const SearchResult = () => {
    const scaleValue = new Animated.Value(1);
    const products = useSelector(state => state?.product.products)
    const [showModal, setShowModal] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {

        const fetchData = async () => {
            const { data } = await service.products.productsList()
            console.log(data)
            dispatch({ type: 'SET_PRODUCTS', payload: data.paginatedResult })
            console.log("products ", products)
        }
        fetchData()

    }, [])

    const handleIconPress = () => {
        // Animation logic
        Animated.sequence([
            Animated.timing(scaleValue, { toValue: 1.2, duration: 100, useNativeDriver: true }),
            Animated.timing(scaleValue, { toValue: 1, duration: 100, useNativeDriver: true }),
        ]).start();
    };
    return (
        <View  style={{ flex: 1, backgroundColor: 'white' }} >

            <View style={styles.container}>
                <TouchableOpacity style={styles.relevance} onPress={handleIconPress}>
                    <Text style={styles.text}>Relevance</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.latest} onPress={handleIconPress}>
                    <Text style={styles.text}>Latest</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.topsales} onPress={handleIconPress}>
                    <Text style={styles.text}>Top Sales</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.price} onPress={handleIconPress}>
                    <Text style={styles.text}>Price</Text>
                    <Icon iconName="unfold_more" size="Small" />
                </TouchableOpacity>
            </View>
            <View>
                <View style={styles.container}>
                <Text style={styles.resultsText}>{products.length} results for Table</Text>
                </View>

                <View style={styles.containerprod}>
                    {products.map((product: any, index: any) => (
                        <View key={index} style={styles.itemprod}>
                            <Card1
                                title={product.title}
                                subtitle={product.description}
                                type={'Product'}
                                initialPrice={product.price}
                                discount={(product.price / product.promotion) * 100}
                                newPrice={product.promotion}
                                image={product.image}
                                orientation='Vertical'
                                rating='5.0'
                            />
                        </View>
                    ))}
                </View>
            </View>

            
        </View>

        
    )
}
export default SearchResult
const styles = StyleSheet.create({
    resultsText: {
        fontSize: 18,
        fontWeight: 'bold', 
    },
    containerprod: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'space-between',
        marginLeft: 30,
    },
    containerprodAfter: {
        flex: 999,
    },
    itemprod: {
        flexBasis: '35%',
        marginRight: 40,
        marginBottom: 20
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
    },
    item: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        marginHorizontal: 5,
        alignItems: 'center',
    },
    text: {
        fontSize: 16,
    },
    price: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    relevance: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        columnGap: 0,
        paddingVertical: 1,
        paddingHorizontal: 0
    },
    latest: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        columnGap: 0,
        paddingVertical: 1,
        paddingHorizontal: 0
    },
    topsales: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        columnGap: 0,
        paddingVertical: 1,
        paddingHorizontal: 0
    },

})