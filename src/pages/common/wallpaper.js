import * as React from 'react'
import { View, request, Swiper } from "remax/wechat";
import { usePageEvent } from 'remax/macro';
import { Loading, } from 'anna-remax-ui';
import { showToast, successApi } from '@/utils/utils'
import styles from './index.less'

export default (props) => {
    const [loading, setLoading] = React.useState(true);
    const [imgList, setImgList] = React.useState([]);
    usePageEvent('onLoad', (option) => {
        wx.setNavigationBarTitle({
            title: "今日壁纸"
        })
        request({
            url: `http://service.picasso.adesk.com/v1/vertical/vertical`, //仅为示例，并非真实的接口地址
            data: {
                limit: 30,
                skip: 180,
                adult: false,
                first: option.day,
                order: 'hot'
            },
            header: {
                'content-type': 'application/json' // 默认值
            },
            success(res) {
                const result = successApi(res);
                setImgList(result.res.vertical)
                setLoading(false)
                console.log(result, 'res')
            },
            fail(e) {
                showToast('抱歉！！数据正在开发中....')
                setLoading(true)
            }
        })
    })
    const Down = (v) => {
        showToast('抱歉！！暂不支持下载....')
        wx.saveImageToPhotosAlbum({
            filePath: v,
            success(res) {
                console.log('成功')
            },
            fail() {
                showToast('抱歉！！保存失败....')
            }
        })
    }
    return (
        <View className={styles.app}>
            {
                loading ? <div className={styles.loadingBox}><Loading type="anna" color="#FF7777" /></div> : null
            }
            <Swiper className={styles.swiper} autoplay="true" indicator-dots={true}>
                {
                    imgList && imgList.length > 0 ? imgList.map(v => (
                        <Swiper-item item-id={v.id} key={v.id}>
                            <div className={styles.bizhiBox} onClick={() => Down(v.img)}>
                                <image src={v.img} lazy-load='true' alt="壁纸" className={styles.bizhi} />
                            </div>
                        </Swiper-item>
                    )) : null
                }
            </Swiper>
        </View>
    )
}