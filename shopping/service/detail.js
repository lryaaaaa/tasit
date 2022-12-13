import request from './network.js'

//es6 模块化语法
export const  getDetail=(iid)=>{
      return request({
        url:'/detail',
        data:{
          iid
        }

      })
}
export const getRecommends=()=>{
    return request({
      url:'/recommend'
    })
}