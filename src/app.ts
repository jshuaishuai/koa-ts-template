import Koa from "koa";
import logger from "koa-logger";
import json from "koa-json";
import bodyparser from "koa-bodyparser";
import index from "./routes/index";
import users from "./routes/users";
const views = require("koa-views");
const onerror = require("koa-onerror");

const app = new Koa();

// error handler
onerror(app);

// middlewares
app.use(
    bodyparser({
        enableTypes: ["json", "form", "text"],
    })
);
app.use(json());
app.use(logger());
app.use(require("koa-static")(__dirname + "/public"));

app.use(
    views(__dirname + "/views", {
        extension: "pug",
    })
);

// routes
app.use(index.routes());
app.use(users.routes());

// error-handling
app.on("error", (err, ctx) => {
    console.error("server error", err, ctx);
});

export default app;
