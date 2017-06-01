let express = require('express');
let app = express();
let  bodyParser  = require('body-parser');
app.listen(3000);
app.use(bodyParser.urlencoded({extended:true}));
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
}));

//提交
app.post('/api/comment',(req,res)=>{
    console.log(req.body);
    res.send({msg:'ok'})
});


//fetch(url,{
// Accept:"application/json"
// }).then(res=>res.json()).then(data=>{
// data 就是最后的结果
// })