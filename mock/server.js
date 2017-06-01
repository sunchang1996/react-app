let express = require('express');
let app = express();
app.listen(3000);

let ad = require('./home/ad');
// 广告接口
app.get('/api/ad',(req,res)=>{
   res.send(ad);
});

let list = require('./home/list');
// 获取列表 需要传递城市,页码
app.get('/api/list/:city/:page',function (req,res) {
    res.send(list);
});

//商户详情
let info = require('./detail/info');
// 通过ID来获取商务信息
app.get('/api/detail/info/:id',(req, res) =>{
    res.send(info)
});

// 评价列表  ID 页码  page
let comment = require('./detail/comment');
app.get('/api/detail/comment/:id/:page',(req,res)=>{
    res.send(comment);
});

// 订单列表  用户名 id /api/orderlist/:username
let orderList = require('./orderlist/orderList');
app.get('/api/orderlist/:username',((req,res)=>{
    res.send(orderList)
}))


//fetch(url,{
// Accept:"application/json"
// }).then(res=>res.json()).then(data=>{
// data 就是最后的结果
// })