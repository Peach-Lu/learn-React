const Mock = require("mockjs");
const { Random } = Mock;
const getQuestionList = require("./data/getQuestionList");
module.exports = [
  {
    // 获取单个问卷
    url: "/api/question/:id",
    method: "get",
    response: () => {
      return Mock.mock({
        erron: 0,
        // erron: 1,
        data: {
          id: Random.id(),
          title: Random.ctitle(5, 20),
          content: Random.cparagraph(1, 3),
        },
        // msg:'获取失败'
      });
    },
  },
  {
    // 创建问卷
    url: "/api/question",
    method: "post",
    response: () => {
      return {
        erron: 0,
        data: {
          id: Random.id(),
        },
      };
    },
  },
   {
    // 获取问卷
    url: "/api/question",
    method: "get",
    response: () => {
      return {
        erron: 0,
        data: {
          list:getQuestionList(), // 问卷列表
          total: 100, // 总数
          pageNum:0, // 当前页码
          pageSize:10, // 每页条数
        },
      };
    },
  },
];
