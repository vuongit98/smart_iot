import React from 'react'
import {View, Text, Slider } from '@ray-js/components'
import styles from './index.module.less'
import Strings from '@/i18n';
import { location, router, usePageEvent } from 'ray'
import '../../app.module.less';


export default function Learning() {
  return (
    <View className={styles.root}>
      <View className={styles.root_image} />
      <Text className={styles.root_text} >100 %</Text>
      <Slider/>
      <View className={styles.root_control}>
        <View className={styles.root_control_curtain_open}></View>
        <View className={styles.root_control_curtain_play}></View>
        <View className={styles.root_control_curtain_close}></View>
      </View>

      <View className={styles.root_info}>
        <View className={styles.root_info_light}>
          <View className={styles.root_info_light_name}>
            <View className={styles.root_info_light_name_image}></View>
            <Text >Light</Text>
          </View>
          <Text className={styles.root_info_light_value} >40%</Text>
        </View>
        <View className={styles.root_info_battery}>
          <View className={styles.root_info_battery_name}>
            <View className={styles.root_info_battery_name_image}></View>
            <Text >Battery</Text>
          </View>
          <Text className={styles.root_info_battery_value} >100%</Text>
        </View>
      </View>
    </View>
  )
}

