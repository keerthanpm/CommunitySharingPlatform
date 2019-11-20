const expressJwt = require('express-jwt');
const config = require('config.json');


module.exports = jwt;

function jwt() {
    const secret = config.secret;
    return expressJwt({ secret, isRevoked }).unless({
        path: [
            // public routes that don't require authentication
           // '/users/authenticate',
           // '/users/register',
            //'/thread/create',
           // '/thread/post',
            '/thread/get'
        ]
    });
}

async function isRevoked(req, payload, done) {
   let url = 'http://localhost:8888/user/usercheck/'
    let user = null;
       
        var propertiesObject = { username: payload.sub };

        request({url:url, qs:propertiesObject}, function(err, response, body) {
          if(err) { res.send(err); return; }
          user = JSON.parse(body);
        });
    
    // revoke token if user no longer exists
    if (user.userexist=="false") {
        return done(null, true);
    }

    done();
};