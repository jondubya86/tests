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

		Task.create(taskData)
		.then((task) => {
			res.send(task);
		})
		.catch((err) => {
			const errors = err.errors;
			const errorMessage = { errorMessages: translateError(errors) };

			res.status(400).send(errorMessages)
		});
	};

	const getAllTasks = (req, res) => {
		Task.findAll({
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