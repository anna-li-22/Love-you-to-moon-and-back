const connection = require('./connection')

// getallPoem
function getPoem(db = connection) {
  console.log(db('poem').select())
  return db('poem').select()
}

// getPoem by it's id
function getPoemById(id, db = connection) {
  return db('poem').where('poem_id', id).select().first()
}

// function getPoemById(id, db = connection) {
//   return db('Poem').where('poem_id', id).select().first()
// }
module.exports = {
  getPoem,
  getPoemById,
}
