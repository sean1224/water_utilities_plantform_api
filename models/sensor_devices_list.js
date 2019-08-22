module.exports = (sequelize, DataType) => {
    const tensor_devices_list = sequelize.define("tensor_devices_list", {
      // ID: {
      //   type: DataType.INTEGER,
      //   field: 'ID'
      // },
      NAME: {
        type: DataType.STRING,
        field: 'NAME'
      },
      X: {
        type: DataType.STRING,
        field: 'X'
      },
      Y: {
        type: DataType.STRING,
        field: 'Y'
      },
      PROJECT: {
        type: DataType.STRING,
        field: 'PROJECT'
      }
    },{
      timestamps: false,
      freezeTableName:true
    });
    return tensor_devices_list;
  };
  