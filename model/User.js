const Sequelize = require('sequelize');

const sequelize = new Sequelize('test', 'root', 'admin', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,
  
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  });
  sequelize
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    });

const User = sequelize.define('user', {
    firstName: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
    }
});

exports.save = () => {
    User.sync({ force: true }).then(() => {
        return User.create({
            firstName: 'Prince',
            lastName: 'Gupta'
        })
    });
}

exports.getAll = (callback) => {
    User.findAll().then((users) => {
        callback(users);
    })
}