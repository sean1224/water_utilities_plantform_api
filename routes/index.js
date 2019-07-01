module.exports = app => {
  app.get("/", (req, res) => {
    res.json({"a":app.db.models.res1.recordset});
  });
  app.get("/tasks", (req, res) => {
    res.json({"a":app.db.models.res2.recordset});
  });
};
