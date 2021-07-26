import { ConnectionOptions } from "mysql2";
const mysqlConf: ConnectionOptions = {
    // mysql 链接配置
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "platform",
};
export default mysqlConf;
