module.exports = app => {
    const sequelize = app.db.sequelize;
    app.route('/sensor_list')
      .get((req,res) => {
        const cmembarcode = req.query.cmembarcode;
        const sensorname = req.query.sensorname;
        const begintime = req.query.begintime;
        const endtime = req.query.endtime;
        const data = sequelize.query(
          `SELECT x.SCM_NAME , CONVERT(VARCHAR(10), x.time, 120) SCM_TIME, cast(isnull(SENSOR_VALUE, '0') as numeric(10,2)) AS SENSOR_VALUE
          FROM (
          	SELECT DISTINCT scm_name,time
          	FROM (
          		SELECT SENSOR_NAME, AVG(sensor_list_value) AS SENSOR_VALUE, SCM_NAME
          			, CONVERT(VARCHAR(10), SENSOR_LIST_DATE, 120) AS SCM_TIMEx
          		FROM water_sensor_list
          		WHERE CMEMBER_CODE = :cmembarcode
          			AND sensor_name = :sensorname
          			AND SENSOR_LIST_DATE BETWEEN :begintime AND :endtime
          		GROUP BY SCM_NAME, SENSOR_NAME, CONVERT(VARCHAR(10), SENSOR_LIST_DATE, 120)
          	) a
          		LEFT JOIN (
          			SELECT time
          			FROM timelist
          			WHERE time BETWEEN :begintime AND :endtime
          		) b
          		ON 1 = 1
          ) x
          	LEFT JOIN (
          		SELECT SENSOR_NAME, AVG(sensor_list_value) AS SENSOR_VALUE, SCM_NAME
          			, CONVERT(VARCHAR(10), SENSOR_LIST_DATE, 120) AS SCM_TIME
          		FROM water_sensor_list
          		WHERE CMEMBER_CODE = :cmembarcode
          			AND sensor_name = :sensorname
          			AND SENSOR_LIST_DATE BETWEEN :begintime AND :endtime
          		GROUP BY SCM_NAME, SENSOR_NAME, CONVERT(VARCHAR(10), SENSOR_LIST_DATE, 120)
          	) y
          	ON x.time = y.SCM_TIME
          		AND x.SCM_NAME = y.SCM_NAME
          WHERE 1 = 1
          ORDER BY time asc`,
          {replacements:
              { cmembarcode: cmembarcode,
                              sensorname: sensorname,
                              begintime: begintime,
                              endtime: endtime
              },
              type: sequelize.QueryTypes.SELECT
          }).then(result => res.json(result))
          .catch(error => res.status(412).json({msg:error.message}))
      })
};
