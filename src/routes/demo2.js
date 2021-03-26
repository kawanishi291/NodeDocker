var express = require('express');
var router = express.Router();
var mysql = require('mysql');

// MySQL設定
// var mysql_setting = {
//     host    : 'a2abe6019571',
//     user    : 'admin',
//     password: 'adminpass',
//     database: 'sample_db'
// };
const mySqlSettingModule = require('../connectdb/connectdb.js');
var mysql_setting = mySqlSettingModule();


/* GET home page. */
router.get('/', (req, res, next) => {

    // コネクションの用意
    var connection = mysql.createConnection(mysql_setting);

    // データベースに接続
    connection.connect();

    connection.query('SELECT * from user',
            function (error, results, fields) {
        if (error == null) {
            var data = {title:'User', content:results};
            res.render('demo2', data);
        }
    });
    // connection.connect((err) => {
    //     if (err) {
    //       console.log('error connecting: ' + err.stack);
    //       return;
    //     }
    //     console.log('success!!');
    //   });

    connection.end();
});

module.exports = router;
