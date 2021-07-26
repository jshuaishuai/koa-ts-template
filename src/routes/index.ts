// const router = require("koa-router")();
import Router, { RouterContext } from "koa-router";
import envConfig from "../utils/env";
const packageInfo = require("../../package.json");
import testMysqlConnection from "../db/mysql2";

const router = new Router();

// 测试数据库是否连接
router.get("/api/db-check", async (ctx: RouterContext) => {
    const mysqlRes = await testMysqlConnection();

    ctx.body = {
        errno: 0,
        data: {
            name: "koa server",
            version: packageInfo.version,
            ENV: envConfig.ENV,
            mysqlConn: mysqlRes,
        },
    };
});
export default router;
