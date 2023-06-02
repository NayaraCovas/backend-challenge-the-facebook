const express= require('express')
const route=express.Router()
const userController=require('../controller/postsController') 

route.get('/feed', userController.getHomePage)

route.post('/create-post',userController.createPost)

route.get('/feed/:id',userController.getFullPost);

route.post('/delete-post/:id', userController.deletePost)

//route editing
route.get('/edit/:id', userController.editPost);
route.post('/update-post/:id', userController.updatePost)





module.exports = route;