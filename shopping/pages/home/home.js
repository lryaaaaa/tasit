// pages/home/home.js
// 模块化
import {
  getMultiData,
  getProducts
} from '../../service/home.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    binners:[
      'https://img.36krcdn.com/20221207/v2_97754071f51143ccbf747724fd85bf55_img_jpeg',
      'https://img.36krcdn.com/20221207/v2_4af01f7ef9814ca8889af47fddbf77f4_img_jpg',
      'https://img.36krcdn.com/20221208/v2_b26c308fda4742e098c6071635b886b4_img_jpeg'
    ],
    showTabControl: false,
    titles: ["流行", "新款", "精选"],
    topPosition: 0,
    page:1,
    recommends:[]
  },
  tabClick(e) {

  },
  loadMore() {
    console.log('到底了');
  },
  scrollPosition(e) {
    // console.log(e);
    const position=e.detail.scrollTop;
    if(position>300){
    this.setData({
      showTabControl:true
    })
  }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 
    this._getData();
  },
  _getData() {
    this._getMultiData();
    this._getGoods();
  },
  _getGoods(){
     getProducts()
     .then(res=>{
       console.log(res)
     })
  },
  _getMultiData() {
    // 耗时的http请求
    getMultiData()
    // 拿到数据后
      .then(res => {
        const banners = res.data.banner.list.map(item => {
          return item.image
        })
        this.setData({
          banners: banners,
          recommends:res.data.recommend.list
        });
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})