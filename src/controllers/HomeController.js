import Aluno from "../models/Aluno";

class homeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: "Vinicius",
      sobrenome: "Andrade",
      email: "teste@teste.com",
      idade: 22,
      peso: 80,
      altura: 1.8,
    });

    res.json(novoAluno);
  }
}

export default new homeController();
