import { View, Text } from 'react-native'
import React from 'react'
import Route from './src/navigation/Route'
import { Provider } from 'react-redux'
import { mystore } from './src/Redux/Store/Store'

const App = () => {
  return (
    <Provider store={mystore}>
      <Route/>
    </Provider>
  )
}

export default App