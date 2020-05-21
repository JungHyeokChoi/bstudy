var express = require('express');
var router = express.Router();

router.get('/main', (req, res)=>{
    res.render('index');
});

router.get('/deajeon', (req,res)=>{
    res.render('main', {data:"잘 들어온 데이터"});
});

module.exports = router;