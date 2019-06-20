const myMiddlware = (req, res, next)=>{
    console.log('myMiddleware...')
    const {error} = Joi.validate(req.body, schema, {abortEarly:false})
    if(error){
        let msg = '';
        for(let obj of error.details)
            msg += obj.message + '\n'
        return res.status(400).send(msg)
    }
    next();
}

module.exports = myMiddlware;