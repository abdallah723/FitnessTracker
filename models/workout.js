const mongoose = require ("mongoose")
const Schema = mongoose.Schema

const WorkoutSchema = new Schema ({
    date: {
        type: Date,
        default: () => new Date()
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Exercise Type"
            },

            name: {
                type: String,
                trimg: true,
                required: "Exercise Name"
            },

            duration: {
                type: Number,
                required: "Exercise Duration (in Minutes)"
            },

            weight: {
                type: Number
            },

            reps: {
                type: Number
            },

            sets: {
                type: Number
            },

            distance: {
                type: Number
            }
        }
    ]
    
})

const Workout = mongoose.model("Workout", WorkoutSchema)

module.exports = Workout