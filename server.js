const morgan = require('morgan');
const bodyParser = require('body-parser');
const express = require('express');
const routes = require('./routes');
var mysql = require('mysql');

const db = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'socka'
});

// connect to database
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});

var store = {
  posts: [
    {
    name: 'namn',
    url: 'test url',
    text: 'test text',
    comments: [
      {text: 'comment 1 '},
      {text: 'comment 2'}
    ]
    }
  ]
}


// 2 insta
const app = express()

// 3 config

// 4 middleware
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use((req,res,next) => {
    req.store = store
    next()
})

// 5 routes

//post read / create / update / delete
app.get('/posts' , (req,res) => {routes.posts.getPosts(req,res)})
app.post('/posts' , (req,res) => {routes.posts.addPost(req,res)})
app.put('/posts/:postId' , (req,res) => {routes.posts.updatePost(req,res)})
app.delete('/posts/:postId' , (req,res) => {routes.posts.deletePost(req,res)})
//
////comment read / create / update / delete
app.get('/posts/:postId/comments' , (req,res) => {routes.comments.getComments(req,res)})
app.post('/posts/:postId' , (req,res) => {routes.comments.addComment(req,res)})
app.put('/posts/:postId/Comments/:commentId' , (req,res) => {routes.comments.updateComment(req,res)})
app.delete('/posts/:postId/comments/:commentId' , (req,res) => {routes.comments.deleteComment(req,res)})


// 6 errorhandler

// 7 server bootup
app.listen(3000)
console.log("Server started")
