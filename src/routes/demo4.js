var express = require('express');
var router = express.Router();
var mysql = require('mysql');
const bcrypt = require('bcrypt');

const mySqlSettingModule = require('../connectdb/connectdb.js');
var mysql_setting = mySqlSettingModule();

/* GET home page. */
router.get('/', (req, res, next) => {
    var data = {
        title: "ログイン画面",
        content: "入力し、送信して下さい。"
    };
    res.render("demo4", data);
});

router.post('/post', (req, res, next) => {

    var email = req.body.email;
    var pass = req.body.pass;

    // コネクションの用意
    var connection = mysql.createConnection(mysql_setting);

    // データベースに接続
    connection.connect();

    connection.query('SELECT * from user where email=?',
            email, function (error, results, fields) {
        if (error == null) {
            // passのみ取り出し
            console.log(results[0]['pass']);
            // ture・false判定
            var check = bcrypt.compareSync(pass, results[0]['pass'])
            var data = {title:'User', content:"判定：" + check};
            res.render('demo4', data);
        }
    });

    connection.end();
});

module.exports = router;