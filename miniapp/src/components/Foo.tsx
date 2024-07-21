import React from 'react'
import { View, Text } from '@ray-js/components'
import { usePageEvent, router } from 'ray'

const Foo = () => {
  usePageEvent('onShow', () => {
    console.log('Foo => page onShow')
  })
  return (
    <>
      <View>
        <Text>Foo Component </Text>
      </View>
      <View onClick={() => router.push(`/?v=${Date.now()}`)}>
        <Text>Back to Home</Text>
      </View>
    </>
  )
}

export default Foo
