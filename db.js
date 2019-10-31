const db = require('mongoose')

db.Promise = global.Promise
//mongodb+srv://Seryi:ws1rv7TKiiUiAYun@platzi-ouadv.mongodb.net
async function connect(url){
    await db.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    console.log('[db] conectada con exito')
}

module.exports = connect

