const Mock = require("mockjs");
const { Random } = Mock;
function getQuestionList(opt) {
  const { pageSize = 10, isStar = false, isDelete = false } = opt;
  const list = [];
  for (let i = 0; i < pageSize; i++) {
    list.push({
      _id: Random.id(),
      title: Random.ctitle(5, 20),
      isPublished: Random.boolean(),
      //   isStar: Random.boolean(),
      isStar:isStar ? true : Random.boolean(),
      answerCount: Random.natural(50, 100),
      createAt: Random.date("yyyy-MM-dd"),
      isDelete: isDelete ? true : Random.boolean(),
    });
  }
  return list;
}

module.exports = getQuestionList;
