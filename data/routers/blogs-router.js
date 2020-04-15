const express = require("express")
const router = express.Router();

const dataBase = require("../db");

//get posts
router.get("/", (req, res) => {
    dataBase
    .find()
    .then(posts => {
        res.status(200).json(posts)
    })
    .catch(error => {
        res.status(505).json({errorMessage: `${error} couldn't find what you are looking for`})
    })
})

//get posts by id
router.get("/:id", (req, res) => {
    const { id } = req.params;
    dataBase
    .findById(id)
    .then(posts => {
        res.status(200).json(posts)
    })
    .catch(error => {
        res.status(500).json({errorMessage: `${error} couldnt retrive posts`})
    })
})

//new posts
router.post("/", (req,res) => {
    const newPost = req.body;
    console.log(newPost)
    dataBase
    .insert(newPost)
    .then(newPost => {
        res.status(200).json(newPost)
    })
    .catch(error => {
        res.status(500).json({errorMessage: `${error} could not post to database`})
    })
})

//update posts
router.put("/:id", (req,res) => {
    const { id } = req.params;
    const updatePost = req.body
    dataBase
    .update(id, updatePost)
    .then(updatePost => {
        res.status(200).json(updatePost)
    })
    .catch(error => {
        res.status(500).json({errorMessage: `${error} couldn't update posts`})
    })
})

//delete posts
router.delete("/:id", (req,res) => {
    const { id } = req.params;
    dataBase
    .remove(id)
    .then(deletePost => {
        res.status(200).json(deletePost)
    })
    .catch(error => {
        res.status(500).json({errorMessage: `${error} could not delete this post`})
    })
})






module.exports = router