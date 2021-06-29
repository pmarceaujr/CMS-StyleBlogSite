console.log("in API post routes")
const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Posts, Comments, Users, Lookups } = require('../../models');


//Get All HTML Posts for the filter listing page 
router.put('/updatePost/:id', withAuth, async (req, res) => {
    console.log("WTF")
    try {
        const postData = await Posts.update(
            {
                subject: req.body.subjectUpdate,
                body: req.body.postbodyUpdate,
                category: req.body.categoryUpdate,
                // user_id: req.session.user_id,
            },
            {
                where: { id: req.params.id, },
            })
        res.redirect(303, '/api/posts/posts');
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    };
});


//Get All HTML Posts for the filter listing page 
router.get('/posts', withAuth, async (req, res) => {
    const postsData = await Posts.findAll({
        where: {
            user_id: req.session.user_id,
        },
        order: [['created_at', 'DESC',]],
    });
    // Serialize data so the template can read it
    const posts = postsData.map((posts) => posts.get({ plain: true }));
    if (req.session.loggedIn) {
        res.render('dashboard', { posts, userFirstName: req.session.userFirstName, loggedIN: req.session.loggedIn })
    }
})

//Get All HTML Posts for the filter listing page 
router.get('/delete/:id', withAuth, async (req, res) => {
    const postsDelData = await Posts.destroy({
        where: {
            id: req.params.id,
        },
        order: [['created_at', 'DESC',]],
    });
    res.redirect('/api/posts/posts');
})

//Get All HTML Posts for the filter listing page 
router.get('/newPost', withAuth, async (req, res) => {
    const LookupData = await Lookups.findAll({
        where: {
            type: 'category',
        },
        order: [['created_at', 'DESC',]],
    });
    // Serialize data so the template can read it
    const lookups = LookupData.map((lookups) => lookups.get({ plain: true }));
    if (req.session.loggedIn) {
        res.render('newPost', { lookups, userId: req.session.user_id, loggedIN: req.session.loggedIn })
    }
})

//Get All HTML Posts for the filter listing page 
router.post('/newPost', withAuth, async (req, res) => {
    try {
        const postData = await Posts.create(//req.body
            {
                subject: req.body.subject,
                body: req.body.postbody,
                category: req.body.category,
                user_id: req.session.user_id,
            }
        )
        res.redirect('/api/posts/posts');
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    };
});

router.get('/posts/:id', withAuth, async (req, res) => {
    const postData = await Posts.findByPk(req.params.id, {
        where: {
            id: req.params.id,
        },
        order: [['created_at', 'DESC',]],
        include: [
            {
                model: Comments,
                attributes: [
                    'id',
                    'comment_text',
                    'createdAt',
                    'user_id',
                    'post_id'],
                include: [
                    {
                        model: Users,
                        attributes: [
                            'id',
                            'username',
                        ],
                    }],
            },
            {
                model: Users,
                attributes: [
                    'id',
                    'username',
                ],
            },
        ], order: [[Comments, 'createdAt', 'DESC']],
    });
    req.session.post_id = req.params.id;
    // Serialize data so the template can read it
    const posts = postData.get({ plain: true });
    if (req.session.loggedIn) {
        res.render('postlists', { posts, loggedIN: req.session.loggedIn })
    }
})

//Get All HTML Posts for the filter listing page 
router.get('/:category', withAuth, async (req, res) => {
    const postsData = await Posts.findAll({
        where: {
            category: req.params.category,
        },
        order: [["created_at", "desc"]],
        include: [{
            model: Comments,
            attributes: [
                'id',
                'comment_text',
                'user_id',
                'post_id',
                'created_at',
            ],
        },
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
    const posts = postsData.map((posts) => posts.get({ plain: true }));
    if (req.session.loggedIn) {
        res.render('homepage', { posts, userFirstName: req.session.userFirstName, loggedIN: req.session.loggedIn })
    }
})


//Get All HTML Posts for the filter listing page 
router.get('/editPosts/:id', withAuth, async (req, res) => {
    const editPostData = await Posts.findByPk(req.params.id, {
        where: {
            id: req.params.id,
        },
    });
    // Serialize data so the template can read it
    const editPost = editPostData.get({ plain: true });
    console.log(editPost)
    if (req.session.loggedIn) {
        res.render('editPost', { editPost, userId: req.session.user_id, loggedIN: req.session.loggedIn })
    }
})

//Get All HTML Posts for the filter listing page 
router.post('/newPost', withAuth, async (req, res) => {
    try {
        const postData = await Posts.create(//req.body
            {
                subject: req.body.subject,
                body: req.body.postbody,
                category: req.body.category,
                user_id: req.session.user_id,
            }
        )
        res.redirect('/api/posts/posts');
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    };
});




module.exports = router;

