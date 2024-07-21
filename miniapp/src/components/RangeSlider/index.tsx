import { View } from '@ray-js/ray'
import React, { useState } from 'react'
import styles from './index.module.less'

const RangeSlider = () => {
  const [left, setLeft] = useState(0)
  const [isDragging, setIsDragging] = useState(false)

  const onTouchStart = () => {
    setIsDragging(true)
  }

  const onTouchEnd = () => {
    setIsDragging(false)
  }

  const onTouchMove = () => {
    if (!isDragging) {
      return
    }
  }
  return (
    <View className={styles.slider}>
      <View id="slider-track" className={styles.slider_track}></View>
      <View className={styles.slider_hightlighted_track} style={{ left: `${left + 5}%` }}></View>
      <View
        className={styles.slider_thumb}
        onTouchEnd={onTouchEnd}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        style={{ left: `${left}%` }}
      >
        <View className={styles.slider_thumb_inner}></View>
      </View>
    </View>
  )
}

export default RangeSlider
