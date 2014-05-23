var passport = require("passport");

module.exports = {
  index: function(req,res){
    	res.view('home/index');
  },

  _config: {}
};