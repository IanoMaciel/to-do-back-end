const TaskModel = require('../model/TaskModel');
const { isPast } = require('date-fns');

const TaskValidation = async (req, res, next) => {
    const { 
        macaddress,
        type,
        title,
        description,
        when
    } = req.body;

    if(!macaddress)
        return res.status(400).json({error: 'MacAddress é obrigatório'});
    else if(!type)
        return res.status(400).json({error: 'Tipo é obrigatório'});
    else if(!title)
        return res.status(400).json({error: 'Título é obrigatório'});
    else if(!description)
        return res.status(400).json({error: 'Descrição é obrigatório'});
    else if(!when)
        return res.status(400).json({error: 'Data e hora são campos obrigatórios'});
    else if(isPast(new Date(when)))
        return res.status(400).json({error: 'Escolha uma data e hora futura'});
    else {
        let exists;

        exists = await TaskModel.findOne({
            'when': {'$eq': new Date(when)},
            'macaddress' : {'$in': macaddress}
        });

        if(exists) {
            return res.status(400).json({error: 'Já existe uma tarefa com a mesmo dia e hora'});
        }
        next();
    }
}

module.exports = TaskValidation;