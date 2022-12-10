// pages/home/home.js
// 模块化
import {
  getMultiData,
  getProduct
} from '../../service/home.js'
//import  模块化
// es6 {}  解构
import{
  POP,
  NEW,
  SELL,
  BACK_TOP_POSITION
} from '../../common/const.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //格式的目的是什么？
    goods:{
      showBackTop:false,
      [POP]:{//key
        page:1,
        list:[]
      },
      [NEW]:{
        page:1,
        list:[]
      },
      [SELL]:{
        page:1,
        list:[]
      }
    },
    binners:[
      'https://img.36krcdn.com/20221207/v2_97754071f51143ccbf747724fd85bf55_img_jpeg',
      'https://img.36krcdn.com/20221207/v2_4af01f7ef9814ca8889af47fddbf77f4_img_jpg',
      'https://img.36krcdn.com/20221208/v2_b26c308fda4742e098c6071635b886b4_img_jpeg'
    ],
    showTabControl: false,
    titles: ["流行", "新款", "精选"],
    topPosition: 0,
    page:1,
    recommends:[],
    currentType:POP // 表示当前显示
  },
  tabClick(e) {
    let currentType='';
    switch(e.detail.index){
      case 0:
      currentType=POP;
      break;
      case 1:
        currentType=NEW;
        break;
      case 2:
        currentType=SELL;
        break;
    }
    this.setData({
      currentType:currentType
    })
    this.selectComponent('.tab-control')
        .setCurrentIndex(e.detail.index)

    this.selectComponent('.tab-control-temp')
         .setCurrentIndex(e.detail.index)
      
    
  },
  loadMore() {
    // console.log('到底了');
    this._getProductData(this.data.currentType);
  },
  onBackTop(){
    this.setData({
      topPosition:0
    })
  },
  scrollPosition(e) {
    // console.log(e);
    const position=e.detail.scrollTop;
    this.setData({
      showBackTop:position>BACK_TOP_POSITION
      //如果position >1000为true  小于为false
    })
    wx
     .createSelectorQuery()
     .select('.tab-control')
     .boundingClientRect(rect=>{
      //  console.log(rect.top);
      const show=rect.top>0
      this.setData({
        showTabControl:!show
      })
     })
      .exec()
    
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
    //默认流行商品数据
    this._getProductData(POP);
    this._getProductData(NEW);
    this._getProductData(SELL);
    // this._getGoods();
  },
  //可以是通用的列表查询
  _getProductData(type){
      const page=this.data.goods[type].page;
      getProduct(type,page)
       .then(res=>{
        // console.log(res);
        const list=res.data.list;
        const goods=this.data.goods;
        goods[type].list.push(...list)
        goods[type].page+=1
        this.setData({
          goods
        })
       })
  },
  _getGoods(){
     getProducts()
     .then(res=>{
      //  console.log(res)
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