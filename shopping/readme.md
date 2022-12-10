# 从代码到能力的转变
- 把项目完整走一遍
  不写代码 读代码 理解小程序完整项目开发

- pages
  - components
    组成页面的组件
    把一部分页面功能分离， 有利于以后复用
  - 标签 view div p...

- component 语法重点
  1. 思想
    组件看似复杂， 封装一次 多次复用 到处使用
  2. 地位
    组件仅次于页面， 是高级使用技巧
  3. 创建
    和页面差不多
  4. 引入
    页面要使用组件， 需要引入 usingComponents / 根目录
  5. properties 属性
    page 和components 通信约定{
      type: Array  类型
      value:[]
    }
    <w-tab-control title="" bind:/>
    bind: 事件绑定
    6. 私有属性
      data 自己运转
    7. 向外通信
      this.triggerEvent('event_name', {index: 1});

- scroll-view
  1. 移动端页面 优先考虑scroll-view
    可滚动内容的容器
  2. scroll-top  0
    回到顶部
  3. bindscroll
    滚动事件 频繁
  4. bindscrolltolower 滚动底部 加载更多
    bindscrolltoupper 滚动顶部
  5. scroll-with-anima

- 数据请求事项
  1. 找到生命周期
    onLoad 最合适
  2. 不要再onLoad 写太多代码 有可能有很多的事情要做， 用函数封装
    取数据的  getData fetchData
  3. 高手还会把 数据请求 模块化独立于Page
  


  - 列表数据渲染
   1. scrol-view
     bindscroll    回到首页
     bindcrolltower="loadMore" 底部，加载跟多
     concat 分页   ?page=1
     切换tab ?type=

  - 小程序的架构
    - components 组件
      细化界面开发，方便复用
    - service  跟api接口相关
       直接wx.request 缺点？ 不易管理
      统一管理

    - 接入接口
        page home 不直接调用wx.request
         从service提供
           所以在js中有一个向外提供getMultiData方法
           import {   //es6的引入模块
           getMultiData
             } from '../../service/home.js'
             getMultiData得是支持then函数
              返回Promise 时支持then
              return new promise(()=>{
                network.js会提供一个通用的request方法
              })

              return request({
                url:'/home/multiData'
              })
              request 函数 必须返回一个Promise实例
              异步，请求完成

           - 页面开发新思路
              页面不再由标签构成，而由组件构成
              把一个页面任务，分成若干开发组件
               - 可以多个页面共享 /components
               - 不共享，只在特定页面出现，页面简洁就放到pege目录下

          -  首页列表复杂业务梳理
            1. 查询参数有两个
                page   
                type
                先测试接口http://152.136.185.210:7878/api/hy66/home/data?page=${page}&type=${type}
            2. goods 列表 简单
                 数据驱动的列表
            3. 默认的type 为pop  page =1 
            4. goods:{
              [type1]:{
                list:[],
                page:1
              },
              [type2]:{
                list:[],
                page:1
              }
            }
            开始时都请求一下，切换tab时马上出来
             getProductData(type)





        - w-goods w-goods-item 组合
          1. 页面是由组件构成，而不是标签
          2. 组件就负责渲染，一个业务， properties   triggerEvent
          3. w-goods 容器组件  集合
             w-goods-item  功能
             
              
               
    