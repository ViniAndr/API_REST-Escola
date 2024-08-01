import { Sequelize } from "sequelize";
import dbConfig from "../config/database";

//Models
import Aluno from "../models/Aluno";

// Inicializando a Conexão com o Banco de Dados
const sequelize = new Sequelize(dbConfig);

const models = [Aluno];

models.forEach((model) => model.init(sequelize));
