const Mock = require("mockjs");
const { Random } = Mock;
function getQuestionList(len= 10,isDelete = false) {
  const list = [];
  for (let i = 0; i < len; i++) {
    list.push({
      _id: Random.id(),
      title: Random.ctitle(5, 20),
      isPublished: Random.boolean(),
      isStar: Random.boolean(),
      answerCount: Random.natural(50, 100),
      createAt: Random.date("yyyy-MM-dd"),
      isDelete
    });
  }
  return list;
}

module.exports = getQuestionList 