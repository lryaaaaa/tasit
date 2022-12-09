//所有请求的封装
import {baseURL,timeout } from './config.js'
function request(options){
   wx.showLoading({
     title: '数据加载中...',
   })
  return new Promise((resolve,reject)=>{
     console.log(baseURL+options.url)
     wx.request({
       url: baseURL+options.url,
       timeout,
       data:options.data||{},
       success:function(res){
         resolve(res.data)
       },
       fail:function(err){
         reject(err)
       },
      //  不管成或者败，结束了
       complete:function(){
         wx.hideLoading()
       }
     })
  })
}
export default request;