//Gestion de las herramientas de red como de las respuestas

const express = require('express');
const router = express.Router();
const response = require('../../network/response')
const controller = require('./controller')

router.get('/', function(req,res){
    const filterName = req.query.name || null
    controller.getUser(filterName)
        .then((usersList)=>{
            response.success(req,res, usersList, 200)
        })
        .catch(e=>{
            response.error(req,res,'Unexpected error', 500, e)
        })
})

router.post('/', function(req, res){
    controller.addUser(req.body.name)
        .then( data => {
            console.log(data)
            response.success(req, res, data, 201);
        })
        .catch(err => {
            response.error(req, res, 'Internal Error', 500, err);
        })
});

router.patch('/:id', function(req, res){
    controller.updateMessage(req.params.id, req.body.message)
        .then((data) =>{
            response.success(req,res,data,200)
        })
        .catch(e=>{
            response.error(req,res,'Error interno', 500, e)
        })
})

router.delete('/:id', function(req,res){
    controller.deleteMessage(req.params.id)
        .then(()=>{
            response.success(req, res, `Usuario ${req.params.id} eliminado`, 200)
        })
        .catch(e =>{
            response.error(req,res, 'Error interno', 500)
        })
})

module.exports = router;