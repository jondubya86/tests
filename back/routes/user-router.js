const router = require('express').Router();
const User = require('../models').User;
const Todo = require('../models').Todo;
// const translateErrors = require('../utilities/error-translator');

const userRouter = () => {

	const getAllUsers = (req, res) => {
		User.findAll({
			attributes: {
				exclude: ['password']
			}
		}).then((user) => {
      res.send(user)
    })
	};

	const createUser = (req, res) => {
    console.log('LOOK JUNG', req.body)
		const { username, password } = req.body;
		const userData = req.body
		User.create(userData)
		.then((user) => {
			res.send(user);
    	})
    	.catch((err) => {
      		res.status(400).send(err)
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