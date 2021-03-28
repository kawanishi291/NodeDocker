var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
var mysql = require('mysql');

const mySqlSettingModule = require('../connectdb/connectdb.js');
var mysql_setting = mySqlSettingModule();

/* GET home page. */
router.get('/', (req, res, next) => {
    var data = {
        title: "会員登録画面",
        content: "入力し、送信して下さい。"
    };
    res.render("sign_up", data);
});

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
    // ハッシュ化
    let hashed_password = bcrypt.hashSync(pass, 10);

    var data = {
        title: "登録確認画面",
        name: f_name+l_name,
        email: email,
        pass: hashed_password,
        year: year,
        month: month,
        day: day,
        gender: gender
    };
    res.render("sign_up_check", data);
});

router.post('/push', (req, res, next) => {
    var name = req.body.name;
    var email = req.body.email;
    var pass = req.body.pass;
    var year = req.body.year;
    var month = req.body.month;
    var day = req.body.day;
    var gender = req.body.gender;
    var data = {'name': name, 'email': email, 'pass': pass, 'year': year, 'month': month, 'day': day, 'gender': gender};

    // コネクションの用意
    var connection = mysql.createConnection(mysql_setting);

    // データベースに接続
    connection.connect();

    connection.query('insert into user set ?', data,
            function (error, results, fields) {
        res.redirect('/login');
    });

    connection.end();
});

module.exports = router;
