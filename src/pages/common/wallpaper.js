import * as React from 'react'
import { View, request } from "remax/wechat";
import { usePageEvent } from 'remax/macro';
import { Loading, } from 'anna-remax-ui';
import { showToast, successApi } from '@/utils/utils'
import styles from './index.less'

export default (props) => {
    const [loading, setLoading] = React.useState(true);
    const [imgList, setImgList] = React.useState([]);
    usePageEvent('onLoad', (option) => {

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
            <div className={styles.shici}>今日壁纸</div>
            {
                loading ? <Loading type="anna" color="#1890FF" /> :
                    imgList && imgList.length > 0 ? imgList.map(v => (
                        <div key={v.id} className={styles.bizhiBox} onClick={() => Down(v.img)}>
                            <img src={v.img} alt="壁纸" className={styles.bizhi} />
                        </div>

                    )) : null
            }
        </View>
    )
}