const Todo = require('../models/Todo');

class TodoRepository {
    constructor(model) {
        this.model = model;
    }
    create(kegiatan) {
        const newTodo = {
            kegiatan,
            status: false
        };
        const todo = new this.model(newTodo);
        return todo.save();
    }
    findAll() {
        return this.model.find();
    }
    findById(id) {
        return this.model.findById(id);
    }
    deleteById(id) {
        return this.model.findByIdAndDelete(id);
    }
    updateById(id, object) {
        const query = { _id: id };
        return this.model.findOneAndUpdate(query, {
                $set: {
                    status: object.status
                }
            });
    }
}

module.exports = new TodoRepository(Todo);
