const connection = require('./connection')

// getallPoem
function getPoem(db = connection) {
  return (
    db('poem')
      // .join('author', 'poem.author_id', '=', 'author.author_id')
      .select()
  )
}

// getPoem by it's id
function getPoemById(id, db = connection) {
  return db('poem').where('poem_id', id).select().first()
}
function addPoem(newPoem, db = connection) {
  console.log(newPoem)

  return db('poem').insert(newPoem)
}

// function getPoemById(id, db = connection) {
//   return db('Poem').where('poem_id', id).select().first()
// }

module.exports = {
  getPoem,
  getPoemById,
  addPoem,
}
