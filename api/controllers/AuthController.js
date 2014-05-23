var passport = require("passport");

module.exports = {
  login: function(req,res){
  	if(!req.isAuthenticated()){
    	res.view("auth/login");
    }else{
    	res.redirect('/');
    }
  },

  process: function(req,res, next){
    passport.authenticate('local', function(err, user, info){
	  	//console.log(user);
      if ((err) || (!user)) {
        res.redirect('/login');
        return;
      }
      req.logIn(user, function(err){
      	//console.log(err);
        if (err){
        	console.log('not correct')
        	//return res.redirect('/login');
        	return next(err);
        }
        return res.redirect('/');
      });
    })(req, res, next);
  },

  logout: function (req,res){
    req.logout();
    res.send('logout successful');
  },
  _config: {}
};