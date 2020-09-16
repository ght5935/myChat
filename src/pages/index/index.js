import * as React from 'react'
import { View, request, } from "remax/wechat";
import { usePageEvent } from 'remax/macro';
import { Row, Col } from 'anna-remax-ui';
import { showToast } from '@/utils/utils'
import { Icon1, Icon2, Icon3, Icon4, Icon5, Icon6, Icon7, Icon8 } from '@/utils/conf'
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

  const myWorld = () => {
    showToast('开发中....')
  }
  const gowallpaper = () => {
    const day = new Date().getDate()
    wx.navigateTo({
      url: `/pages/common/wallpaper?day=${day}`,
    })
  }
  const gojoke = () => {
    wx.navigateTo({
      url: `/pages/common/joke`,
    })
  }
  const gostarpair = () => {
    wx.navigateTo({
      url: `/pages/common/starpair`,
    })
  }
  const goweather = () => {
    wx.navigateTo({
      url: `/pages/common/weather`,
    })
  }
  return (
    <View className={styles.app}>
      <div className={styles.shici}>{shici}</div>
      <Row gutter={16} className={styles.listRow}>
        <Col span={6} className={styles.listCol}>
          <div className={styles.listBox} onClick={gowallpaper}>
            <img src={Icon1} alt="heihei" className={styles.Icon} />
            <div > 今日壁纸 </div>
          </div>
        </Col>
        <Col span={6} className={styles.listCol}>
          <div className={styles.listBox} onClick={gostarpair}>

            <img src={Icon6} alt="heihei" className={styles.Icon} />
            <div > 星座配对 </div>
          </div>
        </Col>
        <Col span={6} className={styles.listCol}>
          <div className={styles.listBox} onClick={myWorld}>
            <img src={Icon3} alt="heihei" className={styles.Icon} />
            <div > 星座运势 </div>
          </div>
        </Col>
        <Col span={6} className={styles.listCol}>
          <div className={styles.listBox} onClick={myWorld}>
            <img src={Icon5} alt="heihei" className={styles.Icon} />
            <div > 生肖配对 </div>
          </div>
        </Col>
      </Row>
      <Row gutter={16} className={styles.listRow}>
        <Col span={6} className={styles.listCol}>
          <div className={styles.listBox} onClick={gojoke}>
            <img src={Icon4} alt="heihei" className={styles.Icon} />
            <div > 笑话大全 </div>
          </div>
        </Col>
        <Col span={6} className={styles.listCol}>
          <div className={styles.listBox} onClick={goweather}>
            <img src={Icon2} alt="heihei" className={styles.Icon} />
            <div > 天气查询 </div>
          </div>
        </Col>
        <Col span={6} className={styles.listCol}>
          <div className={styles.listBox} onClick={myWorld}>
            <img src={Icon7} alt="heihei" className={styles.Icon} />
            <div > 周公解梦 </div>
          </div>
        </Col>
        <Col span={6} className={styles.listCol}>
          <div className={styles.listBox} onClick={myWorld}>
            <img src={Icon8} alt="heihei" className={styles.Icon} />
            <div > 在线联系 </div>
          </div>
        </Col>
      </Row>

    </View>
  )
}