//importa la conexion a la db
import db from "../database/db.js";
//import sequelize
import { DataTypes } from "sequelize";

const BlogModel = db.define("blogs", {
  nombre: { type: DataTypes.STRING },
  content: { type: DataTypes.STRING },
 


});

export default BlogModel