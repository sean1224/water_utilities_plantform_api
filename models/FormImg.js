module.exports = (sequelize, DataType) => {
    const FormImg = sequelize.define("FormImg", {
      projectId: {
        type: DataType.STRING,
        field: 'projectId'
      },
      field1: {
        type: DataType.STRING,
        field: 'field1'
      },
      name1: {
        type: DataType.STRING,
        field: 'name1'
      },
      field2: {
        type: DataType.STRING,
        field: 'field2'
      },
      name2: {
        type: DataType.STRING,
        field: 'name2'
      },field3: {
        type: DataType.STRING,
        field: 'field3'
      },
      name3: {
        type: DataType.STRING,
        field: 'name3'
      },field4: {
        type: DataType.STRING,
        field: 'field4'
      },
      name4: {
        type: DataType.STRING,
        field: 'name4'
      },field5: {
        type: DataType.STRING,
        field: 'field5'
      },
      name5: {
        type: DataType.STRING,
        field: 'name5'
      },field6: {
        type: DataType.STRING,
        field: 'field6'
      },
      name6: {
        type: DataType.STRING,
        field: 'name6'
      },field7: {
        type: DataType.STRING,
        field: 'field7'
      },
      name7: {
        type: DataType.STRING,
        field: 'name7'
      },field8: {
        type: DataType.STRING,
        field: 'field8'
      },
      name8: {
        type: DataType.STRING,
        field: 'name8'
      },field9: {
        type: DataType.STRING,
        field: 'field9'
      },
      name9: {
        type: DataType.STRING,
        field: 'name9'
      },field10: {
        type: DataType.STRING,
        field: 'field10'
      },
      name10: {
        type: DataType.STRING,
        field: 'name10'
      },field11: {
        type: DataType.STRING,
        field: 'field11'
      },
      name11: {
        type: DataType.STRING,
        field: 'name11'
      },field12: {
        type: DataType.STRING,
        field: 'field12'
      },
      name12: {
        type: DataType.STRING,
        field: 'name12'
      },field13: {
        type: DataType.STRING,
        field: 'field13'
      },
      name13: {
        type: DataType.STRING,
        field: 'name13'
      },field14: {
        type: DataType.STRING,
        field: 'field14'
      },
      name14: {
        type: DataType.STRING,
        field: 'name14'
      }
    },{
      timestamps: false,
      freezeTableName:true
    });
    return FormImg;
  };
