/* mysql2 链接测试 */

import mysql from "mysql2/promise";
import { mysqlConf } from "../config/index";

async function testMysqlConnection() {
    const connection = await mysql.createConnection(mysqlConf);
    const [rows] = await connection.execute("select now()");
    return rows;
}

(async () => {
    const rows = await testMysqlConnection();
    console.log(rows); // [ BinaryRow { 'now()': 2021-07-25T07:50:44.000Z } ]
})();

export default testMysqlConnection;
