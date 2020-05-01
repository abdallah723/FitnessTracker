const Workout = require ("../models/workout");

module.exports = (app) => {
    app.get("/api/wokrouts", (req, res) => {
        Workout.find({})
            .then(workout => {
                res.json(workout)
        }).catch(err => {
            res.json(err)
        })
    })

    app.get("api/workots/:id", (req, res) => {
        Workout.findOne({_id: req.params.id})
        .then(workout => {
            res.json(workout)
        }).catch(err => {
            res.json(err)
        })
    })

    app.post("/api/workouts", (req,res) => {
        Workout.create({})
        .then(workout => {
            res.json(workout)
        }).catch(err => {
            res.json(err)
        })
    })

    app.get("/api/workouts/range", (req, res) => {
        Workout.find({}).limit(7)
        .then(workout => res.json(workout))
        .catch(err => {
            res.json(err)
        })
    })

    app.put("/api/workouts/:id", (req, res) => {
        const newExercise = req.body
        Workout.update( 
            { _id: req.params.id },
            { $push: {exercises: newExercise }},
        )
        .then(workout => res.json(workout))
        .catch(err => {
            res.json(err)
        })
    })
}