var express = require("express");
var router = express.Router();
const user = require("../Controller/usersController");
/* GET home page. */
// 获取列表
router.get("/car", user.userlist);
// 删除列表
router.get("/delcar", user.userdel);
// // 添加列表
router.post("/addcar", user.useradd);
// //查询列表
router.get("/querycar", user.userquery);
// //修改列表
router.get("/modifycar", user.usermodify);
//搜索
router.get("/searchcar", user.usersearch);
module.exports = router;
