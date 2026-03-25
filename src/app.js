const express = require('express');
const noteModel = require('../src/models/note.model');

const app = express();

//  middleware
app.use(express.json());

app.post("/notes", async (req, res) => {
    const data = req.body
    await noteModel.create({
        title: data.title,
        description: data.description
    })
    res.status(201).json({
        message: "successful",
    })
})

app.get("/notes", async (req, res) => {
    const note = await noteModel.find() //  find is always return a array so here note is storing a array

    res.status(200).json({
        message: "note fechted",
        note
    })
})

app.patch("/notes/:id", async (req, res) => {
    const id = req.params.id;
    const data = req.body.description
    await noteModel.findOneAndUpdate({ _id: id }, { description: data })

    res.status(200).json({
        message: "updated"
    })

})

app.delete("/notes/:id", async (req, res) => {
    const id = req.params.id;
    await noteModel.findByIdAndDelete({
        _id: id
    })
    res.status(200).json({
        meassage: "deleted"
    })
})


module.exports = app;