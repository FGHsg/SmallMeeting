Page({
  data: {
    text: "Page Showing"
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  navigateToShow: function () {
    wx.navigateTo({ url: '../Showing/Showing' })
  },
  navigateToParticipator: function () {
    wx.navigateTo({ url: '../Participator/Participator' })
  },
  navigateToMore: function () {
    wx.navigateTo({ url: '../More/More' })
  },
  openFile: function () {
    wx.downloadFile({
      url: 'http://www.ghplay.cn/PLAY.HTML',
      fail: function (res) {
        console.log('打开文档失败')
      },
      success: function (res) {
        var filePath = res.tempFilePath
        wx.openDocument({
          filePath: filePath,
          success: function (res) {
            console.log('打开文档成功')
          }
        })
      }

    })
  }
})