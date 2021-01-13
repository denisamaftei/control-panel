
const config = require('./config.json').session;

module.exports={
        path:'/api',
        resave:false,
        saveUninitialized:true,
        cookie:{
            secure:true,
            httpOnly:true,
            maxAge:60*60*24*3
        },
      secret:config.key
}

