import React, { useState } from 'react'
import { Button, View, Text, Switch } from '@ray-js/components'
import styles from './index.module.less'
import Strings from '@/i18n';
import { location, router, usePageEvent } from 'ray'
import '../../app.module.less';


export default function Learning() {
  enum ChoiceState {
    NONE,
    LEFT,
    RIGHT
  }

  const [stateChoice, setStateChoice] = useState(ChoiceState.NONE);
  const handleClickLeft = () => {
    setStateChoice(ChoiceState.LEFT)
  }
  const handleClickRight = () => {
    setStateChoice(ChoiceState.RIGHT)
  }
  return (
    <View className={styles.root}>
      <View className={styles.root_image} />

      <Text className={styles.root_text} >lorem ipsum dolor sit amet consectetur adipiscing elit</Text>

      <Text className={styles.root_sub_text} >lorem ipsum dolor sit amet consectetur adipiscing elit</Text>

      <Button
        disabled={stateChoice == ChoiceState.NONE}
        onClick={() => {
          router.push(`/control_device`)
        }}

        className={styles.btn_study} >Start Study</Button>

      <Text className={styles.root_end_text}>lorem ipsum dolor sit amet consectetur adipiscing elit</Text>

      <View className={styles.root_button_left_right}>
        <Button
          onClick={handleClickLeft}
          className={(stateChoice != ChoiceState.LEFT) ? styles.btn_left_no_focus : styles.btn_left}>
          <Text >Left </Text>
        </Button>
        <Button
          onClick={handleClickRight}
          className={(stateChoice != ChoiceState.RIGHT) ? styles.btn_right_no_focus : styles.btn_right}>
          <Text >Right </Text>
        </Button>
      </View>
      {/* <View className="root_dialog" >
        <View className="root_dialog_icon" ><icon type="success" /> </View>
        <Text className="root_dialog_status" >Study successfully</Text>
        <!-- <Button className="btn_done"><Text >Done </Text></Button> -->
      </View> */}

    </View>
  )
}

