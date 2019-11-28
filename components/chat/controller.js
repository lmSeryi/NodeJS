const store = require('./store')

function addChat(users){
    console.log(users)
    if(!users || !Array.isArray(users)){
        return Promise.reject('Invalid user list')
    }
    const chat = {
        users,
    }
    return store.addChat(chat);
}

function getChat(userId){
    return store.getChat(userId)
}

module.exports = {
    addChat,
    getChat
}