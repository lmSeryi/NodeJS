const Model = require('./model')

function addUser(user){
    const myUser = new Model(user)
    return myUser.save()
}

async function getUser(filterUser){
    let filter = {}
    if(filterUser!==null)
        filter = { name: filterUser}
    const users = await Model.find(filter)
    return users
}


module.exports = {
    addUser,
    getUser
}