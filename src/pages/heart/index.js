import * as React from 'react'
import { View, request, } from "remax/wechat";
import { usePageEvent } from 'remax/macro';
import styles from './index.less'

export default () => {
    // 获取当前页面的实例
    // const pageInstance = usePageInstance();
    // // onShow生命周期执行
    // usePageEvent('onShow', () => {
    //     // 获取当前页面tabbar实例并初始化
    //     // pageInstance.getTabBar().init()
    // });
    usePageEvent('onLoad', () => {
        wx.setNavigationBarTitle({
            title: "收藏"
        })
    })
    return (
        <View className={styles.app}>正在开发中，小主已经在加班中了....</View>
    )
}