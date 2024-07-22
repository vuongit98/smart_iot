import React, { useEffect, useState } from 'react'
import { Button, View, Text, Switch } from '@ray-js/components'
import styles from './index.module.less'
import Strings from '@/i18n'
import { location, router, usePageEvent } from 'ray'
import '../../app.module.less'

enum Action {
  ONE_SIDE,
  MIDDLE,
  NONE,
}

export default function SingleDouble() {
  const [action, setAction] = useState(Action.NONE)

  const onOneSideChange = () => {
    setAction((prevAction) => (prevAction == Action.ONE_SIDE ? Action.NONE : Action.ONE_SIDE))
  }

  const onMiddleChange = () => {
    setAction((prevAction) => (prevAction == Action.MIDDLE ? Action.NONE : Action.MIDDLE))
  }

  const goNext = () => {
    router.push(action == Action.MIDDLE ? '/double' : '/learning')
  }

  return (
    <View className={styles.root}>
      <View className={action == Action.ONE_SIDE ? styles.active_card : styles.deactive_card}>
        <Text className={styles.root__card_1_text}>{I18n.t('one_side')}</Text>
        <Switch onChange={onOneSideChange} checked={action == Action.ONE_SIDE} />
      </View>
      <View className={action == Action.MIDDLE ? styles.active_card : styles.deactive_card}>
        <Text className={styles.root__card_2_text}>{I18n.t('middle_side')}</Text>
        <Switch onChange={onMiddleChange} checked={action == Action.MIDDLE} />
      </View>
      <View className={styles.root__card_3}>
        <Button disabled={action == Action.NONE} onClick={goNext} className={styles.button_next}>
          <Text>{I18n.t('next')}</Text>
        </Button>
      </View>
      <View></View>
    </View>
  )
}
