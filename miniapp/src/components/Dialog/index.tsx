import React, { useState } from 'react'
import { Button, View, Text } from '@ray-js/ray'
import { location, router, usePageEvent } from 'ray'
import styles from './index.module.less'

const Dialog = ({ open, onClickBtn }) => {
  return (
    <View className={styles.dialog_overlay} style={{ display: open ? 'flex' : 'none' }}>
      <View className={styles.dialog_wrapper}>
        <View className={styles.bg_dialog}></View>
        <Text className={styles.dialog_message}>Study successfully</Text>
        <Button className={styles.dialog_button} onClick={onClickBtn}>
          Done
        </Button>
      </View>
    </View>
  )
}

export default Dialog
