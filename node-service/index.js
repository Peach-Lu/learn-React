const Koa = require("koa");
const Router = require("koa-router");
const mocklist = require("./mock/index");

async function getRes (fn, ctx) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = fn(ctx);
      resolve(res);
    }, 0);
  });
}

const app = new Koa();
const router = new Router();
console.log("mocklist", mocklist);
mocklist.forEach((item) => {
  const { url, method, response } = item;
  router[method](url, async (ctx) => {
    const res = await getRes(response, ctx);
    ctx.body = res;
    ctx.status = 200;
  });
});
console.log("router", router);
app.use(router.routes());
app.listen(3000);
