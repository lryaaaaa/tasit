// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  addToCart(item){
    //加入cartlist   之前添加过，再加一
    const oldInfo=this.globalData.cartList
     .find(item=>item.iid===obj.iid)
     if(oldInfo){
       oldInfo.count++;
     }else{
       obj.count=1;
       obj.checked=true// 默认勾选
       this.global.cartList.push(obj)
     }
    
  },
  
  globalData: {
    cartlist:[]
  }
})
