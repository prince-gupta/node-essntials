
const user = require('../model/User');

exports.run = (req, res, next) => {
    user.getAll((users) => {
        res.locals.users = users;
        next()
        res.status(200).send(JSON.stringify(users));
    })
}