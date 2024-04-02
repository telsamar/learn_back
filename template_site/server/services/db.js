const dotenv = require('dotenv');
const pgp = require('pg-promise')();
const path = require('path')

dotenv.config({ path: path.resolve(__dirname, './.env') });

//Settings of connection to database
const connection = ({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,              
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
});

//Connection
// const db = pgp(connection);

const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    timezone: 'UTC',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
};



const getMessagesForId = async (id) => {
    const textSQL = 'SELECT SP_GET_MESSAGE_FOR_ID('+id+');'
    let ret = null;
    await database.any(textSQL)
    .then(async function (data) {
        ret = data
    })
    return ret
}


//-------------------------Common request to db-------------------------------
const dbCommon= async (name_function, params = null) => {
    let sqlT = `SELECT ${name_function}(${params?params.join(','):''});`;

    console.log(sqlT)
    let ret = null;
    await database.any(sqlT)
    .then(async function (data) {
        if (typeof data.error == 'undefined') {
            ret = [...data.map( d => d[name_function.toLowerCase()])]
        }
        else {
            console.log(`     Get ${name_function} was FAILED.`);
        }
    })
    .catch(async function (err) {
        console.log(`     Error with get ${name_function}:`);
        console.log('    '+err.message);
    });
    return ret ;
}
//------------------------/Common request to db-------------------------------

//***************************/Functions: different functons******************************



const database = pgp(connection);

const db = {
    //---------------Connecttion--------------------
    get() {
        return database;
    },

    connect() {
        database.connect()
        .then(function (obj) {
            console.log('+ Successful connected to database');
            console.log('**********************************************************')
            const dateC = new Date().toLocaleString("ru", options);
            console.log(dateC)
            obj.done();
        })
        .catch(function (error) {
            console.log('- Could not connect to database:');
            console.log('    '+error.message);
            db.reconnect();
        });
    },

    close() {
        if (database) {
            database.end();
            console.log('- Connect to database successful closed ');
            db.reconnect();
        };
    },

    reconnect() {
        setTimeout( () => {
            console.log('...Try reconnect to database...');
            db.connect();
        }, 5000)
    },
    //--------------/Connecttion--------------------
    

    //-------------Get data from db-----------------
    getAgents: async () => {
        return await dbCommon('SP_GET_AGENTS');
    },

   
    //------------/Get data from db-----------------
    
    
    //-----------Insert data from db----------------

    insertIP: async (id_ip, ip_begin, ip_end, ip_name) => {
        return await dbCommon('SP_INSERT_IP', [id_ip, "'"+ip_begin+"'", "'"+ip_end+"'", "'"+ip_name+"'"]);
    },
    //----------/Insert data from db----------------


    //-----------Update data from db----------------
    updateAgent: async (id_agent, id_aius, name_agent, short_name_agent, path_dir_to, path_dir_from) => {
        return await dbCommon('SP_UPDATE_AGENT', [+id_agent, "'"+id_aius+"'", "'"+name_agent+"'", "'"+short_name_agent+"'", "'"+path_dir_to+"'", "'"+path_dir_from+"'"]);
    },

   
    //----------/Update data from db----------------



    //-----------Delete data from db----------------
    deleteContact: async (id_contact) => {
        return await dbCommon('SP_DELETE_CONTACT', [id_contact]);
    },

    //----------/Delete data from db----------------
  
    

}


exports.db = db




