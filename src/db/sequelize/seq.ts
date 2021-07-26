import { Sequelize, Options } from "sequelize";

const conf: Options = {
    host: "localhost",
    dialect: "mysql",
};

const sequelize = new Sequelize("koa2_weibo_db", "root", "", conf);

export default sequelize;
