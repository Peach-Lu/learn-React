const test = require("./test");
const question = require("./question");
const user = require('./user')
const mocklist = [...test, ...question, ...user];
console.log("mocklist", mocklist);
module.exports = mocklist;
