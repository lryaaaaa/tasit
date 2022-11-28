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

       
  