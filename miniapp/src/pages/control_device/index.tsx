import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { View, Text, Slider } from '@ray-js/components'
import { useActions, useDevInfo, useProps } from '@ray-js/panel-sdk'
import Curtain from '@/components/curtain'
import styles from './index.module.less'
// import Strings from '@/i18n'
import { location, router, usePageEvent } from 'ray'
import '../../app.module.less'

export default function Learning() {
  // const devInfo = useDevInfo() || {}
  // // const dpState = useAtomValue(selectDpStateAtom) || {};
  // console.log('devInfo show', devInfo) // print and view devInfo content
  // console.log('devInfo element', devInfo.dpCodes.battery_percentage) // print and view devInfo content

  // const { control, percent_control, percent_state, work_state, situation_set, detect_master } =
  //   useProps()
  // const actions = useActions()

  // const convert = useCallback(
  //   (value) => {
  //     if (situation_set === 'fully_close') return value
  //     return 100 - value
  //   },
  //   [situation_set]
  // )

  // const reverse = useCallback(
  //   (value) => {
  //     if (situation_set === 'fully_close') return value
  //     return 100 - value
  //   },
  //   [situation_set]
  // )

  // const convertPercent = useMemo(() => convert(percent_control), [percent_control, situation_set])

  // const onChangend = useCallback(
  //   (e) => {
  //     const nextPercent = reverse(e.detail.value)
  //     if (nextPercent < percent_control) {
  //       actions.control.set('open')
  //     } else {
  //       actions.control.set('close')
  //     }
  //     actions.percent_control.set(nextPercent)
  //   },
  //   [percent_control, situation_set]
  // )

  // const open = useCallback(() => {
  //   actions.control.set('open', { immediate: true })
  //   actions.percent_control.set(reverse(0), { immediate: true })
  // }, [situation_set])

  // const close = useCallback(() => {
  //   actions.control.set('close', { immediate: true })
  //   actions.percent_control.set(reverse(100), { immediate: true })
  // }, [situation_set])

  // const stop = useCallback(() => {
  //   actions.control.set('stop', { immediate: true })
  // }, [])

  // const toggleBooleanOne = useCallback(() => {
  //   actions.detect_master.set(true, { immediate: true })
  // }, [])

  return (
    <View className={styles.root}>
      <Curtain
        control={'open'}
        work_state={'opening'}
        value={20}
        // bindchangend={}
      ></Curtain>
      <Text className={styles.root_text}>100 %</Text>
      <Slider />
      <View className={styles.root_control}>
        <View className={styles.root_control_curtain_open}></View>
        <View className={styles.root_control_curtain_play}></View>
        <View className={styles.root_control_curtain_close}></View>
      </View>

      <View className={styles.root_info}>
        <View className={styles.root_info_light}>
          <View className={styles.root_info_light_name}>
            <View className={styles.root_info_light_name_image}></View>
            <Text>Light</Text>
          </View>
          <Text className={styles.root_info_light_value}>40%</Text>
        </View>
        <View className={styles.root_info_battery}>
          <View className={styles.root_info_battery_name}>
            <View className={styles.root_info_battery_name_image}></View>
            <Text>Battery</Text>
          </View>
          <Text className={styles.root_info_battery_value}>100%</Text>
        </View>
      </View>
    </View>
  )
}
