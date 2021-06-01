const {Tarea} = require('../models/index');

module.exports = {
    async index(req, res){
        let tareas = await Tarea.findAll();

        res.json(tareas);
    }

}