const express = require('express');

const app = express();

//  middleware
const notes = [];
app.use(express.json())


app.post("/about", (req, res) => {
    notes.push(req.body);
    res.status(201).json({
        message: "user created",
        notes

    })
})

app.get("/about", (req, res) => {
    res.status(200).json({
        message: "get data",
        notes: notes
    })
})

app.delete('/about/:index', (req, res) => {
    const index = req.params.index
    delete notes[index]
    res.status(200).json({
        message: "user deleted",
        notes
    })
})

app.patch('/notes/:index', (req, res) => {
    const index = req.params.index;
    const ab  = req.body.description;
    notes[index].description = ab
    
    res.status(200).json({
        message: "updated",
        notes
    })
})


module.exports = app;