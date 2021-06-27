const router = require('express').Router();
//const passport = require('passport');
const { Comments, Users, Posts } = require('../models');

//Get All posts for the home page listing
router.get('/', async (req, res) => {
    const postsData = await Posts.findAll({
        include: [
            {
                model: Users,
                attributes: [
                    'id',
                    'username',
                ],
            },
        ],
    });
    // Serialize data so the template can read it
    const posts = postsData.map((post) => post.get({ plain: true }));
    console.log("WTF:" + req.session.loggedIn)
    res.render('homepage', { posts, userId: req.session.user_id, userFirstName: req.session.userFirstName, loggedIN: req.session.loggedIn })

})

console.log("Home routes")
//Code for the GET routes follows:
//Get the signup page loaded
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

//Get the login page loaded
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

//Get the logout page loaded
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
module.exports = router