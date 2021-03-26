var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
    var data = {
        title: "会員登録画面",
        content: "入力し、送信して下さい。"
    };
    res.render("demo1", data);
});

router.post('/post', (req, res, next) => {
    var f_name = req.body['f_name'];
    var l_name = req.body['l_name'];
    var mail = req.body['mail'];
    var mail2 = req.body['mail2'];
    var pass = req.body['pass'];
    var pass2 = req.body['pass2'];
    var year = req.body['year'];
    var month = req.body['month'];
    var day = req.body['day'];
    var gender = req.body['gender'];

    var data = {
        title: "登録確認画面",
        content: "お名前：" + f_name + l_name + "様<br>メールアドレス：" + mail + 
            "<br>生年月日：" + year + "年" + month + "月" + day + "日<br>性別" + gender
    };
    res.render("demo1", data);
});

module.exports = router;
