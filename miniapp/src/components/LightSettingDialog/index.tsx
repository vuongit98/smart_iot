import React, { useState } from 'react'
import { View, Text, PageContainer, Button, Slider, Image } from '@ray-js/ray'
import styles from './index.module.less'
import lowBrightness from '../../assets/low_brightness.png'
import highBrightness from '../../assets/sun.png'

const LightSettingDialog = ({ openDialog, onClickOverlay }) => {
  const [value, setValue] = useState(0)
  return (
    <PageContainer
      overlay={true}
      show={openDialog}
      duration={300}
      position="bottom"
      round={true}
      onClickOverlay={onClickOverlay}
    >
      <View className={styles.root}>
        <Text className={styles.title}>Light Setting</Text>
        <View className={styles.information_wrapper}>
          <View className={styles.circle}>
            <Text className={styles.text}>Intensity</Text>
            <Text className={styles.text}>{value}%</Text>
          </View>
        </View>
        <View className={styles.control_wrapper}>
          <Image className={styles.low_img} src={lowBrightness} />
          <Slider min={0} max={100} value={value} onChanging={(e) => setValue(e.detail.value)} />
          <Image className={styles.high_img} src={highBrightness} />
        </View>
        <View className={styles.button_group}>
          <Button className={styles.cancel}>Cancel</Button>
          <Button className={styles.save}>Save</Button>
        </View>
      </View>
    </PageContainer>
  )
}

export default LightSettingDialog
