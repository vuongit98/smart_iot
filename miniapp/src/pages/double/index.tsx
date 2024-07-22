import React, { useMemo, useState } from 'react'
import { View, Text, Slider, Input, Button } from '@ray-js/components'
import styles from './index.module.less'
import Strings from '@/i18n'
import { location, router, usePageEvent } from 'ray'
import '../../app.module.less'
import Dialog from '@/components/Dialog'

enum DIRECTION {
  LEFT,
  RIGHT,
  NONE,
}

enum STEP {
  DETECT_MASTER_TO_CLICK = 0,
  DETECTING_MASTER = 1,
  MAIN_CURTAIN_TO_CLICK = 2,
  MAIN_CURTAIN_LOADING = 3,
  SUB_CURTAIN_TO_CLICK = 4,
  SUB_CURTAIN_LOADING = 5,
  END = 6,
}

export default function Learning() {
  const [direction, setDirection] = useState(DIRECTION.NONE)
  const [step, setStep] = useState(STEP.DETECT_MASTER_TO_CLICK)

  const reset = () => {
    setStep(STEP.DETECT_MASTER_TO_CLICK)
    setDirection(DIRECTION.NONE)
  }

  return (
    <View className={styles.root}>
      <View className={styles.root_image} />

      <Text className={styles.root_text}>
        lorem ipsum dolor sit amet consectetur adipiscing elit
      </Text>

      <Text className={styles.root_sub_text}>
        lorem ipsum dolor sit amet consectetur adipiscing elit
      </Text>

      <View className={styles.root_control_button}>
        <Button
          disabled={step !== STEP.MAIN_CURTAIN_TO_CLICK}
          onClick={() => {
            setDirection(DIRECTION.LEFT)
          }}
          className={
            direction === DIRECTION.LEFT
              ? styles.btn_direction_active
              : styles.btn_direction_deactive
          }
        >
          Left
        </Button>
        <Button
          disabled={step > STEP.DETECTING_MASTER}
          onClick={() => {
            setStep(STEP.DETECTING_MASTER)
            setTimeout(() => {
              setStep(STEP.MAIN_CURTAIN_TO_CLICK)
            }, 1000)
          }}
          className={styles.btn_detect_master}
        >
          {step === STEP.DETECTING_MASTER ? 'Detecting' : 'Detect Master'}
        </Button>
        <Button
          disabled={step !== STEP.MAIN_CURTAIN_TO_CLICK}
          onClick={() => {
            setDirection(DIRECTION.RIGHT)
          }}
          className={
            direction === DIRECTION.RIGHT
              ? styles.btn_direction_active
              : styles.btn_direction_deactive
          }
        >
          Right
        </Button>
      </View>

      <Text className={styles.root_end_text}>
        lorem ipsum dolor sit amet consectetur adipiscing elit
      </Text>

      <View className={styles.root_button_left_right}>
        <Button
          disabled={step !== STEP.MAIN_CURTAIN_TO_CLICK && step !== STEP.MAIN_CURTAIN_LOADING}
          onClick={() => {
            setStep((prev) =>
              prev === STEP.MAIN_CURTAIN_TO_CLICK
                ? STEP.MAIN_CURTAIN_LOADING
                : STEP.SUB_CURTAIN_TO_CLICK
            )
          }}
          className={styles.btn_curtain_active}
        >
          <Text>{step === STEP.MAIN_CURTAIN_LOADING ? 'Stop' : '1st Curtain'}</Text>
        </Button>
        <Button
          disabled={step !== STEP.SUB_CURTAIN_TO_CLICK && step !== STEP.SUB_CURTAIN_LOADING}
          onClick={() => {
            setStep((prev) =>
              prev === STEP.SUB_CURTAIN_TO_CLICK ? STEP.SUB_CURTAIN_LOADING : STEP.END
            )
          }}
          className={styles.btn_curtain_active}
        >
          <Text>{step === STEP.SUB_CURTAIN_LOADING ? 'Stop' : '2nd Curtain'}</Text>
        </Button>
      </View>
      <Dialog
        open={step === STEP.END}
        onClickBtn={() => {
          router.push('/control_device')
          reset()
        }}
      />
    </View>
  )
}
