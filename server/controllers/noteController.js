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

  getNotes(req, res, next) {
    Instance.find({})
    .then(data => {
      res.locals.getAll = data;
      console.log('this is from controller')
      return next();
    })
    .catch(err => {
      next({
        log: `error in getAllClient: ERROR: ${err}`,
        message: { err: 'Express error handler caught in getNotes' }
      });
    });
  }
}

module.exports = noteController