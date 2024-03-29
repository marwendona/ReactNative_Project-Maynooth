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
import theme from '../../Components/theme'
import { themeGlobal } from '../../styles/themeGlobal'
import Svg, { Path } from 'react-native-svg'

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
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.carouselWrapper}>
          <Caroussel />
        </View>
        <View style={styles.titleSectionWrapper}>
          <Text style={themeGlobal.themeGlobalText.h5}> Room ideas</Text>
          <View style={styles.buttonviewmore}>
            <View style={styles.textwrapper}>
              <Text style={styles.text}>{`View more`}</Text>
            </View>
            <TouchableOpacity
              style={styles.icon}
              onPress={() => router.push("/products")}
            >
              <View style={styles.boundingbox} />
              <Svg
                style={styles.vector}
                width="5"
                height="8"
                viewBox="0 0 5 8"
                fill="none"
              >
                <Path
                  d="M0.466659 7.53332C0.344436 7.4111 0.283325 7.25555 0.283325 7.06666C0.283325 6.87777 0.344436 6.72221 0.466659 6.59999L3.06666 3.99999L0.466659 1.39999C0.344436 1.27777 0.283325 1.12221 0.283325 0.933325C0.283325 0.744436 0.344436 0.588881 0.466659 0.466659C0.588881 0.344436 0.744436 0.283325 0.933325 0.283325C1.12221 0.283325 1.27777 0.344436 1.39999 0.466659L4.46666 3.53332C4.53333 3.59999 4.58055 3.67221 4.60833 3.74999C4.6361 3.82777 4.64999 3.9111 4.64999 3.99999C4.64999 4.08888 4.6361 4.17221 4.60833 4.24999C4.58055 4.32777 4.53333 4.39999 4.46666 4.46666L1.39999 7.53332C1.27777 7.65555 1.12221 7.71666 0.933325 7.71666C0.744436 7.71666 0.588881 7.65555 0.466659 7.53332Z"
                  fill="#09111F"
                />
              </Svg>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView horizontal={true} style={styles.fullImageCardsWrapper}>
          {products.map &&
            products.map((product, index: number) => (
              <View style={styles.fullImageCardWrapper} key={index}>
                <TouchableOpacity style={{ marginRight: 12, marginLeft: 12 }} key={index} onPress={() => { redirectProductById(product) }}>

                <Card2
                  key={product.id}
                  title={product.title}
                  subtitle={product.description}
                  orientation={CardOrientation.Horizontal}
                  image={product.image}
                />
                </TouchableOpacity>
              </View>
            ))}
        </ScrollView>
        <View style={styles.titleSectionWrapper}>
          <Text style={themeGlobal.themeGlobalText.h5}>Shop by room</Text>
        </View>
        <ScrollView horizontal={true} style={styles.fullImageCardsWrapper}>
          {products.map &&
            products.map((product, index: number) => (
              <View style={styles.fullImageCardWrapper} key={index}>
                <TouchableOpacity style={{ marginRight: 12, marginLeft: 12 }} key={index} onPress={() => { redirectProductById(product) }}>
                <Card2
                  key={product.id}
                  title={product.title}
                  subtitle={product.description}
                  orientation={CardOrientation.Horizontal}
                  image={product.image}
                />
                </TouchableOpacity>
              </View>
            ))}
        </ScrollView>
        <View style={styles.titleSectionWrapper}>
          <Text style={themeGlobal.themeGlobalText.h5}>
            Recommended for you
          </Text>
        </View>
        <View style={styles.productCardsWrapper}>
          {products.map((product, index: number) => (
            <View key={index} style={styles.columnWrapper}>
              <View key={product.id} style={styles.productCardWrapper}>
              <TouchableOpacity style={{ marginRight: 12, marginLeft: 12 }} key={index} onPress={() => { redirectProductById(product) }}>
                <Card1
                  key={product.id}
                  title={product.title}
                  subtitle={product.description}
                  type={'Product'}
                  initialPrice={product.price}
                  discount={
                    Math.round(((product.promotion-product.price)/product.price)*100) + '%'
                  }
                  newPrice={product.promotion}
                  image={product.image}
                  orientation='Vertical'
                  rating='5.0'
                />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

export default Home


const styles = StyleSheet.create({
  buttonviewmore: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 0,
    paddingVertical: 1,
    paddingHorizontal: 0,
  },
  textwrapper: {
    flexShrink: 0,
    paddingTop: 0,
    paddingBottom: 2,
    flexDirection: "row",
    alignItems: "flex-start",
    columnGap: 0,
    paddingHorizontal: 0,
  },
  text: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(9, 17, 31, 1)",
    fontFamily: "Satoshi Variable",
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 0,
    lineHeight: 16,
  },
  icon: {
    flexShrink: 0,
    height: 16,
    width: 16,
    alignItems: "flex-start",
    rowGap: 0,
  },
  boundingbox: {
    position: "absolute",
    flexShrink: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  vector: {
    position: "absolute",
    flexShrink: 0,
    top: 4,
    right: 5,
    bottom: 4,
    left: 6,
    overflow: "visible",
  },
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  carouselWrapper: {
    marginBottom: 20,
    width: "100%",
    height: 188,
    paddingHorizontal: 24,
  },
  titleSectionWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  fullImageCardsWrapper: {
    marginBottom: 20,
  },
  fullImageCardWrapper: {
    marginLeft: 20,
    borderRadius: 10,
    overflow: "hidden",
  },
  productCardsWrapper: {
    marginBottom: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
    overflow: "hidden",
  },
  columnWrapper: {
    gap: 20,
  },
  productCardWrapper: {
    marginBottom: 20,
    borderRadius: 10,
    overflow: "hidden",
  },
});

