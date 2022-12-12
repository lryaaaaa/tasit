export class GoodsBaseInfo{
   constructor(itemInfo,columns,services){
    //  console.log(itemInfo,columns,services);
    this.title=itemInfo.title
    this.desc=itemInfo.desc
    this.newPrise=itemInfo.prise
    this.oldPrise=itemInfo.oldPrise
    this.discount=itemInfo.discountDesc
    this.columns=columns
    this.services=services
    this.realPrise=itemInfo.lowNowPrise
   }
}
export class GoodsShopInfo{
  constructor(shopInfo){
    this.logo=shopInfo.shopLogo;
    this.name=shopInfo.name;
    this.fans=shopInfo.cFans;
    this.sells=shopInfo.cSells;
    this.score=shopInfo.score;
    this.GoodsCount=shopInfo.cGoods;
  }
}