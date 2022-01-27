const jwt = require('jsonwebtoken');


const usuarioFind = (req, res)=>{
res.json({message:"hola soy el usuario"})
// console.log('hola soy el usuario')
}


const saludos= (req, res)=>{
    res.json({
        text: 'estoy aqui'
    })
}

const login =(req, res)=>{
    const user = {id:3};
    const token = jwt.sign({user}, 'my_secret_key');
    res.json({token})
}


const userProtected=(req, res)=>{
    jwt.verify(req.token, 'my_secret_key', (err, data)=>{
        if (err) {
            res.sendStatus(403)
        }else{
            res.json({text:'protegido',data})
        }
    })
}

function auth(req, res, next){
    const token = req.headers['authorization'];
    console.log(token);
    if(typeof token !== 'undefined'){
        const bearer = token.split(" ");
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    }else{
        res.sendStatus(403);
    }
}

module.exports ={ usuarioFind, saludos, login, userProtected, auth }