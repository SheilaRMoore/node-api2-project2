const express = require('express')

const router = express.Router()

const commentsDB = require("../db");

//get commments
router.get("/:id/comments", (req, res) => {
    const { id } = req.params;
    commentsDB
    .findPostComments(id)
    .then(comments => {
        res.status(200).json(comments)
    })
    .catch(error => {
        res.status(500).json({errorMessage: `${error} couldn't get information`})
    })
})

//get comments  by id
router.get("/:id", (req,res) => {

    const { id } = req.params;
    commentsDB
    .findCommentById(id)
    .then(comments => {
        res.status(200).json(comments)
    })
    .catch(error => {
        res.status(500).json({errorMessage: `${error}
        your information could't be retrieve
        `})
    })
})

router.post("/:id/comments", (req,res)=> {
const {id} = req.params;
const newComment = req.body;
const commentReady ={
    post_id: id,
    ...newComment

}
console.log(commentReady)
commentsDB
.insertComment(commentReady)
.then (commentReady=> {
    res.status(200).json(commentReady)
})
.catch(error => {
    res.status(500).json({errorMessage: `${error}
   could not add comment
    `})
})
})



module.exports = router





module.exports = router