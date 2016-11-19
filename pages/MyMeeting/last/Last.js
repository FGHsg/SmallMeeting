// var pageData = {},
//     type = [
//         'img1','img2','last','meeting'];

// pageData.widgetsToggle = function (e) {
//     var id = e.currentTarget.id, data = {};
//     for (var i = 0, len = type.length; i < len; ++i) {
//         data[type[i] + 'Show'] = false;
//     }
//     data[id + 'Show'] = !this.data[id + 'Show'];
//     this.setData(data);
// };
// //使用函数操纵是否显示下拉框
// Page(pageData);

Page({
  data: {
    type: ['img1', 'img2', 'last', 'meeting'],
    films: ['成龙','李小龙','史泰龙'],
    hasMore: true,
    showLoading: true,
    start: 0
  },
  widgetsToggle: function (e) {
    var id = e.currentTarget.id, data = {};
    for (var i = 0, len = type.length; i < len; ++i) {
      data[type[i] + 'Show'] = false;
    }
    data[id + 'Show'] = !this.data[id + 'Show'];
    this.setData(data);
  }
  // onPullDownRefresh: function () {
  //   console.log('onPullDownRefresh', new Date())
  // },
  // scroll: function (e) {
  //   //console.log(e)
  // },
  // onLoad: function () {
  //   var that = this
  //   functions.getCity(function (city) {
  //     functions.fetchFilms.call(that, url, city, 0, pageSize, function (data) {
  //       that.setData({
  //         showLoading: false
  //       })
  //     })
  //   })
  // },
  // scrolltolower: function () {
  //   var that = this
  //   functions.getCity(function (city) {
  //     functions.fetchFilms.call(that, url, city, that.data.start, pageSize, function (data) { })
  //   })
  // },
  // viewDetail: function (e) {
  //   var ds = e.currentTarget.dataset;
  //   wx.navigateTo({
  //     url: '../detail/detail?id=' + ds.id + '&title=' + ds.title + '&type=ing'
  //   })
  // }
})