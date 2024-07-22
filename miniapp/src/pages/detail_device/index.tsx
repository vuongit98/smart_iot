import React from 'react'
import { View, Text, Slider, Input, Image, Button } from '@ray-js/components'
import styles from './index.module.less'
import Strings from '@/i18n'
import { location, router, usePageEvent } from 'ray'
import '../../app.module.less'
import AlexaImg from '../../assets/alexa.png'
import GoogleImg from '../../assets/google_assistant.png'

const THIRD_PARTY_BRANDS = [
  { text: 'Alexa', img: AlexaImg },
  { text: 'Google Assistant', img: GoogleImg },
]

export default function Learning() {
  const device_infor = [I18n.t('device_info'), I18n.t('automation')]
  const device_function_setting = [
    I18n.t('share_device'),
    I18n.t('create_group'),
    I18n.t('feedback'),
    I18n.t('home_screen'),
    I18n.t('device_update'),
  ]

  const show_device_info = device_infor.map((data) => {
    return (
      <View key={data} className={styles.root_device_name_info}>
        <Text>{data}</Text>
        <View className={styles.root_line}></View>
      </View>
    )
  })

  const show_device_function_setting = device_function_setting.map((data) => {
    return (
      <View key={data} className={styles.root_device_name_info}>
        <Text>{data}</Text>
        <View className={styles.root_line}></View>
      </View>
    )
  })
  return (
    <View className={styles.root}>
      <View className={styles.root_device_info}>
        <View className={styles.root_image}></View>
        <View className={styles.root_edt}>
          <Input className={styles.root_edt_input} type="text" value="Curtain - 1" />
          <View className={styles.root_edt_image}></View>
        </View>
        {show_device_info}
      </View>

      <View className={styles.root_function_setting}>{show_device_function_setting}</View>

      <View className={styles.root_third_party}>
        <View className={styles.title_wrapper}>
          <View className={styles.text_wrapper}>
            <View className={styles.text}>Third - party control</View>
          </View>
          <View className={styles.line}></View>
        </View>
        <View className={styles.brand_wrapper}>
          {THIRD_PARTY_BRANDS.map((item) => (
            <View key={item.text} className={styles.brand_section}>
              <Image className={styles.img} onError={(e) => console.log(e)} src={item.img} />
              <Text className={styles.text}>{item.text}</Text>
            </View>
          ))}
        </View>
      </View>

      <Button className={styles.remove_device_btn}>Remove Device</Button>
    </View>
  )
}
