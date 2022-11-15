const knex = require('knex')
const config = require('./knexfile')
const env = process.env.NODE_ENV || 'development'
const connection = knex(config[env])

module.exports = connection

// function getAllWombles(db = connection) {
//   return db('wombles').select()
// }

// module.exports = {
//   getAllWombles,
//   getWombleAndTrait,
//   assignments,
// }

// function getWombleAndTrait(wombleId, db = connection) {
//   return db('wombles')
//     .join('traits', 'wombles.trait_id', 'traits.id')
//     .where('wombles.id', wombleId)
//     .select('wombles.id', 'wombles.name', 'traits.description')
//     .first()
// }

// function assignments(db = connection) {
//   return db('wombles')
//     .join('rubbish', 'wombles.rubbish_id', 'rubbish.id')
//     .select('wombles.name as womblesName', 'rubbish.name')
// }
