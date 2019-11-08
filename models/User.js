module.exports = (sequelize, DataType) => {
  const User = sequelize.define("User", {
    userName: {
      type: DataType.STRING,
      field: 'userName'
    },
    userPassword: {
      type: DataType.STRING,
      field: 'userPassword'
    }
  },{
    timestamps: false,
    freezeTableName:true
  });
  return User;
};
