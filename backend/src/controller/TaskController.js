const TaskModel = require('../model/TaskModel');

class TaskController {
    async create(req, res) {
        const task = new TaskModel(req.body);
        await task.save().then(response => {
            return res.status(200).json(response)
        }).catch(error => {
            return res.status(500).json(error)
        });
    }

    async update(req, res) {    
        await TaskModel.findByIdAndUpdate(
            { '_id': req.params.id },
            req.body,
            { new: true }
        ).then(response => {
            return res.status(200).json(response);
        }).catch(error => {
            return res.status(500).json(error);
        });
    }

    async listAll(req, res) {
        await TaskModel.find({
            macaddress: {'$in': req.body.macaddress}
        })
        .sort('when')
        .then(response => {
            return res.status(200).json(response);
        }).catch(error => {
            return res.status(500).json(error);                
        });
    }

    async show(req, res) { // buscar apenas uma tarefa
        await TaskModel.findById(req.params.id)
        .then(response => {
            if(response)
                return res.status(200).json(response);
            else return res.status(404).json({error: 'Tarefa não encontrada'});

        }).catch(error => {
            return res.status(500).json(error);                
        });
    }

    async delete(req, res) {
        await TaskModel.deleteOne({"_id": req.params.id})
        .then(response => {
            return res.status(200).json(response);

        }).catch(error => {
            return res.status(500).json(error);                
        });
    }
}

module.exports = new TaskController();