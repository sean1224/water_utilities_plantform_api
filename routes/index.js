module.exports = app => {
  const models = app.db.models;
  app.route("/projects")
    .get((req, res) => {
      models.Projects.findAll({})
        .then(result => res.json(result))
        .catch(error => res.status(412).json({msg: error.message}))
    })
};
