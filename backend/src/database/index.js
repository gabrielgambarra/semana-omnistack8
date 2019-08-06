const mongoose = require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

mongoose.connect('mongodb://localhost/semana-omnistack8');
//connect //createConnection
mongoose.Promise = global.Promise;

module.exports = mongoose;