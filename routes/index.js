module.exports = app => {
  const models = app.db.models;
  app.route("/projects")
    .get((req, res) => {
      models.project.findAll()
        .then(result => res.json(result))
        .catch(error => res.status(412).json({msg: error.message}))
    })
  app.route('/sensor_list')
    .get((req,res) => {
      models.water_sensor_list.findOne()
        .then(result => res.json(result))
        .catch(error => res.status(412).json({msg:error.message}))
    })
};
