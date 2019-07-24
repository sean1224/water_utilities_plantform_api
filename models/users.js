module.exports = (sequelize, DataType) => {
  const users = sequelize.define("k_user", {
    username: {
      type: DataType.STRING,
      field: 'username'
    },
    password: {
      type: DataType.STRING,
      field: 'password'
    },
    pk_id:{
      type: DataType.INTEGER,
      field: 'pk_id'
    }
  },{
    timestamps: false,
    freezeTableName:true
  });
  return users;
};
