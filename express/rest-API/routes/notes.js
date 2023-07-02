const { Router } = require("express");
const Note = require("../models/note");

const router = Router();

// 메모 목록 구현
router.get("/", (req, res, next) => {
  const notes = Note.list();
  res.json(notes);
});

// 메모 상세 구현
router.get("/:id", (req, res, next) => {
  const id = Number(req.params.id);

  try {
    const note = Note.get(id);
    res.json(note);
  } catch (e) {
    next(e);
  }
});
module.exports = router;
