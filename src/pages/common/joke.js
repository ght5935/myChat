import * as React from 'react'
import { View, request } from "remax/wechat";
import { usePageEvent } from 'remax/macro';
import { Loading, } from 'anna-remax-ui';
import { showToast, successApi } from '@/utils/utils'

import styles from './index.less'

export default () => {
    const [loading, setLoading] = React.useState(true);
    const [jokeList, setJokeList] = React.useState([]);
    const [params, setParams] = React.useState({
        key: 'e9c5e478f7b19bc46ad10c3985c6c878',
        sort: 'asc',
        time: ''
    });
    const queryData = () => {
        const ts = Math.round(new Date().getTime() / 1000).toString();
        setParams({ ...params, time: ts })
        request({
            url: `http://v.juhe.cn/joke/randJoke.php`, //仅为示例，并非真实的接口地址
            data: {
                ...params
            },
            header: {
                'content-type': 'application/json' // 默认值
            },
            success(res) {
                const result = successApi(res);
                setJokeList(result.result)
                setLoading(false)
            },
            fail(e) {
                showToast('抱歉！！数据正在开发中....')
                setLoading(true)
            }
        })
    }
    usePageEvent('onLoad', () => {
        queryData()
        wx.setNavigationBarTitle({
            title: "每日一笑"
        })
    })
    usePageEvent('onReachBottom', () => {
        setLoading(false)
        queryData()
        console.log('上拉加载')
    })
    usePageEvent('onPullDownRefresh', () => {
        queryData()
        console.log('下拉刷新')
    })


    return (
        <View className={styles.app}>
            {
                loading ? <div className={styles.loadingBox}><Loading type="anna" color="#FF7777" /></div> : null

            }
            {
                jokeList && jokeList.length > 0 ? jokeList.map(v => (
                    <div key={v.hashId} className={styles.jokeBox} >
                        {v.content}
                    </div>

                )) : null
            }
        </View>
    )
}