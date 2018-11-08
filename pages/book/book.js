// pages/book/book.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    choose_name: '选择联系人',
    index: 0,
    range: [
      '贵州金阳新区，李先生，电话：18786056435',
      '安顺新区，王先生，电话：18786056435',
      '阳关小区，李先生，电话：18786056435',
      '大营坡王江小区，李先生，电话：18786056435',
      '贵州花溪金阳新区，李先生，电话：18786056435'
    ],
    date: '2016-5-26',
    time: "19:34",
    showToastBol: true
  },
  // 修改联系人
  nameChange: function (res) {
    this.setData({
      index: res.detail.value
    })
  },
  // 修改日期
  bindDateChange: function (res) {
    this.setData({
      date: res.detail.value
    })
  },
  // 修改时间
  bindTimeChange: function (res) {
    this.setData({
      time: res.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  }
})