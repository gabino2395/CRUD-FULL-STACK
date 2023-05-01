import { Sequelize } from "sequelize";
const db = new Sequelize("Blog_data_base", "postgres", "lebron23JAMES", {
  // const db = new Sequelize("Prueba_1", "postgres", "lebron23JAMES", {

  host: "localhost",
  dialect: "postgres",
});
export default db;
