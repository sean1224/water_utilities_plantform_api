const bodyParser = require('body-parser');
const cors = require("cors");
module.exports = app => {
	app.set("port", 3000);
	app.set("json spaces", 4);
	app.use(cors());
	// 添加json解析
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended: false}));
};
