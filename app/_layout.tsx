import React, { useEffect } from 'react'
import { Tabs } from 'expo-router'
import { Provider } from 'react-redux'
import store from '../store'
import { service } from '../service'

const Layout = () => {
  // useEffect(async () => {
  //   const data = await service.products.productsList()
  //   console.log(data)
  // }, [])
  return (
    <Provider store={store}>
      <Tabs></Tabs>
    </Provider>

  )
}

export default Layout
