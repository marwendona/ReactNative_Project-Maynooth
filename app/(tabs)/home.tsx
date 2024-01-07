import { Button, Modal, StyleSheet, Text, Touchable, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { service } from '../../service'
import { useDispatch, useSelector } from 'react-redux'

import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { router } from 'expo-router'
import Card1 from '../../Components/Card1'
import Card2, { CardOrientation } from '../../Components/Card2'
import Caroussel from '../../Components/Caroussel'

const Home = () => {
  const products = useSelector(state => state?.product.products)
  const [showModal, setShowModal] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await service.products.productsList()
      console.log(data)
      dispatch({ type: 'SET_PRODUCTS', payload: data.paginatedResult })
      
    }
    fetchData()
  }, [])

  const redirectProductById = (item: any) => {
    dispatch({ type: 'SET_SELECTED_PRODUCT', payload: item })
    router.push({ pathname: '/(aux)/product/[product]', params: { product: item.id } })
  }

  return (
    // <ScrollView>
    //   <ScrollView horizontal={true}>
    //     {products?.map((item, index) => (
    //       <View key={index}>
    //         <TouchableOpacity key={index} onPress={() => { redirectProductById(item) }}>
    //         <Card2
    //                             title={item.title}
    //                             subtitle={item.description}
    //                             orientation= {CardOrientation.Horizontal}
    //                             image={item.image}
    //                         />
    //         </TouchableOpacity></View>
    //     ))}
    //   </ScrollView>

    //   <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
    //     {products?.map((item, index) => (
    //       <View key={index} style={{ width: '50%' }}>
    //         <TouchableOpacity key={index} onPress={() => { router.push({ pathname: '/(aux)/product/[product]', params: { product: item.id } }) }}>
    //         <Card1
    //                             title={item.title}
    //                             subtitle={item.description}
    //                             type={'Product'}
    //                             initialPrice={item.price}
    //                             discount={(item.price / item.promotion) * 100}
    //                             newPrice={item.promotion}
    //                             image={item.image}
    //                             orientation='Vertical'
    //                             rating='5.0'
    //                         />
    //         </TouchableOpacity></View>
    //     ))}

    //   </View>

    // </ScrollView>

    <ScrollView>
      <View style={styles.flexContainer}>
        <View style={styles.flexItem}>
          <Caroussel/>
        </View>
        <View style={styles.flexItem}>
        <Text>5</Text>
        </View>
        <View style={styles.flexItem}>
        <Text>5</Text>
        </View>
        <View style={styles.flexItem}>
        <Text>5</Text>
        </View>
      </View>
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  flexContainer : {
    backGroundColour:"white",
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignContent: 'flex-start',
    width: '100%',
    height: '80vh',
    overflow: 'auto',
    flexDirection: 'column'
  },
  flexItem:{
    margin:12,
  }
})
