const router = require('express').Router();
//const passport = require('passport');
const { Comments, Users, Posts } = require('../models');

console.log("In home Routes")
//Get the signup page loaded, if logged in, then display the homepage, otherwise, reload the signup page
router.get('/', async (req, res) => {
    try {
        // if (req.session.loggedIn) {
        res.redirect('/api/posts/');
        //   return;
        // }
        // res.render('signup')
    }
    catch (err) {
        res.status(500).json(err);
    }
});

//Get the signup page loaded, if logged in, then display the homepage, otherwise, reload the signup page
router.get('/signup', async (req, res) => {
    try {
        if (req.session.loggedIn) {
            res.redirect('/');
            return;
        }
        res.render('signup')
    }
    catch (err) {
        res.status(500).json(err);
    }
});

//Get the login page loaded, if logged in, then display the homepage, otherwise, reload the login page
router.get('/login', async (req, res) => {
    try {
        if (req.session.loggedIn) {
            res.redirect('/');
            return;
        }
        res.render('login')
    } catch (err) {
        res.status(500).json(err);
    }
});

//Get the logout page loaded and destroy the session
router.get('/logout', async (req, res) => {
    try {
        if (req.session.loggedIn) {
            req.session.destroy();
        }
        res.render('logout')
    } catch (err) {
        res.status(500).json(err);
    }
});

//The route to pass the HTML category to the api/post route, this will display only HTML posts in the home page
router.get('/HTML', async (req, res) => {
    try {
        if (req.session.loggedIn) {
            res.redirect('/api/posts/HTML');
            return;
        }
        res.render('login')
    }
    catch (err) {
        res.status(500).json(err);
    }
});

//The route to pass the CSS category to the api/post route, this will display only CSS posts in the home page
router.get('/CSS', async (req, res) => {
    try {
        if (req.session.loggedIn) {
            res.redirect('/api/posts/CSS');
            return;
        }
        res.render('login')
    }
    catch (err) {
        res.status(500).json(err);
    }
});

//The route to pass the NODE category to the api/post route, this will display only NODE posts in the home page
router.get('/NODE', async (req, res) => {
    try {
        if (req.session.loggedIn) {
            res.redirect('/api/posts/NODE');
            return;
        }
        res.render('login')
    }
    catch (err) {
        res.status(500).json(err);
    }
});

//The route to pass the REACT category to the api/post route, this will display only REACT posts in the home page
router.get('/REACT', async (req, res) => {
    try {
        if (req.session.loggedIn) {
            res.redirect('/api/posts/REACT');
            return;
        }
        res.render('login')
    }
    catch (err) {
        res.status(500).json(err);
    }
});

//The route to load the add new post form, which allows the user to enter new post data
router.get('/newPost', async (req, res) => {
    try {
        if (req.session.loggedIn) {
            res.render('newPost', { loggedIN: req.session.loggedIn });
            return;
        }
    }
    catch (err) {
        res.status(500).json(err);
    }
});

//The route to load the add new comment form, which allows the user to enter new comment data
router.get('/newComment', async (req, res) => {
    try {
        if (req.session.loggedIn) {
            res.render('newComment', { loggedIN: req.session.loggedIn });
            return;
        }
    }
    catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router