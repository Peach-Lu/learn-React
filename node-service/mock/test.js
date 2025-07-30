const Mock = require('mockjs');
const Random = Mock.Random;
module.exports = [
    {
        url:'/api/test',
        method:'get',
        response: () => {
            return Mock.mock({
                error: 0,
                data:{
                    name:Random.cname(),
                    age: Random.integer(18, 60),
                    sex:'1'
                }
            });
        }
    }
]