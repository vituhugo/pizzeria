// if (process.env.NODE_ENV !== "production") {
//   require("dotenv").parse()
// }

var createError = require('http-errors');
var express = require('express');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var menuRouter = require('./routes/menu.router');

var app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/', indexRouter);
app.use('/pizzas', menuRouter);



// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send('error');
});





// const Sequelize = require("sequelize");
// const sequelize = new Sequelize("vitor_pizzas", "root","123456",{
//     host:"localhost",
//     dialect: "mysql"
// });


//     sequelize.authenticate()
//     .then(function(){
//         console.log("sucessful");
//     }).catch(function(error){
//         console.log("Error to connect on database" + error)
//     })

    
  
// module.exports = sequelize;





app.listen(process.env.PORT || 3001);
console.log("server up");


module.exports = app