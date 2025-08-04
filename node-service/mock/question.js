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

    response: (ctx) => {
        console.log("res", ctx.originalUrl);
       const isStar  =  ctx.originalUrl.includes("isStar=true");
       const isDelete  =  ctx.originalUrl.includes("isDelete=true");
       const {query={}} = ctx;
       console.log('query',query);
       const page = parseInt(query.page) || 1;
       const pageSize = parseInt(query.pageSize) || 10;
       const opt = {
        page,
        isStar: isStar ? true : false,
        isDelete: isDelete ? true : false,
        pageSize
       }
        // console.log("res", res);
      return {
        erron: 0,
        data: {
          list:getQuestionList(opt), // 问卷列表
          total:100, // 总数
          page, // 当前页码
          pageSize, // 每页条数
        },
      };
    },
  },
];
