var formidable = require('formidable')
var fs = require('fs')


module.exports = app => {
    const models = app.db.models;
    app.route("/formimg/:id")
      .all((req,res,next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
        res.header("X-Powered-By",' 3.2.1')
        res.header("Content-Type", "application/json;charset=utf-8");
        next();
      })
      .post((req, res) => {
        // 调用formidale格式化请求的文件
        var form = new formidable.IncomingForm();
        form.parse(req, function(err, fields, files) {
          console.log(files)
          if (err) return res.json({status: 'error'});
          // 此处__dirname为项目根目录，创建保存文件目录
          var dataDir = __dirname + '/../data';
          var vacationPhotoDir = dataDir + '/img';
          // 如果没有对应的文件路径则，新建路径
          fs.existsSync(dataDir) || fs.mkdirSync(dataDir);
          fs.existsSync(vacationPhotoDir) || fs.mkdirSync(vacationPhotoDir);

          /**
           * [path description]
           *   pic-xdm,//下垫面
               pic-sxqk,//竖向情况
               pic-sjlct,//设计流程图
               pic-swzl,//生物滞留设施
               pic-tspz,//透水铺装
               pic-sttcw,//生态停车位
               pic-zcg,//植草沟
               pic-gdwht,//高低位花坛
               pic-ysxsc//雨水蓄水池
           */
          var pics = ["pic-xdm","pic-sxqk","pic-sjlct","pic-swzl","pic-tspz","pic-sttcw","pic-zcg","pic-gdwht","pic-ysxsc"];

          try{
            pics.forEach((value,index) => {
              if(files[value] != ""){
                var path = vacationPhotoDir + '/' + files[value].name;
                // 初始化文件的读入流和文件的输出流
                let readStream = fs.createReadStream(files[value].path);
                let writeStream = fs.createWriteStream(path);
                readStream.pipe(writeStream);
                // 监视文件状态，end为结束状态
                readStream.on('end', () => {
                  console.log('readStream end...');
                });
              }
            })
            res.json({
              status: 'success'
            });
          }
          catch(error){
            res.json({
              status: 'error',
              msg: error.message
            })
          }
        });
      })
      // .put((req,res) => {
      //    models.FormImg.update(req.body,{where: req.params})
      //      .then(result => res.sendStatus(204))
      //      .catch(error => res.status(412).json({msg:error.message}))
      // })
      // .delete((req,res) => {
      //   models.FormImg.destroy({where:req.params})
      //     .then(result => res.sendStatus(204))
      //     .catch(error => res.status(412).json({msg:error.message}))
      // })
  };
