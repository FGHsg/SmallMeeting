Page({
    data: {
        hidden: true
    },
    loadingTap: function(){
        this.setData({
          hidden: false
        });
        var that = this;
        setTimeout(function(){
          that.setData({
              hidden: true
          });
          that.update();
        }, 3000);
    }
})