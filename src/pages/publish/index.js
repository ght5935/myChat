import * as React from 'react'
import { View, usePageInstance, usePageEvent } from "remax/wechat";
import styles from './index.less'

export default () => {
    usePageEvent('onShow', () => {

        // 1. 获取数据库引用
        const db = wx.cloud.database()
        db.collection('user').get({
            success: function (res) {
                // res.data 是一个包含集合中有权限访问的所有记录的数据，不超过 20 条
                console.log(res.data)
            }
        })

    })
    return (
        <View className={styles.app}>this is 列表 page</View>
    )
}