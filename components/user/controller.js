const store = require('./store')

function addUser(name){
    if(!name){
        return Promise.reject('Invalid name')
    }
    
    const user = {
        name,
    }
    return store.addUser(user);
}

function getUser(filterName){
    return new Promise((resolve, reject) =>{
        resolve(store.getUser(filterName))
    })
}

module.exports = {
    addUser,
    getUser
}