const { Router } =require('express')
const router = Router();

//controller
const { usuarioFind, saludos, login, userProtected, auth }= require('../controllers/usuario.controller')

// Routes

router.get('/', usuarioFind);
router.get('/saludos', saludos);
router.post('/login', login)
router.get('/protected',auth, userProtected)
module.exports= router