module.exports = (sequelize, DataType) => {
  const sensor_list = sequelize.define(
    "water_sensor_list",
    {
      PK_ID: {
        type: DataType.INTEGER,
        field: "PK_ID",
        primaryKey: true
      },
      SENSOR_LIST_DATE: {
        type: DataType.STRING,
        field: "SENSOR_LIST_DATE"
      },
      SCM_NAME: {
        type: DataType.STRING,
        field: "SCM_NAME"
      },
      SENSOR_NAME: {
        type: DataType.STRING,
        field: "SENSOR_NAME"
      },
      SENSOR_VALUE: {
        type: DataType.STRING,
        field: "SENSOR_LIST_VALUE"
      }
    },
    {
      timestamps: false,
      freezeTableName: true
    }
  );
  return sensor_list;
};
