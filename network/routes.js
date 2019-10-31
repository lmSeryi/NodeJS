//Aplicacion express, todas las llamadas hacia message las gestione message

const express = require('express');
const message = require('../components/message/network')

const routes = function(server){
    server.use('/message', message)
}

module.exports = routes