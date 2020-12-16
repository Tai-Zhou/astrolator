const util = require('../../utils/util.js')

Page({
    data: {
        logs: []
    },
    mixins: [require('../../utils/themeChanged')],
    onShow: function () {
        this.setData({
            logs: (wx.getStorageSync('logs') || []).map(log => {
                return util.formatTime(new Date(log))
            })
        })
    }
})
