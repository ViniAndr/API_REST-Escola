import { Sequelize } from "sequelize";
import dbConfig from "../config/database";

//Models
import Aluno from "../models/Aluno";
import User from "../models/User";

// Inicializando a Conexão com o Banco de Dados
const sequelize = new Sequelize(dbConfig);

const models = [Aluno, User];

models.forEach((model) => model.init(sequelize));
