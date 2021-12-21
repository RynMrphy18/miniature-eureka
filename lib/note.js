const fs = require("fs");
const path = require("path");

// takes note params made and writes it to db

function createNote(body, notesArray) {
    const note = body;
    notesArray.push(note);

    fs.writeFileSync(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify({
            notes: notesArray
        }, null, 2)
    )

    return note;
}

// finds note by id and deletes from database, worked out with tutor

function deleteNote(notesArray, id) {

    const findId = (note) => {
        return note.id === id;  
    }
    let deletedId = notesArray.findIndex(findId);
    notesArray.splice(deletedId, 1);

    fs.writeFileSync(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify({
            notes: notesArray
        }, null, 2)
    )
}
module.exports = {createNote , deleteNote};