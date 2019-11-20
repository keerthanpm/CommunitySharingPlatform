const expressJwt = require('express-jwt');
const config = require('config.json');
const userService = require('../users/user.service');

module.exports = jwt;

function jwt() {
    const secret = config.secret;
    return expressJwt({secret}).unless({
        path: [
            // public routes that don't require authentication
            '/users/authenticate',
            '/users/register',
            //'/thread/create',
           // '/thread/post',
            //'/thread/get'
        ]
    });
}

