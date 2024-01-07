import { Button, Modal, StyleSheet, Text, Touchable, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { service } from '../../service'
import { useDispatch, useSelector } from 'react-redux'

import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { router } from 'expo-router'
import Card1 from '../../Components/Card1'
import Card2, { CardOrientation } from '../../Components/Card2'
import Caroussel from '../../Components/Caroussel'
import Icon from '../../Components/Icon'

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
        <View style={[styles.flexItem, styles.flexContainerRoomIdea]}>
          <Caroussel />
        </View>

        <View style={[styles.flexItem, { width: '100%' }]}>
          <View style={styles.roomIdeaText}>
            <Text style={[styles.flexItem, styles.title]}>Room Ideas</Text>
            <View style={[styles.flexItem, { flexDirection: 'row' }]}>
              <Text style={[styles.title, { marginRight: 4 }]}>View more</Text>
              <Icon iconName={'chevron_right'} color='black' size='Small' />
            </View>
          </View>
          <View style={[styles.roomIdea]}>
            <ScrollView horizontal={true} >
              {products?.map((item, index) => (
                <View key={index}>
                  <TouchableOpacity style={{ marginRight: 12, marginLeft: 12 }} key={index} onPress={() => { redirectProductById(item) }}>
                    <Card2
                      title={item.title}
                      subtitle={item.description}
                      orientation={CardOrientation.Horizontal}
                      image={item.image}
                    />
                  </TouchableOpacity></View>
              ))}
            </ScrollView>
          </View>
        </View>
        <View style={[styles.flexItem, { width: '100%' }]}>
          <View style={styles.roomIdeaText}>
            <Text style={[styles.flexItem, styles.title]}>Shop by room</Text>
          </View>
          <View style={[styles.roomIdea]}>
            <ScrollView horizontal={true} >
              {products?.map((item, index) => (
                <View key={index}>
                  <TouchableOpacity style={{ marginRight: 12, marginLeft: 12 }} key={index} onPress={() => { redirectProductById(item) }}>
                    <Card2
                      title={item.title}
                      subtitle={item.description}
                      orientation={CardOrientation.Vertical}
                      image={item.image}
                    />
                  </TouchableOpacity></View>
              ))}
            </ScrollView>
          </View>
        </View>
        <View>
          <ScrollView>
            <Text>Recommended for you</Text>
            <View style={[styles.flexItem, styles.recommendedForYou]}>
            <View>
              {products?.slice(0,5).map((item, index) => (
                <View key={index}>
                  <TouchableOpacity style={{ marginBottom: 12, marginTop: 12 }} key={index} onPress={() => { redirectProductById(item) }}>
                    <Card1
                      title={item.title}
                      subtitle={item.description}
                      type={'Product'}
                      initialPrice={item.price}
                      discount={(item.price / item.promotion) * 100}
                      newPrice={item.promotion}
                      image={item.image}
                      orientation='Vertical'
                      rating='5.0'
                    />
                  </TouchableOpacity></View>
              ))}
            </View>

            <View>
              {products?.slice(0,5).map((item, index) => (
                <View key={index}>
                  <TouchableOpacity style={{ marginBottom: 12, marginTop: 12 }} key={index} onPress={() => { redirectProductById(item) }}>
                    <Card1
                      title={item.title}
                      subtitle={item.description}
                      type={'Product'}
                      initialPrice={item.price}
                      discount={(item.price / item.promotion) * 100}
                      newPrice={item.promotion}
                      image={item.image}
                      orientation='Vertical'
                      rating='5.0'
                    />
                  </TouchableOpacity></View>
              ))}
            </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </ScrollView>

  )
}

export default Home

const styles = StyleSheet.create({
  flexContainer: {
    backGroundColour: "white",
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
  flexContainerRoomIdea: {
    backGroundColour: "white",
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignContent: 'flex-start',
    width: '100%',
    overflow: 'auto',
    flexDirection: 'column'
  },
  flexItem: {
    margin: 12,
    marginRight: 24,
    marginLeft: 24

  },
  roomIdea: {
    display: "flex",
    flexWrap: "nowrap",
    justifyContent: "flex-start",
    alignItems: "center",
    alignContent: "flex-start",
    overflow: "auto",
    flexDirection: "row"
  },
  roomIdeaText: {
    display: "flex",
    flexWrap: "nowrap",
    justifyContent: "flex-start",
    alignItems: "center",
    alignContent: "flex-start",
    overflow: "auto",
    flexDirection: "row"
  },
  title: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    textAlign: "left",
    color: "black",
    fontFamily: "Satoshi Variable",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0,
    lineHeight: 24
  },
  recommendedForYou: {
    backGroundColour: "white",
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    width: '100%',
    overflow: 'auto',
    flexDirection: 'column'
  },
})
