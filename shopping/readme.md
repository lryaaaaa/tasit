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

        - 小程序组件语法
          1.  components({

            })
          2. 通用组件  放在components/下
              组成页面的组件，不怎么复用的就放在对应pages下
               可让页面简单化，代码可读，便于维护
          3.  数据有 properties(页面派发) +data(私有)
          4. 方法是放在methods
              自带一个  this.triggerEvent(页面的自定义事件，传递的参数)
          5. 页面上 <demo data={} bind:event="">   自定义事件   
          “”内是添加在页面等待回调函数

    - 详情页开发套路（关注点在组件和交互）
        1. onLoad 解析请求参数iid.
        2. 将请求的方法独立封装
        3. 页面和请求分离
        4. service/
         添加一个detail方法
            每个page都会在service下有个对应的js文件
        5. 页面的组件化
           看设计稿，划分组件
           工作会以组件为单位
        6. 分析数据，进行数据驱动的界面开发
           切页面 wxml +wxss 应该发生在组件里，而不是pages下
        7. 组件功能及表现如果不清楚去找后端或者设计师，产品
        8. 对页面的重要数据进行建模，models/目录下
            严格把关数据的过程



    - serverice 目录架构思路
      1. 管理所有的网络请求
        baseURL  统一的request方法
      2. 每个页面一个单独的js文件，提供请求方法，
          代码可读性和管理。
      3. 高效发出请求
          不用每个请求都去重复 wx.request()
      - 组件的思维
       1. 页面由组件构成
       2. components （共享）组件和单个页面的组件（可读性）
       3. 跨页面，跨项目，开源到npm市场
         vant？   商业项目，大型可以采用
           使用第三方组件  ，加快开发速度


    - 接口的认识
        1. 已经有后端提供的接口
        2. 假如项目刚开始没有提供好的接口怎么办？
             我用fastmock，先用，
             前端自己开发时用的工具
             等后端
        3. 不要等接口，使用fastmock,json格式去做提供假接口，
           满足页面的正常展示功能，
        4. 后端接口上线了，将请求地址切换到线上地址，启用真接口
        5. 在前后端分离之前，接口文档写出，约定好
             URL  /home/multidata
               返回的格式
    - 首页的接口，为何要分两个接口
     1. 商品表（品论表） 基础接口
          后端执行快，就一两条sql
     2. 相关推荐
       大数据，推荐算法，不是查表，要计算，耗时
       会影响页面显示速度
     3. onlond ——列出
        this._getGoodsInfo();
        this._getRecommends()


   - 父子组件通信
     1. page 是父亲
      向子组件提供properties
       并且还绑定一个自定义事件  bind:event="handler"
     2. 子组件
       可以通过this.triggerEvent('event',...params)
       向父组件通信
   - 加入购物车的商品，如何到购物车页面显示已添加商品？
     app.js globalData


   - 购物车页面规则开发
     1. 数据来自于app.globalData
     2. 生命周期的概念
           应用启动时触发  app.js中 onlaunch
           home.js  onload  onshow.. onunload   返回按钮会销毁页面加载缓存
           cart.js      属于tabber  切换不会unload(卸载缓存)
           onload 只会执行一次
           onshow  会执行多次  更新购物车属性

   - 数组的es6方法
    1. for(let i=o;i<arr.length;i++){
      计数循环，对CPU友好，对人不行，可读性不行
    }
       如果下标很重要的话
    2. for es6 的升级版
     for(for item of arr){

     }

    3. 数组的好多功能方法
       forEach  让每个元素都执行一个回调函数
       find  任然会像forEach 一样，回调函数 return true 返回当前项
       reduce 累加计算
       
       
              
       

              
               
    