const expressJwt = require('express-jwt');
const config = require('config.json');
const userService = require('../users/user.service');



function jwt() {
    const secret = "icanttellyou";
    return expressJwt({ secret: new Buffer(secret, 'base64') }).unless({
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