import { Button, Modal, StyleSheet, Text, Touchable, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { service } from '../../service'
import { useDispatch, useSelector } from 'react-redux'

import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { router } from 'expo-router'
import Card1 from '../../Components/Card1'

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
    <ScrollView>
      <Text>Shop by room</Text>
      <ScrollView horizontal={true}>
        {products?.map((item, index) => (
          <View>
            <TouchableOpacity onPress={() => { redirectProductById(item) }}>
              <Card1 key={index} title={item.title} newPrice={item.price} subtitle={item.description} type={'Product'} initialPrice={''} discount={''}></Card1>

            </TouchableOpacity></View>
        ))}
      </ScrollView>
      <Text>Home</Text>
      <Button title='show Hide Modal' onPress={() => { setShowModal(true) }} />
      <Modal visible={showModal} transparent={true}>
        <View style={{ backgroundColor: 'white', height: '70%', position: 'absolute', bottom: 0, width: '100%' }}>
          <Text>
            hello
            <Button title='show Hide Modal' onPress={() => { setShowModal(false) }} />

          </Text>
        </View>
      </Modal>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {products?.map((item, index) => (
          <View style={{ width: '50%' }}>
            <TouchableOpacity onPress={() => { router.push({ pathname: '/(aux)/product/[product]', params: { product: item.id } }) }}>
              <Card1 key={index} title={item.title} price={item.price} subtitle={item.description} type={'Product'}></Card1>

            </TouchableOpacity></View>
        ))}

      </View>

    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({})
