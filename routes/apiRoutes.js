const express = require("express");
const router = require("express").Router();
const path = require("path");
const fs = require("fs");
const uuid = require("uuid");

router.get("/notes", (req, res) => {
  const dataPath = "../db/db.json";
  res.sendFile(path.join(__dirname, dataPath));
});

const dbPath = "./db/db.json";

router.post("/notes", (req, res) => {
  const note = JSON.parse(fs.readFileSync(dbPath));
  const newNote = req.body;
  newNote.id = uuid.v4();
  note.push(newNote);
  fs.writeFileSync(dbPath, JSON.stringify(note));
  res.json(note);
});

router.delete("/notes/:id", (req, res) => {
  const note = JSON.parse(fs.readFileSync(dbPath));
  const deleteNote = note.filter((delNote) => delNote.id !== req.params.id);
  fs.writeFileSync(dbPath, JSON.stringify(deleteNote));
  res.json(deleteNote);
});

module.exports = router;
