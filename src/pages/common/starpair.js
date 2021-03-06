import * as React from 'react'
import { View, request } from "remax/wechat";
import { usePageEvent } from 'remax/macro';
import { Loading, Input, Button } from 'anna-remax-ui';
import { showToast, successApi } from '@/utils/utils'

import styles from './index.less'

export default () => {
    const [loading, setLoading] = React.useState(false);
    const [shuju, setShuju] = React.useState('');

    const [params, setParams] = React.useState({
        key: '4d2b150805d54841064fb46ab0371e38',
        men: '',
        women: ''
    });
    const isEmpty = () => {
        if (!params.men) {
            showToast('星座不能为空')
            return false
        }
        if (!params.women) {
            showToast('星座不能为空')
            return false
        }
        return true
    }
    const queryData = () => {
        if (isEmpty()) {
            setLoading(true)
            request({
                url: `http://apis.juhe.cn/xzpd/query`, //仅为示例，并非真实的接口地址
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
                    if (result.error_code != 0) {
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
            title: "星座配对"
        })
    })



    return (
        <View className={styles.app}>
            <div className={styles.formBox}>
                <Input
                    label="男生"
                    placeholder="例如 狮子座"
                    border={true}
                    required
                    onChange={e => setParams({ ...params, men: e.target.value })}
                />
            </div>
            <div className={styles.formBox}>
                <Input
                    label="女生"
                    placeholder="例如 射手座"
                    border={true}
                    required
                    onChange={e => setParams({ ...params, women: e.target.value })}
                />
            </div>
            {
                loading ? <div className={styles.loadingBox}><Loading type="anna" color="#FF7777" /></div> : null
            }
            <div className={styles.card} >
                <div className={styles.cardTitle}>
                    测算结果： <span>{`${shuju.men ? shuju.men : '未知'}男 配 ${shuju.women ? shuju.women : '未知'}女`}</span>
                </div>
                <div className={styles.cardMid}>
                    <div className={styles.cardMidBox}>
                        <span className={styles.desc}>配对指数:</span>
                        <span>{shuju.zhishu}</span>
                    </div>
                    <div className={styles.cardMidBox}>
                        <span className={styles.desc}>配对比重:</span>
                        <span>{shuju.bizhong}</span>
                    </div>
                    <div className={styles.cardMidBox}>
                        <span className={styles.desc}>两情相悦指数:</span>
                        <span>{shuju.xiangyue}</span>
                    </div>
                    <div className={styles.cardMidBox}>
                        <span className={styles.desc}>天长地久指数:</span>
                        <span>{shuju.tcdj}</span>
                    </div>
                    <div className={styles.cardMidBox}>
                        <span className={styles.desc}>结果评述:</span>
                        <span>{shuju.jieguo}</span>
                    </div>
                    <div className={styles.cardCon}>
                        <span className={styles.desc}>恋爱建议:</span>
                        <div className={styles.line}></div>
                        <text selectable={true}>{shuju.lianai}</text>
                    </div>
                    <div className={styles.cardCon}>
                        <span className={styles.desc}>注意事项:</span>
                        <div className={styles.line}></div>
                        <text selectable={true}>{shuju.zhuyi}</text>
                    </div>
                </div>
            </div>
            <div className={styles.btnLang} onClick={() => queryData()} >
                立即测试
            </div>
        </View>
    )
}