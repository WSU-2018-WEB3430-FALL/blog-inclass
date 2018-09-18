module.exports = function(app){
  let indexRouter = require('../app/controllers/index');
  let usersRouter = require('../app/controllers/users');
  let postsRouter = require('../app/controllers/posts');

  app.use('/', indexRouter);
  app.use('/users', usersRouter);
  app.use('/posts', postsRouter);


};