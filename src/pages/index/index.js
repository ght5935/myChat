import * as React from 'react'
import { View, request } from "remax/wechat";
import { usePageEvent } from 'remax/macro';
import styles from './index.less'

export default () => {
  const [shici, setShici] = React.useState('春暖花开，面朝大海');
  usePageEvent('onShow', () => {
    request({
      url: 'https://v1.jinrishici.com/shuqing/aiqing', //仅为示例，并非真实的接口地址
      data: {},
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        setShici(res.data.content)
      }
    })

  })



  return (
    <View className={styles.app}>
      <div className={styles.shici}>{shici}</div>
    </View>
  )
}