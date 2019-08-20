//var mysql      = require('mysql')
const express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'rexxara',
//   password : 'rexxara',
//   database : 'rexxara'
// });

// connection.connect();

// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });

const app = express()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(cookieParser())
app.get('/', (req, res) => {
  console.log("hwwhw")
  res.send('Hello World!')
})
app.post('/login', (req, res) => {
  if (req.cookies.userInfo) {
    res.send('already Login')
  } else {
    res.cookie("userInfo", JSON.stringify(req.body), { maxAge: 900000, httpOnly: true })
    res.send('lglg')
  }

})
app.listen(8080, () => console.log('Example app listening on port 8080!'))