const expressJwt = require('express-jwt');
const config = require('config.json');
module.exports=jwt;

function jwt() {
    const secret = config.secret;
    return expressJwt({ secret: new Buffer(secret, 'base64') }).unless({
        path: [
            // public routes that don't require authentication
            //'/users/authenticate',
            //'/users/register',
            '/thread/search',
           // '/thread/post',
            '/thread/get',
            '/thread/latestTags',
            '/thread/searchByTags'
        ]
    });
}