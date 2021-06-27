const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Posts, Comments, Users } = require('../../models');




router.get('/posts/:id', withAuth, async (req, res) => {
    const postData = await Posts.findByPk(req.params.id, {
        where: {
            id: req.params.id,
        },
        include: [
            {
                model: Comments,
                attributes: [
                    'id',
                    'comment_text',
                    'createdAt',
                    'user_id',
                    'post_id',
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
    //const posts = postData.get({ plain: true });
    const posts = postData.get({ plain: true });
    console.log(posts)
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
        include: [
            {
                model: Comments,
                attributes: [
                    'id',
                    'comment_text',
                    'user_id',
                    'post_id',
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



router.get('/HTML', async (req, res) => {
    try {
        const postData = await Posts.findByPk(req.params.id, {
            include: [
                {
                    model: Review,
                    attributes: [
                        'id',
                        'review_rating',
                        'review_body',
                        'review_subject',
                    ],
                },
            ],
        });

        const post = postData.get({ plain: true });
        res.render('user_profile', { user, isAdmin: req.session.isAdmin, loggedIN: req.session.loggedIn })
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/CSS', async (req, res) => {
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

router.get('/NODE', async (req, res) => {
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

router.get('/REACT', async (req, res) => {
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


/*
//Code for the adding reviews:
router.get('/addReview/:id', withAuth, async (req, res) => {
    try {
        const companyData = await Company.findByPk(req.params.id);

        // Serialize data so the template can read it
        const company = companyData.get({ plain: true });
        //res.render('addReview', { company, loggedIN: req.session.loggedIn })

        req.session.save(() => {
            req.session.company_id = req.params.id;
            res.render('addReview', { company, loggedIN: req.session.loggedIn })
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

router.post('/', withAuth, async (req, res) => {
    try {
        const reviewData = await Review.create(//req.body
            {
                reviewSubject: req.body.subject,
                reviewBody: req.body.review,
                reviewRating: req.body.rating,
                company_id: req.session.company_id,
                user_id: req.session.user_id,
            }
        )
        console.log(`UGGG: ${req.session.company_id}`)
        res.redirect('companies/company/' + req.session.company_id) //, { userFirstName: req.session.userFirstName, loggedIN: req.session.loggedIn })
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    };
});
*/
module.exports = router;