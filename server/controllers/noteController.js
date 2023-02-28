const Instance = require ('../models/models.js');


const noteController = {

  //creates new note in DB
  createNote(req, res, next) {
    console.log('this is createNote Controller')

    const {note, createdAt} = req.body;

    Instance.create({
      note: note,
      createdAt: createdAt
    }).then((data) => {
      res.locals.newNote = data;
      console.log('this is data', data)
      return next();
    }).catch((err) => {
      next({
        log: `error in createForm: ERROR: ${err}`,
        message: { err: 'Express error handler caught in createForm' }
      });
    }) 
  },

  //fetch notes from DB
  getNotes(req, res, next) {
    
    Instance.find()
    .then(data => {
      res.locals.getAll = data;
      // console.log('this is from controller', data)
      return next();
    })
    .catch(err => {
      next({
        log: `error in getAllClient: ERROR: ${err}`,
        message: { err: 'Express error handler caught in getNotes' }
      });
    });
  },

  //search notes from DB
  searchNotes(req, res, next) {
    const { note } = req.body;
    console.log('this is from search', note)
    //case insensitive, partial search
    Instance.find({note: {$regex: note, $options: "i"} })
    .then(data => {
      console.log('returned data', data)
      res.locals.search = data;
      return next();
    })
    .catch(err => {
      next({
        log: `error in searchNotes: ERROR: ${err}`,
        message: { err: 'Express error handler caught in searchNotes' }
      });
    });
  },

  //delete note from DB
  deleteNote(req, res, next) {
    const id = req.params.id;

    Instance.findOneAndDelete({_id: id})
    .then(data => {
      res.locals.delete = data;
      console.log('this is deleted', data)
      return next()
    })
    .catch(err => {
      next({
        log: `error in deleteNote: ERROR: ${err}`,
        message: { err: 'Express error handler caught in deleteNotes' }
      });
    });
  },

  //edit note from DB
  editNote(req, res, next) {
    const id = req.params.id;
    const { note } = req.body;

    Instance.findByIdAndUpdate(id, {note: note}, {
      new: true
    })
    .then(data => {
      res.locals.edit = data;
      return next();
    })
    .catch(err => {
      next({
        log: `error in editNote: ERROR: ${err}`,
        message: { err: 'Express error handler caught in editNote' }
      });
    });
  }
}

module.exports = noteController