import * as React from 'react'
import { View, request } from "remax/wechat";
import { usePageEvent } from 'remax/macro';
import { Loading, Card, Button } from 'anna-remax-ui';
import { showToast, successApi } from '@/utils/utils'

import styles from './index.less'

export default () => {
    const [loading, setLoading] = React.useState(false);
    const [shuju, setShuju] = React.useState('');
    const [params, setParams] = React.useState({
        key: 'db3070b2f951c3579e7ef292f609d7cb',
        city: '上海',
    });
    const weekList = new Array("日", "一", "二", "三", "四", "五", "六");
    const week = new Date().getDay();
    const strWeek = "星期" + weekList[week];

    const isEmpty = () => {
        if (!params.city) {
            showToast('城市不能为空')
            return false
        }
        return true
    }
    const queryData = () => {
        setLoading(true)
        if (isEmpty()) {
            console.log(params, '参数')
            request({
                url: `http://apis.juhe.cn/simpleWeather/query`, //仅为示例，并非真实的接口地址
                data: {
                    ...params
                },
                header: {
                    'content-type': 'application/json' // 默认值
                },
                success(res) {
                    let data = successApi(res);
                    let result = data.result
                    if (result.realtime) {
                        result.realtime.strWeek = strWeek
                    }
                    if (result.future && result.future.length > 0) {
                        result.future.map(v => {
                            v.strWeek = "星期" + weekList[new Date(v.date).getDay()];
                        })
                    }
                    console.log(result, 'result')
                    setShuju(result)
                    setLoading(false)
                },
                fail(e) {
                    showToast('抱歉！！数据正在开发中....')
                    setLoading(true)
                }
            })
        }
    }
    usePageEvent('onLoad', () => {
        wx.setNavigationBarTitle({
            title: "天气查询"
        })
        // queryData()
    })

    return (
        <View className={styles.app}>
            <div className={styles.inputBox}>
                <label> <span style={{ color: 'red' }}>*</span>城市 </label>
                <input type="text" name="men" placeholder="例如 上海"
                    className={styles.starInput}
                    bindinput={(e) => {
                        setParams({ ...params, men: e.detail.value })
                    }}
                />
            </div>
            {
                loading ? <div className={styles.loadingBox}><Loading type="anna" color="#FF7777" /></div> : null
            }
            {
                shuju ?
                    <div className={styles.card}>
                        <div className={styles.sky}>
                            <span> {shuju.city} </span>
                            <span> {`${shuju.realtime.temperature}°C`} </span>
                            <span> {shuju.future && shuju.future.length > 0 ? shuju.future[0].weather : ''} </span>
                        </div>

                        {
                            shuju.future && shuju.future.length > 0 ?
                                shuju.future.map(v => {
                                    let dateArr = v.date.split('-')
                                    return (
                                        <div key={v.date} className={styles.skyList}>
                                            <span> {`${dateArr[1]}-${dateArr[2]}`} </span>
                                            <span> {v.strWeek} </span>
                                            <span> {v.temperature} </span>
                                            <span> {v.weather} </span>
                                            <span> {v.direct} </span>
                                        </div>
                                    )
                                }) : null
                        }
                    </div> : null
            }
            <div className={styles.btnLang} onClick={() => queryData()} >
                立即查询
            </div>
        </View>
    )
}