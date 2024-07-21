import React from 'react'
import { View, Text } from '@ray-js/ray'
import styles from './index.module.less'

const BottomSheetDialog = () => {
  return (
    <View className={styles.bottomsheet_overlay}>
      <View className={styles.bottomsheet_wrapper}>
        <Text className={styles.bottomsheet_title}>Light Setting</Text>
        {/* <range-slider></range-slider> */}
      </View>
    </View>
  )
}

export default BottomSheetDialog
