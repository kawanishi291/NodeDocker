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

module.exports = router;