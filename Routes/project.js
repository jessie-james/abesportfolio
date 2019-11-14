const express = require("express");
const projectRouter = express.Router();
const Project = require("../models/project.js");


projectRouter.route('/')
    .get((req, res) => {
        Project.find((err, projects) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send(projects)
        })
    })
    .post((req, res) => {
        const newProject = new Project(req.body)
        newProject.save(err => {
            if (err) return res.status(500).send(err)
            return res.status(201).send(newProject)
        })
    })
projectRouter.route('/:_id')

    .get((req, res) => {
        const _id = req.params._id
        Project.findById(_id, (err, project) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send(project)
        })
    })
    .put((req, res) => {
        const _id = req.params._id
        Project.findByIdAndUpdate(_id,
            req.body,
            { new: true },
            (err, project) => {
                if (err) return res.status(500).send(err)
                return res.status(200).send(project)
            })
    })
    .delete((req, res) => {
        const _id = req.params._id
        Project.findByIdAndDelete(_id, (err => {
            if (err) return res.status(500).send(err)
            return res.status(200).send({
                msg: 'Successfully deleted Project'
            })
        })
    )}
    )

module.exports = projectRouter