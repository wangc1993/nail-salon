// pages/technicain/technicain.js
let fileData = require('../../utils/data.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    skillData: fileData.getSkillData(),
    caseArray: ['美发', '美容', '美甲', '美睫'],
    index: 2
  },
  // caseArray改变
  stylechange: function (res) {
    this.setData({
      index: res.detail.value
    })
  },
  loadMore: function () {
    console.log('到底了，加载中...')
    //判断list的长度是否为0
    if (this.data.skillData.lenth === 0) {
      return
    } else {
      //加载数据
      wx.showToast({
        title: '加载中...',
        icon: 'loading',
        duration: 2000
      })
      //在这里我们是重复之前的数据(js里面的一个方法concat()方法，将我们的一个或多个数组连接起来)
      var that = this;
      that.data.skillData = that.data.skillData.concat(that.data.skillData);
      that.setData({
        list: that.data.skillData
      })
    }
  },
  //跳转技师详情
  navgeteDail: function () {
    wx.navigateTo({
      url: '../technicain_detail/technicain_detail'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      list: this.data.skillData
    })
  }
})