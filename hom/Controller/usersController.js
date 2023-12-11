const path = require("path");
const fs = require("fs");
const userlist = (req, res) => {
  fs.readFile(path.join(__dirname, "data.json"), "utf-8", (err, data) => {
    if (err) {
      res.end(500);
    } else {
      res.end(data);
    }
  });
};
const userdel = (req, res) => {
  let id = req.url.split("?")[1].split("=")[1];
  let data = JSON.parse(list());
  let idnex = data.data.findIndex((item) => item.id == id);
  console.log(idnex);
  if (idnex == -1) {
    res.statusCode == 200;
    res.end(JSON.stringify({ msg: "未找到数据" }));
  }
  data.data.splice(idnex, 1);
  let dataStr = JSON.stringify(data);
  console.log(dataStr);
  fs.writeFile(path.join(__dirname, "data.json"), dataStr, (err) => {
    if (err) {
      res.statusCode == 404;
      res.end(JSON.stringify({ msg: "删除失败" }));
    }
    res.statusCode == 200;
    res.end(JSON.stringify({ msg: "删除成功" }));
  });
};
const useradd = (req, res) => {
  console.log(req.body);
  let car = req.body;
  console.log(car);
  fs.readFile(
    path.join(__dirname, "data.json"),
    "utf-8",
    function (err, data) {
      if (err) {
        res.statusCode = 500;
        res.end("失败");
      } else {
        let cars = JSON.parse(data);
        console.log(cars);
        cars.data.push(car);
        fs.writeFile(
          path.join(__dirname, "data.json"),
          JSON.stringify(cars),
          "utf-8",
          function (err) {
            if (err) {
              res.statusCode = 500;
              res.end("写入失败");
            } else {
              res.statusCode = 200;
              res.end("添加成功");
            }
          }
        );
      }
    }
  );
};

const userquery = (req, res) => {
  let id = req.url.split("?")[1].split("=")[1];
  console.log(id);
  let data = JSON.parse(list());
  let datali = data.data.find((item) => item.id == id);
  if (!datali) {
    res.statusCode == 200;
    res.end(JSON.stringify({ msg: "未找到数据" }));
    return;
  }
  res.statusCode == 200;
  res.end(JSON.stringify(datali));
  res.json({
    code: 200,
    msg: "查询成功",
  });
};
const usermodify =(req,res)=>{
  let id = req.url.split("?")[1].split("=")[1];
  console.log(id);
  let data = JSON.parse(list());
  
   let datali = data.data.find((item) => item.id == id);
  if (!datali) {
    res.statusCode == 200;
    res.end(JSON.stringify({ msg: "未找到数据" }));
    return;
  }
  res.statusCode == 200;
  res.end(JSON.stringify(datali));
  res.json({
    code: 200,
    msg: "查询成功",
  });
  
}
// const usermodify = (req, res) => {
//   app.put('/cars/:id', (req, res) => {  
//     const carId = parseInt(req.params.id);  
//     const car = cars.find((car) => car.id === carId);  
//     if (!car) {  
//       res.status(404).send('The car with the given ID was not found.');  
//     } else {  
//       car.name = req.body.name;  
//       car.brand = req.body.brand;  
//       // 更新其他属性...  
//       res.send(car);  
//     }  
//   // });  
//   // res.json({
//   //   code: 200,
//   //   msg: "修改成功",
//   // });
// // };

const usersearch = (req, res) => {
  res.json({
    code: 200,
    msg: "搜索成功",
  });
  // let id = ("utf-8", req.url.split("?")[1].split("=")[1]);
  // console.log(id);
  // let data = JSON.parse(list());
  // let datali = data.data.filter((item) => item.id == id);
  // if (!datali) {
  //   res.statusCode == 200;
  //   res.end(JSON.stringify({ msg: "未找到数据" }));
  //   return;
  // }
  // res.statusCode == 200;
  // res.end(JSON.stringify(datali));
  // res.json({
  //   code: 200,
  //   msg: "查询成功",
  // });
};
function list() {
  let data = fs.readFileSync(path.join(__dirname, "data.json"), "utf-8");
  //   console.log(JSON.parse(data).list);
  return data;
}
module.exports = {
  userlist,
  userdel,
  useradd,
  userquery,
  usermodify,
  usersearch,

};
