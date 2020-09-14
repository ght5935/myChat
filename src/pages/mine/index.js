import * as React from 'react'
import { View, request } from "remax/wechat";
import { Row, Col, Icon, Loading, Tag, Button } from 'anna-remax-ui';
import { useNativeEffect } from 'remax';
import { usePageEvent, useAppEvent } from 'remax/macro';
import { showToast } from '@/utils/utils'
import { Tou, Hua, Icon1, Icon2, Icon3, Icon4, Icon5, Icon6, Icon7, Icon8 } from '@/utils/conf'

import styles from './index.less'
export default () => {
    const [shici, setShici] = React.useState('春暖花开，面朝大海');
    const [userInfo, setUserInfo] = React.useState({
        errMsg: '',
        signature: '',
        userInfo: '',
    });
    usePageEvent('onLoad', () => {
        request(
            {
                url: 'https://v1.jinrishici.com/shuqing/aiqing', //仅为示例，并非真实的接口地址
                data: {},
                header: {
                    'content-type': 'application/json' // 默认值
                },
                success(res) {
                    setShici(res.data.content)
                }
            }
        )
    })

    useNativeEffect(() => {

        // 建议一定要写 hooks 依赖，否则所有 setData 回调后，都会在这里执行
    }, [])
    const bindGetUserInfo = () => {
        wx.getUserInfo({
            success: function (res) {
                setUserInfo({
                    errMsg: res.errMsg,
                    signature: res.signature,
                    userInfo: res.userInfo
                })
            }
        })

    }
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
    return (
        <View className={styles.app}>
            <div className={styles.shici}>{shici}</div>
            <Row className={styles.infoRow}>
                <Col span={12} className={styles.infoCol}>
                    <div className={styles.info}>
                        <div className={styles.touBox}>
                            <img src={userInfo.userInfo ? userInfo.userInfo.avatarUrl : Tou} alt="头像" className={styles.tou} />
                        </div>
                        <button className={styles.bindBtn} open-type="getUserInfo" onClick={bindGetUserInfo}>
                            {userInfo.userInfo ? userInfo.userInfo.nickName : '未登录'}
                        </button>
                    </div>
                </Col>
                <Col span={12} className={styles.infoCol}>
                    <div className={styles.info}>
                        <img src={Hua} alt="头像" />
                    </div>
                </Col>
            </Row>
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
                    <div className={styles.listBox} onClick={myWorld}>
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
            {/* <Loading type="anna" color="#1890FF" /> */}
        </View >
    )
}