var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: '004_express_mysql'
    },
    port: 3000,
    db: 'mysql://root@localhost/004_express_mysql_development'
  },

  test: {
    root: rootPath,
    app: {
      name: '004-express-mysql'
    },
    port: 3000,
    db: 'mysql://root@localhost/004_express_mysql_test'
  },

  production: {
    root: rootPath,
    app: {
      name: '004-express-mysql'
    },
    port: 3000,
    db: 'mysql://root@localhost/004_express_mysql_production'
  }
};

module.exports = config[env];
