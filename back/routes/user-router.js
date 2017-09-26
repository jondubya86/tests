const router = require('express').Router();
const User = require('../models').User;
const Todo = require('../models').Todo;

const userRouter = () => {

	const getAllUsers = (req, res) => {
		User.findAll({
			attributes: {
				exclude: ['password']
			}
		})
	};

	const createUser = (req, res) => {
		const { username, password } = req.body;
		const userData = { username, password };
		console.log(req.body)
		User.create(userData)
		.then((user) => {
			res.send(user);
    	})
    	.catch((err) => {
      		const errors = err.errors;
      		const errorMessages = { errorMessages: translateErrors(errors) };

      		res.status(400).send(errorMessages)
    	});
  	};


  	const getOneUser = (req, res) => {
  		const userId = req.user.id;

  		User.findById(userId, {
        	attributes: {
          		exclude: ['password']
        	},
        	include: [ Todo ]
      	})
      .then((user) => {
        res.send(user);
      });  	
  	};

  	const deleteUser = (req, res) => {
    	const userId = req.user;
    	const username = req.params.username;

    	User.destroy({
      		where: {
        		id: userId.id
      		}
    	})
    	.then((userId) => 
    		console.log(`${username} has been deleted`))
	};

  	router.route('/')
    .get(getAllUsers)
    .post(createUser)

    router.route('/user/:username')
    .get(getOneUser)
    .delete(deleteUser)

    return router;
};

module.exports = userRouter();