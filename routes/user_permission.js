module.exports = app => {
    const models = app.db.models;
    const sequelize = app.db.sequelize;
    app.route('/getPemissionModule')
      .get((req,res) => {
        const username = req.query.username;
        const data = sequelize.query(
             `SELECT k_module.modulename
              FROM k_user,k_role ,k_module,
              k_user_role,k_role_module
              WHERE k_user_role.userid = k_user.id
                  AND k_user_role.roleid = k_role.id
                  AND k_role_module.roleid = k_role.id
                  AND k_role_module.moduleid = k_module.id
              AND k_user.username = :username`,
          {replacements:
              {
                username: username,
              },
              type: sequelize.QueryTypes.SELECT
          }).then(result => res.json(result))
          .catch(error => res.status(412).json({msg:error.message}))
      })
};
