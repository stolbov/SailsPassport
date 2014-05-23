module.exports = function(req, res, next){
  if (req.isAuthenticated()){
  	console.log("Authorized");
    return next();
  }else{
  	console.log("Not Authorized");
    //return res.send(403, { message: 'Not Authorized' });
    return res.redirect('/login');
  }
}