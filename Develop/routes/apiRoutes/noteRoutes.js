const router = require("express").Router();
const { notes } = require("../../db/db.json");
const  {createNote, deleteNote}  = require("../../lib/note");

// get route using notes object
router.get("/notes", (req, res) => {
    let saved = notes;
    res.json(saved);
})

// post route being pushed to notes object
router.post("/notes", (req, res) => {
    req.body.id = notes.length.toString();
    let note = createNote(req.body, notes);
    res.json(note);
})

// delete route finding created note by id, worked out with tutor
router.delete("/notes/:id", (req, res) => {
    
    let note = deleteNote(notes, req.params.id);
    res.json(note);
})

module.exports = router;