import * as React from 'react'
import { View, request } from "remax/wechat";
import { usePageEvent } from 'remax/macro';
import { Loading, Radio, Input } from 'anna-remax-ui';
import { showToast, successApi } from '@/utils/utils'

import styles from './index.less'

export default () => {
    const [loading, setLoading] = React.useState(false);
    const [shuju, setShuju] = React.useState('');
    const [params, setParams] = React.useState({
        key: '1913786732bfb4dd0d407c2e88f2738c',
        consName: '',
        type: ''
    });
    const isEmpty = () => {
        if (!params.consName) {
            showToast('星座不能为空')
            return false
        }
        if (!params.type) {
            showToast('日期不能为空')
            return false
        }
        return true
    }
    const queryData = () => {
        if (isEmpty()) {
            setLoading(true)
            request({
                url: `http://web.juhe.cn:8080/constellation/getAll`, //仅为示例，并非真实的接口地址
                data: {
                    ...params
                },
                header: {
                    'content-type': 'application/json' // 默认值
                },
                success(res) {
                    const result = successApi(res);
                    console.log(result, 'result')
                    setShuju(result.result)
                    setLoading(false)
                    if (result.resultcode != 200) {
                        showToast('哈喽！！请输入正确的星座。 例如 狮子座....')
                    }
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
            title: "星座运势"
        })
        // queryData()
    })
    return (
        <View className={styles.app}>
            <div className={styles.formBox}>
                <Input
                    label="星座"
                    placeholder="例如 狮子座"
                    border={true}
                    required
                    onChange={e => setParams({ ...params, consName: e.target.value })}
                />
            </div>
            <div className={styles.formBox}>
                <Radio.Group
                    value={params.type}
                    direction="row"
                    onChange={(v) => setParams({ ...params, type: v })}
                    style={{ fontSize: 16 }}
                >
                    <Radio value={'today'} checked={true}>今日</Radio>
                    <Radio value={'tomorrow'}>明天</Radio>
                    <Radio value={'week'}>本周</Radio>
                    <Radio value={'month'}>本月</Radio>
                    <Radio value={'year'}>本年</Radio>
                </Radio.Group>
            </div>
            {
                loading ? <div className={styles.loadingBox}><Loading type="anna" color="#FF7777" /></div> : null
            }
            <div className={styles.card} >

            </div>
            <div className={styles.btnLang} onClick={() => queryData()} >
                立即测试
            </div>
        </View>
    )
}