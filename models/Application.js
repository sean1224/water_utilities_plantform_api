module.exports = (sequelize, DataType) => {
  const Application = sequelize.define("Application", {
    appliContent: {
      type: DataType.STRING,
      field: 'appliContent'
    },
    applicant: {
      type: DataType.STRING,
      field: 'applicant'
    },
    tel: {
      type: DataType.INTEGER,
      field: 'tel'
    },
    note : {
      type: DataType.STRING,
      field: 'note'
    },
    status: {
      type: DataType.INTEGER,
      field: 'status'
    }
  },{
    timestamps: false,
    freezeTableName:true
  });
  return Application;
};
