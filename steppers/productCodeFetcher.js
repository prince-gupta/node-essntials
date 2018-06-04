var getProductCode = {};
getProductCode.run = run;
function run(req, res, next) {
    if(res.locals.users.length == 0){
        res.sendCode(500);
    }
    else{
    console.log(JSON.stringify(res.locals.users));
       // next()
    }
   
}

module.exports = getProductCode;