module.exports = (sequelize, DataType) => {
    const imgService = sequelize.define("ImgService", {
      projectCode: {
        type: DataType.STRING,
        field: 'projectCode'
      },
      projectName: {
        type: DataType.STRING,
        field: 'projectName'
      },
      name: {
        type: DataType.STRING,
        field: 'name'
      },
      fileAddr: {
        type: DataType.STRING,
        field: 'fileAddr'
      },
      urlAddr: {
        type: DataType.STRING,
        field: 'urlAddr'
      },
      status: {
        type: DataType.STRING,
        field: 'status'
      },
      operator: {
        type: DataType.STRING,
        field: 'operator'
      },
      date: {
        type: DataType.STRING,
        field: 'date'
      }
    },{
      timestamps: false,
      freezeTableName:true
    });
    return imgService;
  };
