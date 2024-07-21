import { location, router, usePageEvent } from 'ray'
import React from 'react'

import { Button, View, Text } from '@ray-js/components'
import Foo from '@/components/Foo'

import styles from './index.module.less'

export default function Home() {
  const fooRef = React.createRef()

  React.useEffect(() => {
    console.info('home did mount', location)
    console.log(fooRef.current)
  }, [])

  usePageEvent('onShow', () => {
    console.info('home onShow')
  })

  usePageEvent('onHide', () => {
    console.info('home onHide')
  })

  usePageEvent('onPageScroll', (event) => {
    console.info('onPageScroll', event)
  })

  usePageEvent('onReachBottom', () => {
    console.info('onReachBottom')
  })

  usePageEvent('onResize', (event) => {
    console.info('onResize', event)
  })

  return (
    <View className={styles.view}>
      <Button
        onClick={() => {
          router.push(`/my?v=${Date.now()}`)
        }}
      >
        Personal Page
      </Button>

      <View style={{ marginTop: '20rpx' }}>
        <Button
          onClick={() => {
            router.push(`/detail/${Date.now()}?v=${Date.now()}`)
          }}
        >
          Detail Page
        </Button>
      </View>
      <Text>{I18n.t('title')}</Text>
      <Foo />
    </View>
  )
}
