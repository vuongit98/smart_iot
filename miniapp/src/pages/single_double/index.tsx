import React, { useState } from 'react'
import { Button, View, Text, Switch } from '@ray-js/components'
import styles from './index.module.less'
import Strings from '@/i18n';
import { location, router, usePageEvent } from 'ray'
import '../../app.module.less';


export default function SingleDouble() {

  const [borderVisible , setBorderVisible] = useState(false);
  const [valueStyle , setValueStyle] = useState(styles.root__card_1);

  const handleAddBorder = () => {
      if(!borderVisible) {
        setValueStyle(styles.add_root__card_1)
      }else {
        setValueStyle(styles.root__card_1)
      }
      setBorderVisible(!borderVisible)
  }

  return (
    <View className={styles.root}>
      <View       
        className={valueStyle}>
        <Text className={styles.root__card_1_text} >{I18n.t('one_side')}</Text>
        <Switch onClick={handleAddBorder}/>
      </View>
      <View className={styles.root__card_2}>
        <Text className={styles.root__card_2_text} >{I18n.t('middle_side')}</Text>
        <Switch />
      </View>
      <View className={styles.root__card_3} >
        <Button
          onClick={() => {
            router.push(`/learning`)
          }}
          className={styles.button_next}><Text>{I18n.t('next')}</Text></Button>
      </View>
      <View></View>
    </View>
  )
}

