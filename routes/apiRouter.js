let Router = require('express').Router;
const apiRouter = Router()
let helpers = require('../config/helpers.js')

let Task = require('../db/schema.js').Task

apiRouter.get('/tasks', function(request, response) {
    Task.find({}, function(err, results) {
        if(err) {
            response.json ({
                message: err
            })
        }
        response.json(results)
    })
})


module.exports = apiRouter