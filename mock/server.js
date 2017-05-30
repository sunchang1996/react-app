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
    console.log(req.params.city);
    console.log(req.params.page);
    res.send(list);
});
//fetch(url,{
// Accept:"application/json"
// }).then(res=>res.json()).then(data=>{
// data 就是最后的结果
// })