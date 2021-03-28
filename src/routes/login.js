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
        content: "Please sign in",
        msg: ''
    };
    res.render("login", data);
});

router.post('/post', (req, res, next) => {

    var email = req.body.email;
    var pass = req.body.pass;
    var data = {
        title: "ログイン画面",
        content: "Please sign in"
    };

    // コネクションの用意
    var connection = mysql.createConnection(mysql_setting);

    // データベースに接続
    connection.connect();

    connection.query('SELECT * from user where email=?',
            email, function (error, results, fields) {
        if (error == null) {
            console.log(results);
            if(results.length != 0){
                // ture・false判定
                var check = bcrypt.compareSync(pass, results[0]['pass'])
                if (check){
                    data = {title:'User', content:results};
                    res.render('top', data);
                } else{
                    data.msg = "Password is wrong";
                    // var data = {
                    //     title: "ログイン画面",
                    //     content: "Password is wrong"
                    // };
                    res.render("login", data);
                }
            }else{
                data.msg = "Email Not Found";
                // var data = {
                //     title: "ログイン画面",
                //     content: "Email Not Found"
                // };
                res.render("login", data);
            }
            
        }
    });

    connection.end();
});

module.exports = router;