module.exports = (sequelize, DataType) => {
  const Projects = sequelize.define("project", {
    PROJECTID: {
      type: DataType.STRING,
      field:'PROJECT_ID',
      allowNull: false
    },
    PROJECTCODE: {
      type: DataType.STRING,
      field: 'PROJECT_CODE',
      allowNull: false
    },
    PROJECTNAME: {
      type: DataType.STRING,
      field: 'PROJECT_NAME',
      allowNull: false
    }
  });
  return Projects;
};
