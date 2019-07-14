module.exports = (sequelize, DataType) => {
  const Project = sequelize.define("project", {
    PROJECT_ID: {
      type: DataType.STRING,
      field:'PROJECT_ID'
    },
    PROJECT_CODE: {
      type: DataType.STRING,
      field: 'PROJECT_CODE'
    },
    PROJECT_NAME: {
      type: DataType.STRING,
      field: 'PROJECT_NAME'
    }
  },{
    timestamps: false,
    freezeTableName:true
  });
  return Project;
};
