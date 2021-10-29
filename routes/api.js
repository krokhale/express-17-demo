var express = require('express');
var router = express.Router();
const {User} = require('../lib/models')


// REST API - Create your own API with a database

// Users
// Add a user - POST /users
router.post('/users', async function(req, res, next) {
    // talk to the db and get a list of all the users
    let newUser = await User.create(req.body)
    console.log('req.body is', req.body)
    res.json(newUser)
});
// Get all users - GET /users
// http://localhost:3000/api/users
router.get('/users', async function(req, res, next) {
    // talk to the db and get a list of all the users
    let allUsers = await User.findAll()
    res.json(allUsers)
});
// Get one user - GET /users/<id of the user>
router.get('/users/:id', async function(req, res, next) {
    // talk to the db and get a list of all the users
    let oneUser = await User.findOne({where: {id: req.params.id}})
    res.json(oneUser)
});
// Update a user - PUT /users/1
router.put('/users/:id', async function(req, res, next) {
    // talk to the db and get a list of all the users
    let oneUser = await User.update(req.body, {
        where: {
            id: req.params.id
        }
    });
    res.json(oneUser)
});
// Delete a user - DELETE /users/1
router.delete('/users/:id', async function(req, res, next) {
    console.log('req.params are', req.params)
    await User.destroy({
        where: {
            id: req.params.id
        }
    });
    // talk to the db and get a list of all the users
    // let newUser = await User.create(req.body)
    // console.log('req.body is', req.body)
    res.json({})
});








/******************************************************************************************************************************************/

/* GET home page. */
// '/api' + '/' = '/api'
router.get('/', function(req, res, next) {
    res.send('Response from the api router')
});


// '/api' + '/something' = '/api/something'
// RESTful routes
router.get('/something', function(req, res, next) {
    res.send('Response from the api router - something')
});

// router.get('/profile/john', function(req, res, next) {
//     res.json({firstName: 'John', lastName: 'Doe', email: 'john@doe.com'})
// });
//
// router.get('/profile/jane', function(req, res, next) {
//     res.json({firstName: 'Jane', lastName: 'Doe', email: 'jane@doe.com'})
// });

router.get('/profile/:name', function(req, res, next) {
    // console.log('the request object is', req)
    console.log('the request params are', req.params)
    console.log('the request query params are', req.query)
    // rather than send back the response right away, i simulate a wait time
    res.json({firstName: 'Jane', lastName: 'Doe', email: 'jane@doe.com'})
});


// Get me all the todos in the system
// GET http://localhost:3000/todo
router.get('/todo', function(req, res, next) {
    // at this point you will make a call to the database and look up all the todos in the system
    // finally when database gives you the results move to next step
    res.send('send back json todos')
});

// params
// query params

// POST, PUT, DELETE - talk about this during the database session
// How to connect your backend server API to the react application

module.exports = router;
