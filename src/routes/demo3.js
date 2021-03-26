var express = require('express');
var router = express.Router();
var mysql = require('mysql');

const mySqlSettingModule = require('../connectdb/connectdb.js');
var mysql_setting = mySqlSettingModule();


router.post('/post', (req, res, next) => {
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
        res.redirect('/demo2');
    });

    connection.end();
});

module.exports = router;
