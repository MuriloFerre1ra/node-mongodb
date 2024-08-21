import express from "express";
import mongoose from "mongoose";

app.use(express.json());

const users = [];

app.get('/users', (request, response) => {
    return response.json(users);
});

app.post("/users", (request, response) => {
    const { name, age, nickName} = request.body;

    user.push({ name, age, nickName});

    return response.json({ name, age, nickName});    
})

mongoose.connect('mongodb+srv://muriloti100:senhateste@cluster0.5c3on.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(() => console.log("Database connected."))
.catch(() => console.log("Error connecting database"))

app.listen(3000);