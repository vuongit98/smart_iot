import React from 'react'
import { View, Text, Slider, Input, Button } from '@ray-js/components'
import styles from './index.module.less'
import Strings from '@/i18n';
import { location, router, usePageEvent } from 'ray'
import '../../app.module.less';



export default function Learning() {
  return (
    <View className={styles.root}>
      <View className={styles.root_image} />

      <Text className={styles.root_text} >lorem ipsum dolor sit amet consectetur adipiscing elit</Text>

      <Text className={styles.root_sub_text} >lorem ipsum dolor sit amet consectetur adipiscing elit</Text>

      <View className={styles.root_control_button}>
        <Button
          onClick={() => {
            router.push(`/control_device`)
          }}

          className={styles.btn_left} >Left</Button>
        <Button
          onClick={() => {
            router.push(`/control_device`)
          }}

          className={styles.btn_detect_master} >Detect master</Button>
        <Button
          onClick={() => {
            router.push(`/control_device`)
          }}

          className={styles.btn_right} >Right</Button>
      </View>

      <Text className={styles.root_end_text}>lorem ipsum dolor sit amet consectetur adipiscing elit</Text>

      <View className={styles.root_button_left_right}>
        <Button className={styles.btn_left_curtain} ><Text >1st  curtain </Text></Button>
        <Button className={styles.btn_right_curtain}><Text >2nd  curtain </Text></Button>
      </View>

    </View>
  )
}

