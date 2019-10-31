//Gestion de las herramientas de red como de las respuestas

const express = require('express');
const router = express.Router();
const response = require('../../network/response')
const controller = require('./controller')

router.get('/', function(req,res){
    controller.getMessage()
        .then((messageList)=>{
            response.success(req,res, messageList, 200)
        })
        .catch(e=>{
            response.error(req,res,'Unexpected error', 500, e)
        })
})

router.post('/', function(req,res){
    controller.addMessage(req.body.user, req.body.message)
        .then((fullMessage)=>{
            response.success(req, res, fullMessage, 201)
        })
        .catch(e => {
            response.error(req, res, 'Informacion invalida', 400, 'Error en el controlador')
        })

})

router.delete('/', function(req,res){
    console.log(req.query)
    console.log(req.body)
})

module.exports = router;