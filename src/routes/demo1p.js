var express = require('express');
var router = express.Router();

router.post('/post', (req, res, next) => {
    var f_name = req.body['f_name'];
    var l_name = req.body['l_name'];
    var email = req.body['email'];
    var pass = req.body['pass'];
    var year = req.body['year'];
    var month = req.body['month'];
    var day = req.body['day'];
    var gender = req.body['gender'];
    if(gender == "men"){
        gender = "男"
    }else if(gender == "women"){
        gender = "女"
    }else if(gender == "none"){
        gender = "その他"
    }

    var data = {
        title: "登録確認画面",
        name: f_name+l_name,
        email: email,
        pass: pass,
        year: year,
        month: month,
        day: day,
        gender: gender
    };
    res.render("demo1p", data);
});

module.exports = router;