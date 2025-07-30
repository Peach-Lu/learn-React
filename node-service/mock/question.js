const Mock = require("mockjs");
const { Random } = Mock;
module.exports = [
  {
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
];
