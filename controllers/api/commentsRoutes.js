const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Comments } = require('../../models');

console.log("In company Routes")

//Add a new comment to the selected post 
router.post('/newComment', withAuth, async (req, res) => {
    try {
        const commentData = await Comments.create(
            {
                post_id: req.session.post_id,
                comment_text: req.body.comment,
                user_id: req.session.user_id,
            }
        )
        res.redirect('/api/posts/posts/' + req.session.post_id);
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    };
});

module.exports = router;