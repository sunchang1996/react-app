let express = require('express');
let app = express();
app.listen(3000);

let ad = require('./home/ad');
// 广告接口
app.get('/api/ad',(req,res)=>{
   res.send(ad);
});

//fetch(url,{
// Accept:"application/json"
// }).then(res=>res.json()).then(data=>{
// data 就是最后的结果
// })