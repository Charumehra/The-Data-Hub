const express = require('express');

const app = express();
app.use(express.json());

const posts = [];

let nextId = 1;

app.get("/posts",(req, res)=>{

    res.status(200).json({
        message:"Route Working",
        posts: posts
    });
});

app.get("/posts/:id",(req, res)=>{
    const id = req.params.id;
    const post = posts.find((item) => item.id === id);

    if (!post) {
        return res.status(404).json({
            message: `Post with id ${id} not found`
        });
    }

    res.json({
        message:`GET post with id ${id}`,
        post
    });
});

app.post("/posts",(req, res)=>{
    
    const {title, content} = req.body;
    const post = {
        id: String(nextId++),
        title,
        content
    };

    posts.push(post);

    res.status(201).json({ 
        message:"Post created",
        post
     });
});

app.put("/posts/:id",(req, res)=>{
    const id = req.params.id;
    const {title, content} = req.body;

    const post = posts.find((item) => item.id === id);
    if (!post) {
        return res.status(404).json({
            message: `Post with id ${id} not found`
        });
    }

    post.title = title;
    post.content = content;

    res.status(201).json({
        message:`Post with id ${id} updated`,
        post
    });
});

app.delete("/posts/:id",(req, res)=>{
    const id = req.params.id;
    const index = posts.findIndex((item) => item.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: `Post with id ${id} not found`
        });
    }

    posts.splice(index, 1);

    res.status(200).json({
        message:`Post with id ${id} deleted`
    });
});

module.exports = app;