# 塔斯汀小程序模仿项目 
  - 本项目归塔斯汀所有，只做学习所用，请尊重原厂版权
  - 可以去监听访问数据 fiddler 抓包工具抓取图片
 
   -  界面模仿采用markman做标记
     1. 我们没有设计稿，如何1：1还原小程序
     2. 拍屏得到截图
     3. 使用在线大小[转换工具](https://www.gaitubao.com/),将图片改成750x1604，以后在写wxss的时候，直接量像素就可以写进去，因为小程序以750rpx作为设计稿标准大小帮我们自动适配
     4. 使用[markman](http://www.getmarkman.com/)先标注，再写样式



    -项目配置
     在json中加入  "navigationStyle": "custom"。
     可以隐藏navigationBar

     -启动定位功能

    -使用BEM国际css命名规范
    tst_banners 广告位
    tst_banners__img  Element


    - 滴滴的swiper多页活动菜单功能
      用户体验
         菜单太多，用户可能会感觉不舒服 ，所以把重要的放在首页，
         其他的可以多放些
         技术难度
          1. swiper> 2swiper-item
          2. swiper  高度 变化的  登高的
            2行  4行
            swiper  高度为响应式
          3. {{'higher_menus'}}
          占位符    返回值是替换的值
          js运行区域
          4. swiper bindchange  事件
          event 对象中
             event.detail.current  当前是第几个swiper-item?
             menu_type
             this.setData()

        

        - 数据响应式编程
             有别于DOM编程、API
           设置一些页面效果，操作的不是DOM，
           操作的是数据，因为数据发生改变，页面自动刷新
            1. 滴滴可变高度的首页菜单
            2. tabbar  组件
              data  添加  tab 属性  ，表示当前哪个tab被激活
              tab-item data-tab  数据属性 data-
              e.currentTarget   点击当前属性
              e.currentTarget.dataset.tab  数据
            3. 外卖品类级菜单数据设计
              2个scroll-view，数据是由相关性的，
              可以做2层的json解构
              [  分类数组
              {
                菜品数组:[{

                },{},{}
                  
                ]
              }
              ]

      - 奶茶小程序的门店选择页
         1. lbs location bass service
         2. wx.getlocation


     -  css技巧
         1. 选择器优先级
            p.md2          11
            p.md2+divmd3   11+11
            标签<类名<id<计算表达式
         2. 行内样式，优先级更高  少用
         3. !important 最高（慎用）


         4. BEM国际命名规范
         Block 开始 rx_tab 新的组件
         Element 内部元素的声明 rx_tab_item
         Modifier rx_tab_item-on
        运用常用css命名套路
         - BEM 开启新的功能区域
         - wx_btn .wx_btn-primary
         - .page>.page__hd+.page__bd+.page__ft
         - .cell>.cell__hd+.cell__bd+.cell__ft
         - __ Element 只做一级，用简单单词，不重复
        
         5. 小程序不允许在wxss里bgc:url(本地图片)
          - 小程序之所以小，不要做太多的东西，还有产品大小
          - 包的大小小于2M，
          - 使用base64格式的图片，Google的图片格式，更小
          - bgc:url()
        6. 视频播放列表页逻辑
         - 得有远程可播放视频
         - 视频有poster封面
         - 显示和点击的是图片
         - currentVid 逻辑切换
           dataset.vid
             image currentVid!==vid
             video currentVid ==vid
           
          


       
  