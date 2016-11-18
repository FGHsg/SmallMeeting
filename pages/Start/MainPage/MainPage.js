var pageData = {},
    type = [
        'view', 'content', 'form', 'interact', 'nav', 'media', 'map', 'canvas'
    ];

pageData.widgetsToggle = function (e) {
    var id = e.currentTarget.id, data = {};
    for (var i = 0, len = type.length; i < len; ++i) {
        data[type[i] + 'Show'] = false;
    }
    data[id + 'Show'] = !this.data[id + 'Show'];
    this.setData(data);
};
//使用函数操纵是否显示下拉框
Page(pageData);