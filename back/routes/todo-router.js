const router = require('express').Router();
const User = require('../models').User;
const Todo = require('../models').Todo;

//create task
//delete task
//active/deactive
//schedule *later


const todoRouter = () => {

	const createTask = (req, res) => {
		const { task, active, schedule } = req.body
		const taskData = { task, active, schedule }

		Todo.create(taskData)
		.then((task) => {
			res.send(task);
		})
		.catch((err) => {
			res.status(400).send(err)
		});
	};

	const getAllTasks = (req, res) => {
	  Todo.findAll({
        attributes: {
		  include: [
		    {
          	  model: User,
          	  attributes: {
                exclude: ['password']
          	  }
        	}
      	  ]
		}
	  })
	};

	router.route('/')
    .get(getAllTasks)
    .post(createTask);

    // router.route('/user/:username')
    // .get(getOneUser)
    // .delete(deleteUser);

    return router;
};

module.exports  = todoRouter();