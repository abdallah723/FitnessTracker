const Workout = require ("../models/workout");

module.exports = (app) => {
    app.get("/api/wokrouts", (req, res) => {
        db.Workout.find({})
            .then(Workout => {
                res.json(Workout)
            .catch(err => {
                res.json(err)
            })
        })
    })

    app.get("api/workots/:id", (req, res) => {
        db.Workout.findOne({_id: req.params.id})
        .then(Workout => {
            res.json(Workout)
        })
        .catch(err => {
            res.json(err)
        })
    })

    app.post("/api/workouts", (req,res) => {
        db.Workout.create({})
        .then(Workout => {
            res.json(Workout)
        .catch(err => {
                res.json(err)
            })
        })
    })

    app.post("/api/workouts/range", (req, res) => {
        db.Workout.create({})
        .then(Workout => res.json(Workout))
        .catch(err => {
            res.json(err)
        })
    })

    app.put("/api/workouts/:id", (req, res) => {
        const newExercise = req.body
        db.Workout.update( 
            { _id: req.params.id },
            { $push: {exercises: newExercise }},
        )
        .then(Workout => res.json(Workout))
        .catch(err => {
            res.json(err)
        })
    })
}