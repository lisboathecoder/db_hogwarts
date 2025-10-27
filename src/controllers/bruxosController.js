// logica

import * as BruxoModel from "./../models/bruxoModel.js";

export const listAll = async (req, res) => {
  try {
    const bruxos = await BruxoModel.findAll();

    if (!bruxos || bruxos.length === 0) {
      res.status(404).json({
        total: 0,
        mensagem: "Não há bruxos na lista",
        bruxos,
      });
    }

    res.status(200).json({
      total: bruxos.length,
      mensagem: `Lista de bruxos`,
      bruxos,
    });
  } catch (error) {
    res.status(500).json({
      error: "Erro interno de servidor",
      details: error.message,
      status: 500,
    });
  }
};

export const listOne = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const bruxo = await BruxoModel.findOne(id);

    if (!bruxo) {
      return res.status(404).json({
        error: "Bruxo não encontrado",
        message: "Verifique o id do bruxo",
        id: id,
      });
    }
    res.status(200).json({
      message: "Bruxo encontrado",
      bruxo,
    });
  } catch (error) {
    res.status(500).json({
      error: "Erro interno de servidor",
      details: error.message,
      status: 500,
    });
  }
};

export const create = async (req, res) => {
  try {
    const { name, casa, patrono, varinha, anoMatricula } = req.body;
    if ((!name || !casa, !varinha, !anoMatricula)) {
      return res.status(400).json({
        erro: "Todos os campos devem ser preenchidos: nome, casa, varinha, anoMatricula",
      });
    }

    const data = { name, casa, patrono, varinha, anoMatricula };

    const camposObrigatorios = ["name", "casa", "varinha", "anoMatricula"];

    const faltando = camposObrigatorios.filter((campo) => !data[campo]);

    if (faltando.length > 0) {
      return res.status(400).json({
        erro: `Os seguintes campos são obrigatórios: ${faltando.join(", ")}.`,
      });
    }
    const casasValidas = ["Grifinória", "Sonserina", "Corvinal", "Lufa-Lufa"];
    if (!casasValidas.includes(casa)) {
      return res.status(400).json({
        erro: "Casa inválida! O Chapéu Seletor só reconhece as 4 casas",
        casasValidas,
      });
    }
    const novoBruxo = await BruxoModel.create(req.body);

    res.status(201).json({
      mensagem: "Bruxo criado com sucesso",
      bruxo: novoBruxo,
    });
  } catch (error) {
    res.status(500).json({
      erro: "Erro ao criar novo bruxo",
      detalhes: error.message,
    });
  }
};

export const deletar = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const bruxoExiste = await BruxoModel.findOne(id);

    if (!bruxoExiste) {
      return res.status(404).json({
        erro: "Bruxo não encontrado nesse id",
        id: id,
      });
    }
    await BruxoModel.deletar(id);
    res.status(200).json({
      mensagem: "Bruxo deletado com sucesso!",
      bruxoRemovido: bruxoExiste,
    });
  } catch (error) {
    res.status(500).json({
      error: "Erro ao apagar o bruxo",
      details: error.message,
    });
  }
};
