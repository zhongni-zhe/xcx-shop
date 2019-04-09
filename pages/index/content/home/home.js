// pages/index/content/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'https://dpic.tiankong.com/cc/9c/QJ6251860199.jpg?x-oss-process=style/670ws',
      'https://dpic.tiankong.com/fj/7z/QJ6253097892.jpg?x-oss-process=style/670ws',
      'https://dpic.tiankong.com/pu/be/QJ6266116275.jpg?x-oss-process=style/670ws'
    ]
  },
  // 跳转产品列表
  jumpToProductList() {
    wx.navigateTo({
      url: '../../product/productList/list',
      success: function () { },
      fail: function () { },
      complete: function () { }
    })
  },
  // 跳转about
  jumpToAbout() {
    wx.navigateTo({
      url: '../../about/about',
      success: function () { },
      fail: function () { },
      complete: function () { }
    });
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getUserList();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  /**
   * 获取用户列表
   */
  getUserList() {
    wx.request({
      url: 'http://web.thinkphp.com/index.php/index/User/lists',
      data: {},
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data)
      }
    })
  }
})