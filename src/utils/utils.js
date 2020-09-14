
export function successApi(data) {
    let result = ''
    if (data.statusCode == 200) {
        result = data.data
    }
    return result
}

export const isPhone = phone => {
    return /^(13[0-9]|14[579]|15[0-3,5-9]|16[2567]|17[01235678]|18[0-9]|19[189])\d{8}$/.test(phone)
}

export const isPwd = pwd => {
    return /^(?!\s)(?=.*[0-9])(?=.*[a-z])[A-Za-z0-9]{8,16}$/.test(pwd)
}

export function showToast(name) {
    wx.showToast({
        title: name,
        icon: 'none',
        duration: 2000,
        mask: true
    })
}

export function showLongToast(name) {
    wx.showToast({
        title: name,
        icon: 'none',
        duration: 3000,
        mask: true
    })
}