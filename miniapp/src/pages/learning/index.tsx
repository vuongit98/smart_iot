import React, { useRef, useState } from 'react'
import { Button, View, Text, Switch } from '@ray-js/components'
import styles from './index.module.less'
import Strings from '@/i18n'
import { location, router, usePageEvent } from 'ray'
import '../../app.module.less'
import Dialog from '@/components/Dialog'

enum ChoiceState {
  NONE,
  LEFT,
  RIGHT,
}

enum StudyState {
  NONE,
  START,
}

export default function Learning() {
  const [stateChoice, setStateChoice] = useState(ChoiceState.NONE)
  const [stateStudy, setStateStudy] = useState(StudyState.NONE)
  const [openDialog, setOpenDialog] = useState(false)

  const handleClickLeft = () => {
    setStateChoice(ChoiceState.LEFT)
  }
  const handleClickRight = () => {
    setStateChoice(ChoiceState.RIGHT)
  }

  const timer = useRef(null)

  const handleStartStudy = () => {
    if (stateStudy == StudyState.NONE) {
      setStateStudy(StudyState.START)
      timer.current = setTimeout(() => {
        setOpenDialog(true)
      }, 4000)
      console.log('setTimer')
    } else {
      setStateStudy(StudyState.NONE)
      clearTimeout(timer.current)
      console.log('cancel Timer')
    }
  }

  const moveToControlDevice = () => {
    router.push('/control_device')
    setOpenDialog(false)
    setStateChoice(ChoiceState.NONE)
    setStateStudy(StudyState.NONE)
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

      <Button
        disabled={stateChoice == ChoiceState.NONE}
        onClick={() => {
          handleStartStudy()
        }}
        className={stateStudy == StudyState.START ? styles.btn_none : styles.btn_study}
      >
        <Text>{stateStudy == StudyState.START ? I18n.t('stop_study') : I18n.t('start_study')}</Text>
      </Button>

      <Text className={styles.root_end_text}>
        lorem ipsum dolor sit amet consectetur adipiscing elit
      </Text>

      <View className={styles.root_button_left_right}>
        <Button
          disabled={stateStudy === StudyState.START}
          onClick={handleClickLeft}
          className={stateChoice != ChoiceState.LEFT ? styles.btn_left_no_focus : styles.btn_left}
        >
          <Text className={styles.root_text_left}>Left </Text>
        </Button>
        <Button
          disabled={stateStudy === StudyState.START}
          onClick={handleClickRight}
          className={
            stateChoice != ChoiceState.RIGHT ? styles.btn_right_no_focus : styles.btn_right
          }
        >
          <Text className={styles.root_text_right}>Right </Text>
        </Button>
      </View>
      {/* <View className="root_dialog" >
        <View className="root_dialog_icon" ><icon type="success" /> </View>
        <Text className="root_dialog_status" >Study successfully</Text>
        <!-- <Button className="btn_done"><Text >Done </Text></Button> -->
      </View> */}

      <Dialog open={openDialog} onClickBtn={moveToControlDevice} />
    </View>
  )
}
