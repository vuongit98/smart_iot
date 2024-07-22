import React, { useState } from 'react'
import { View, Text, Button, Slider, Icon } from '@ray-js/components'
import { location, router } from 'ray'
import styles from './index.module.less'
import LightSettingDialog from '@/components/LightSettingDialog'

const links = ['Device Settings', 'Light Setting', 'Pair Device']

export default function Settings() {
  const [openDialog, setOpenDialog] = useState(false)
  const onOpenDialog = () => setOpenDialog(true)
  const onClickOverlay = () => setOpenDialog(false)

  const goToDeviceSettings = () => router.push('/device-settings')
  return (
    <View className={styles.root}>
      <Text className={styles.title}>Settings</Text>
      {links.map((item) => (
        <View
          key={item}
          onClick={item === 'Device Settings' ? goToDeviceSettings : onOpenDialog}
          className={styles.link}
        >
          <Text className={styles.text}>{item}</Text>
          <Icon type="icon-a-arrowforward" size={30} color="#252525" />
        </View>
      ))}

      <Button className={styles.btn}>Re - Study</Button>

      <LightSettingDialog openDialog={openDialog} onClickOverlay={onClickOverlay} />
    </View>
  )
}
