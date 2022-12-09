import request from './network.js'

export const getMultiData=()=>{
    //如何返回一个什么东西，上面有then方法
    //promise 是解决js异步的良药
      //允许其内部立即执行一个耗时的任务
      // resolve thenable
      return  request({
        url:'/home/multidata',
      })
}
export const getProducts=(type,page)=>{
  return request({
    url:'/home/data',
    data:{
      type,
      page
    }
  })
}


