const feed = require('../model/Feed')

const getHomePage = (req, res) =>{
    feed.find()
    .then((result)=> res.render('index', {users: result}))
    // we need to show the data in the home page
    .catch(err => console.log(err));   
}

const createPost = (req,res) =>{
    let newPost=new feed(req.body);
    // to be ble to copy from the model (the model was required with the variable post above)
    newPost.save()
    .then((result)=> res.redirect('/feed'))
    .catch(err => console.log(err))
}

const getFullPost = (req, res) =>{
    feed.findById(req.params.id)
    .then(result => {
        res.render('fullPost' , {
            user :result,
        })
    })
    .catch(err => console.log(err))
}

const deletePost = (req, res) => {
    feed.findByIdAndDelete(req.params.id)
    .then(()=> {res.redirect('/feed')})
    .catch(err =>{ console.log(err)});    
}

const editPost =(req, res) =>{
    feed.findById(req.params.id)
    .then(result => {
        res.render('editPost' , {
            user :result,
        })
    })
    .catch(err => {res.render('404')
})
}
const updatePost = (req, res) =>{
    console.log(req.body)
    feed.findByIdAndUpdate(req.params.id, req.body)
    .then(result => {
     res.redirect(`/feed/${result._id}`)
    })
    .catch(err => console.log(err))
 }



module.exports={
    getHomePage,
    createPost,
    getFullPost,
    deletePost,
    editPost,
    updatePost
}

