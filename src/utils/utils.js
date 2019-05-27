const util = {
    //处理时间格式
    filterDate: function(date) {
        if (!date) return ''
        const year = date.getFullYear()
        const month = ((date.getMonth() + 1) >= 10) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))
        const day = date.getDate() >= 10 ? date.getDate() : '0' + date.getDate()
        return year + '/' + month + '/' + day
    },
    //根据给出数组判断打卡方式
    filterClockType: function(arr) {
        const list = []
        const value = ['蓝牙', 'WIFI', 'GPS']
        arr.forEach(item => {
            list.push(value[item])
        })
        return list.join(';')
    },
    //根据给出数组返回工作日
    filterWorkDay: function(arr) {
        const days = ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        const list = []
        arr.forEach((item, i) => {
            if (item) list.push(days[i])
        })
        return list.join(';')
    }
}


export default util