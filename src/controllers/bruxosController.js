// logica

import * as BruxoModel from './../models/bruxoModel.js'

export const listAll = async (req, res) => {
    try {
        const bruxos = await BruxoModel.findAll()

        if(!bruxos || bruxos.length === 0){
            res.status(404).json({
                total: 0,
                mensagem: 'Não há bruxos na lista',
                bruxos
            });
        };

        res.status(200).json({
            total: bruxos.length,
            mensagem: `Lista de bruxos`,
            bruxos
        });
    } catch (error) {
        res.status(500).json({
            error: 'Erro interno de servidor',
            details: error.message,
            status: 500
        });
    };
};

export const listOne = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const bruxo = await BruxoModel.findOne(id);

        if(!bruxo){
            return res.status(404).json({
                error: 'Bruxo não encontrado',
                message: 'Verifique o id do bruxo',
                id: id
            });
        };
        res.status(200).json({
            message: 'Bruxo encontrado',
            bruxo
        });
    } catch (error) {
        res.status(500).json({
            error: 'Erro interno de servidor',
            details: error.message,
            status: 500
        });
    }
} ;