var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
    var name = req.query.name;
    var mail = req.query.mail;
    var data = {
        title: "Hello Node.js!",
        content: "あなたの名前は" + name + "です。<br>" + "メールアドレスは" + mail + "です。"
    };
    res.render("hello", data);
});

module.exports = router;
