var mssql = require("mssql");
module.exports = app => {
  var connectionPool = new mssql.ConnectionPool(app.libs.config).connect();
  var db ={
    connectionPool,
    models:{}
  };
  connectionPool.then((request) =>{
    request.query("select * from SDE_version").then(result => db.models.res1 = result);
    request.query("select *from SDE_archives").then(result => db.models.res2 = result);
  });
  connectionPool.catch(error => console.log(error));
  return db;
}
