let connect = function(){
  if (global.connection){
  return global.connection.connect();
  }

  const {Pool} = require("pg");
  const pool = new Pool({
    connectionString: "postgres://tfycxkkw:5BgxRiad-6S6RfdJsW--wH_r6N97UP54@kesavan.db.elephantsql.com/tfycxkkw"
  });

  global.connection = pool
  return pool.connect();
}

module.exports = { connect}