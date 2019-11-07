module.exports = (sequelize, DataType) => {
  const Project = sequelize.define("Project", {
    projectCode: {
      type: DataType.STRING,
      field: 'projectCode'
    },
    projectName: {
      type: DataType.STRING,
      field: 'projectName'
    },
    projectAddress: {
      type: DataType.STRING,
      field: 'projectAddress'
    },
    principal: {
      type: DataType.STRING,
      field: 'principal'
    },
    tel: {
      type: DataType.INTEGER,
      field: 'tel'
    },
    status: {
      type: DataType.INTEGER,
      field: 'status'
    }
  },{
    timestamps: false,
    freezeTableName:true
  });
  return Project;
};
