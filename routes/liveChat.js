const express = require('express')
const session = require('express-session')
const router = express.Router()

const users = ['admin'] // Dummy array for users

router.get('/', (req, res, next) => {
    res.render('pages/pr12-login', {
        title: 'Prove Activity 12',
        path: '/proveActivities/12'
    })
})

// Verify login submission to access chat room.
router.post('/login', (req, res, next) => {
    /***********************************
     *         YOUR CODE HERE          *
     ***********************************/
    const data = {}
    const username = req.body.username

    if (users.includes(username)) {
        data.error = 'Username already exists.'
    } else {
        data.success = 'Login successful'
        users.push(username)
        req.session.username = username
    }

    console.log(data)
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(data))
})

// Render chat screen.
router.get('/chat', (req, res, next) => {
    /***********************************
     *         YOUR CODE HERE          *
     ***********************************/
     res.render('pages/pr12-chat', {
        title: 'Prove Activity 12',
        path: '/proveActivities/12',
        user: req.session.username
    })
})

module.exports = router
