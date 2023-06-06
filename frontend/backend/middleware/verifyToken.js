const jwt = require('jsonwebtoken');
const User = require('../models/userSchema');

exports.checkIsUserAuthenticated = async(req,res,next)=>{
    let token;
    const {authorization} = req.headers;

    if(authorization && authorization.startsWith("Bearer")){
        try{
            token = authorization.split(" ")[1];
            const {userId} = jwt.verify(token,"hellooooooooooooooooooooooooooooooo");
            req.user = await User.findById(userId).select("--password");
            next();
        }catch(err){
            return res.status(401).json({ message: "unAuthorized User in if" });
        }
    }else{
        return res.status(401).json({ message: "unAuthorized User" });
    }
}
