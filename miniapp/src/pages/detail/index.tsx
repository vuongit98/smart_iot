import React from 'react'
import { View, Text } from '@ray-js/components'
import { location } from 'ray'
export default function Home() {
  return (
    <View>
      {Object.keys(location).map((key) => {
        return (
          <View key={key}>
            <Text>
              {key}: {JSON.stringify(location[key])}
            </Text>
          </View>
        )
      })}
    </View>
  )
}
