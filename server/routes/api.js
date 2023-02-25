const express = require ('express');
const noteController = require ("../controllers/noteController");
const router =  express.Router();

router.get('/', noteController.getNotes, (req, res) => res.status(200).json(res.locals.getAll))

router.post('/', noteController.createNote, (req, res) => res.status(200).json(res.locals.newNote));

module.exports = router