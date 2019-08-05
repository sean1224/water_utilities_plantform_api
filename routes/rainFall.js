module.exports = app => {
    const models = app.db.models;
    const sequelize = app.db.sequelize;
    /**
     * 利用暴雨强度公式生成对应雨量图数据
     */
    app.route('/rainFall')
      .get((req,res) => {
        try{
          let r = parseFloat(req.query.r); //降雨峰值（0.3 ~0.5）
          let P = parseFloat(req.query.P); //重现期
          let T = parseInt(req.query.t); //降雨历时
          let A1 = parseFloat(req.query.A1);
          let c = parseFloat(req.query.c);
          let b = parseFloat(req.query.b);
          let n = parseFloat(req.query.n);
          console.log(req.query)
          let arr1 = []; // 高峰之后结果数组
          let arr2 = []; // 高峰之前结果数组
          // 计算高峰之后降雨强度
          for(let t = 0;t< T*(1-r);t+=5){
            let a = A1*(1+c*Math.log10(P));// 参数
            let t0 = (T*r)-(T*r%5); //峰值时间
            let value = a*(t*(1-n)/(1-r)+b)/Math.pow((t/(1-r)+b),(1+0.656));
            arr1.push({time:t0+t,value:value.toFixed(3)});
          }
          // 计算高峰之前降雨强度
          for(let t = 5;t< T*r;t+=5){
            let a = A1*(1+c*Math.log10(P));
            let t0 = (T*r)-(T*r%5); // 峰值时间
            let value = a*(t*(1-n)/r+b)/Math.pow((t/r+b),(1+0.656));
            arr2.push({time:t0-t,value:value.toFixed(3)});
          }
          // 整合降雨强度1
          // let arrStrength = arr2.reverse().concat(arr1);

          // 整合降雨深度2
          let arr =  arr2.reverse().concat(arr1);
          console.log(arr1,arr2)
          res.json({results:arr});
        }
        catch(error){
          res.status(412).json({msg:error.message})
        }
      })
};
