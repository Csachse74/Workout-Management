const router = require("express").Router();
const workout = require("../models").workout;

router.get("/api/workouts", (req, res) => {
    workout.find()
    .then(data => res.json(data))
    .catch(err => res.json(err));
});

router.put("/api/workouts/:id", (req, res) => {
    workout.findByIdAndUpdate(
        req.params.id
        , { $push: { exercises: req.body } }
        , { new: true }
    )
    .then(data => res.json(data))
    .catch(err => res.json(err));
});

router.post("/api/workouts", (req, res) => {
    workout.create({
        day: Date.now()
    })
    .then(newData => {
        res.json(newData);
    })
    .catch(err => res.json(err));
});

module.exports = router;