const test = require("./test");
const question = require("./question");

const mocklist = [...test, ...question];
console.log("mocklist", mocklist);
module.exports = mocklist;
