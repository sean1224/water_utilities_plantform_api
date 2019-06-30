module.exports = app => {
  app.get("/", (req, res) => {
    res.json({"data":app.db.res1});
  });
  app.get("/tasks", (req, res) => {
    res.json({"data":app.db.res2});
  });
};
