import { ScrollView, Share, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { router, useLocalSearchParams } from 'expo-router'
import { service } from '../../../service'
import { themeGlobal } from '../../../styles/themeGlobal'
import ProductCarousel from '../../../Components/ProductCarousel'
import theme from '../../../Components/theme'
import Icon from '../../../Components/Icon'
import { useSelector } from 'react-redux'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Card1 from '../../../Components/Card1'
import ProductReview from '../../../Components/ProductReview'
import ColorVariant from '../../../Components/ColorVariant'
import VerticalDivider from '../../../Components/VerticalDivider'
import TextCollapse from '../../../Components/TextCollapse'
type Rating = {
  id: string;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
  username?: string;
  productId?: string;
  value: number;
  color?:string;
  description?:string;
  images?:string[]
}
const DetailProduct = () => {
  const [ratings] = useState<Rating[]>([
    {
      id: "1",
      username: "Leslie Alexander",
      color: "White",
      description:
        "Lorem ipsum dolor sit amet consectetur. Suspendisse ac velit aliquam suscipit volutpat eget.",
      images: [
        "https://dummyimage.com/24x24/000/fff.jpg",
        "https://dummyimage.com/24x24/000/fff.jpg",
        "https://dummyimage.com/24x24/000/fff.jpg",
        "https://dummyimage.com/24x24/000/fff.jpg",
      ],
      value: 5,
    },
    {
      id: "2",
      username: "Username",
      color: "White",
      description:
        "Lorem ipsum dolor sit amet consectetur. Suspendisse ac velit aliquam suscipit volutpat eget.",
      value: 5,
    },
    {
      id: "3",
      username: "Username",
      color: "White",
      description:
        "Lorem ipsum dolor sit amet consectetur. Suspendisse ac velit aliquam suscipit volutpat eget.",
      value: 4,
    },
  ]);
  const localData = useLocalSearchParams()
  const [product, setProduct] = useState();
  const products = useSelector(state => state?.product.products)
  useEffect(() => {
    const fetchData = async () => {

      const { data } = await service.products.productsDetail(localData.product, {});
      console.log(data)
      setProduct(data)


    }
    fetchData()
  }, [])
if(product&&products)
{  return (
    <View style={styles.productDetailScreen}>
      <View style={styles.navTopWrapper}>

        <View style={stylesNav.navtop}>
          <View style={stylesNav.itemleftwrapper}>
            <TouchableOpacity  onPress={() => router.back()} >
            <Icon iconName='arrow_back' color={theme.colors.gray100} size={'Large'}> </Icon>
            </TouchableOpacity>
          </View>
          <View style={stylesNav.itemrightwrapper}>
            <Icon iconName='shopping_cart' color={theme.colors.gray100} size='Large'> </Icon>
          </View>
        </View>
      </View>
      {product.image ? (
        <ProductCarousel
          images={[
            product.image,
            "https://dummyimage.com/360x360/000/fff.jpg",
            product.image,
            "https://dummyimage.com/360x360/000/fff.jpg",
          ]}
        />
      ) : (
        <ProductCarousel
          images={[
            "https://dummyimage.com/360x360/000/fff.jpg",
            "https://dummyimage.com/360x360/000/fff.jpg",
            "https://dummyimage.com/360x360/000/fff.jpg",
            "https://dummyimage.com/360x360/000/fff.jpg",
          ]}
        />
      )}
      <View style={styles.container}>
        <ScrollView style={styles.productDetailInfos}>
          <Text style={themeGlobal.themeGlobalText.h4}>{product?.title}</Text>
          <Text
            style={themeGlobal.themeGlobalText.h5}
          >{`Rp ${product?.price}`}</Text>
          <View style={styles.initialpricewrapper}>
            <Text style={styles.initialprice}>{`Rp ${product?.price?.toFixed(
              3
            )}`}</Text>
            <View style={styles.badge}>
              <Text style={styles.label}>{`${product?.promotion}%`}</Text>
            </View>
          </View>
          <View style={styles.ratingsAndActionsWrapper}>
            <View style={styles.ratingsAndBadgeWrapper}>
              <Text style={styles.label_}>{`1.200 sold`}</Text>
              <VerticalDivider />
              <View style={styles.ratingsWrapper}>
                <Icon iconName='star_filled' color={theme.colors.yellow100} size='Large'> </Icon>
                <Text style={styles.label_}>{`4.8`}</Text>
              </View>
            </View>
            <View style={styles.ratingsWrapper}>
              <View style={styles.iconWrapper}>
                <Icon iconName='favorite' color={theme.colors.gray100} size='Large'> </Icon>
              </View>
              <View style={styles.iconWrapper}>
                <Icon iconName='share' color={theme.colors.gray100} size='Large'> </Icon>
              </View>
            </View>
          </View>
          <View style={styles.variationWrapper}>
            <View style={styles.topSide}>
              <View style={styles.titleWrapper}>
                <Text style={themeGlobal.themeGlobalText.h5}>
                  Select variation
                </Text>
                <Text style={themeGlobal.themeGlobalText.h6}>
                  (3 colors)
                </Text>
              </View>
              <View style={styles.iconWrapper}>
              <Icon iconName='arrow_right' color={theme.colors.gray100} size='Large'> </Icon>
              </View>
            </View>
            <View style={styles.bottomSide}>
              <ColorVariant color="#000000" title="Black" />
              <ColorVariant color="#919BAD" title="Gray" />
              <ColorVariant color="#FFFFFF" title="White" />
            </View>
          </View>
          <View style={styles.descriptionWrapper}>
            <TextCollapse />
          </View>
          <View style={styles.productReviewsWrapper}>
            <Text style={themeGlobal.themeGlobalText.h5}>{`Reviews`}</Text>
            {ratings.map((rating, index: number) => {
              return (
                <View style={styles.productReviewWrapper} key={index}>
                  <ProductReview {...rating} />
                </View>
              );
            })}
            <View style={styles.viewMoreButtonWrapper}>
              <View style={styles.buttonviewmore}>
                <View style={styles.textwrapper}>
                  <Text style={styles.text}>
                    {`View all reviews`}
                  </Text>
                </View>
                
                <Icon iconName={'chevron_right'} size='Large' color={theme.colors.gray100}></Icon>
              </View>
            </View>
          </View>
          <View style={styles.relatedProductsWrapper}>
            <Text
              style={[themeGlobal.themeGlobalText.h5, { marginBottom: 10 }]}
            >{`Related products`}</Text>
            <View style={styles.productCardsWrapper}>
              {products.map((product, index: number) => (
                <View key={index} style={styles.columnWrapper}>
                  <View key={product.id} style={styles.productCardWrapper}>
                    <Card1
                      key={product.id}
                      title={product.title}
                      subtitle={product.description}
                      type={'Product'}
                      initialPrice={product.price}
                      discount={
                        Math.round(((product.promotion - product.price) / product.price) * 100) + '%'
                      }
                      newPrice={product.promotion}
                      image={product.image}
                      orientation='Vertical'
                      rating='5.0'
                    />
                  </View>
                </View>
              ))}
            </View>
          </View>
          <View style={stylesnavbottom.navbottom}>
            <View style={stylesnavbottom.buttonleft}>
              <Icon iconName={'shopping_cart'} size='Large' color={theme.colors.gray100}></Icon>
            </View>
            <View style={stylesnavbottom.buttonright}>
              <View style={stylesnavbottom.textwrapper}>
                <Text style={stylesnavbottom.text}>
                  {`Buy now`}
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );}
  else {
    return (
      <View>
        <Text>loading</Text>
      </View>
    )
  }
}

export default DetailProduct

const stylesnavbottom = StyleSheet.create({
  navbottom: {
    flexShrink: 0,
    width: 360,
    borderTopWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    flexDirection: "row",
    alignItems: "center",
    columnGap: 12,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderColor: "rgba(225, 229, 235, 1)"
  },
  buttonleft: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 4,
    padding: 10,
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
    right: 2,
    bottom: 2,
    left: 1,
    overflow: "visible"
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
  textwrapper: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "flex-start",
    columnGap: 0,
    paddingVertical: 0,
    paddingHorizontal: 4
  },
  text: {
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
  container: {
    paddingHorizontal: 24,
    backgroundColor: "white",
    flex: 1,
  },
  productDetailScreen: {
    position: "relative",
  },
  navTopWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 1,
  },
  productDetailInfos: {
    paddingVertical: 20,
  },
  initialpricewrapper: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 8,
  },
  initialprice: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(76, 89, 112, 1)",
    fontFamily: "Satoshi Variable",
    fontSize: 14,
    fontWeight: "400",
    letterSpacing: 0,
    lineHeight: 20,
    textDecorationLine: "line-through",
  },
  badge: {
    flexShrink: 0,
    backgroundColor: "rgba(215, 246, 228, 1)",
    flexDirection: "row",
    alignItems: "flex-start",
    columnGap: 0,
    paddingVertical: 0,
    paddingHorizontal: 6,
    borderRadius: 4,
  },
  label: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(8, 199, 84, 1)",
    fontFamily: "Satoshi Variable",
    fontSize: 14,
    fontWeight: "700",
    letterSpacing: 0,
    lineHeight: 20,
  },
  ratingsAndBadgeWrapper: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    paddingVertical: 10,
    alignContent: "center",
  },
  ratingsAndActionsWrapper: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    paddingVertical: 10,
    alignContent: "center",
    width: "100%",
    justifyContent: "space-between",
  },
  label_: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(76, 89, 112, 1)",
    fontFamily: "Satoshi Variable",
    fontSize: 14,
    fontWeight: "700",
    letterSpacing: 0,
    lineHeight: 20,
  },
  ratingsWrapper: {
    display: "flex",
    flexDirection: "row",
    gap: 6,
  },
  ratingProduct: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "flex-start",
    columnGap: 4,
  },
  iconsFilledStar: {
    flexShrink: 0,
    height: 20,
    width: 20,
    alignItems: "flex-start",
    rowGap: 0,
  },

  iconWrapper: {
    padding: 10,
  },
  variationWrapper: {
    marginBottom: 20,
  },
  topSide: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  bottomSide: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 10,
  },
  titleWrapper: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    height: "auto",
  },
  descriptionWrapper: {
    marginBottom: 20,
  },
  productReviewsWrapper: {
    marginBottom: 20,
  },
  productReviewWrapper: {
    marginBottom: 20,
  },
  viewMoreButtonWrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  relatedProductsWrapper: {},
  productCardsWrapper: {
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
  ButtonIconWrapper: {
    width: 40,
  },
  ButtonSubmitWrapper: {
    flex: 1,
  },
  addToCartWrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
});
const stylesNav = StyleSheet.create({
  navtop: {
    paddingTop: 20,
    alignSelf: "stretch",
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    columnGap: 0,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  itemleftwrapper: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "flex-start",
    columnGap: 0,
  },
  itemrightwrapper: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "flex-end",
    columnGap: 0,
  },
  title: {
    flexShrink: 0,
    textAlign: "left",
    color: "rgba(9, 17, 31, 1)",
    fontFamily: "Satoshi Variable",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0,
    lineHeight: 24,
  },
});