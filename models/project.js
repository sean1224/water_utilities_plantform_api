module.exports = (sequelize, DataType) => {
  const Project = sequelize.define("projects", {
    PROJECT_CODE: {
      type: DataType.STRING,
      field: 'PROJECT_CODE'
    },
    PROJECT_NAME: {
      type: DataType.STRING,
      field: 'PROJECT_NAME'
    },
    PROJECT_ADDRESS: {
      type: DataType.STRING,
      field: 'PROJECT_ADDRESS'
    },
    PROJECT_PRINCIPAL: {
      type: DataType.STRING,
      field: 'PROJECT_PRINCIPAL'
    },
    PROJECT_TEL: {
      type: DataType.STRING,
      field: 'PROJECT_TEL'
    }
  },{
    timestamps: false,
    freezeTableName:true
  });
  return Project;
};
