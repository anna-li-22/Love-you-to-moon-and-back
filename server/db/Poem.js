const connection = require('./connection')

// getallPoem
function getPoem(db = connection) {
  return db('Poem').select()
}

// getPoem by it's id
function getPoemById(id, db = connection) {
  return db('Poem').where('poem_id', id).select().first()
}

module.exports = {
  getPoem,
  getPoemById,
}
