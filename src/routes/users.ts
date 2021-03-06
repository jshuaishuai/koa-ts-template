import Router, { RouterContext } from "koa-router";

const router = new Router();

router.prefix("/users");

router.get("/", function (ctx: RouterContext, _next) {
    ctx.body = "this is a users response!";
});

router.get("/bar", function (ctx: RouterContext, _next) {
    ctx.body = "this is a users/bar response";
});

export default router;
