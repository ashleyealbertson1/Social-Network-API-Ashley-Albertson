const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction,
} = require('../../controllers/thoughtControllers');

// /api/thoughts
router
.route('/')
.get(getThoughts)

// /api/thoughts/:thoughtId
router
.route('/:thoughtId')
.get(getSingleThought)
.put(updateThought)
.delete(deleteThought);

// /api/thoughts/:userId
router
.route('/:userId')
.post(createThought);

// /api/thoughts/:thoughtId/reactions
router
.route('/:thoughtId/reactions')
.post(createReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId

router
.route('/:thoughtId/reactions/:reactionId')
.delete(deleteReaction);

module.exports = router;


// const router = require('express').Router();
// const Thoughts = require('../../models/Thoughts');

// //create a post
// router.post('/', async (res, req) => {
//     const newThoughts = new Thoughts(req.body)

//     try {
//         const savedThoughts = await newThoughts.save();
//         res.status(200).json(savedThought);
//     } catch (err) {
//         res.status(500).json(err)
//     }
// })


// //update a post

// //delete a post



// module.exports = router;