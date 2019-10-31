const store = require('./store')

function addMessage(user, message){
    return new Promise((resolve, reject) =>{
        if(!user || !message){
            console.error('[messageController] No hay usuario o mensaje')
            reject('Los datos son incorrectos')
            return false;
        }
        console.log(user);
        console.log(message);
        const fullMessage = {
            user,
            message,
            date: new Date(),
        };
        store.add(fullMessage)
        resolve(fullMessage)
    })
    
}

function getMessage(){
    return new Promise((resolve, reject) =>{
        resolve(store.list())
    })
}

module.exports = {
    addMessage,
    getMessage
}