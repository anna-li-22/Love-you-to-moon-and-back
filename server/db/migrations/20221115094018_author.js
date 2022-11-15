exports.up = function (knex) {
  return knex.schema.createTable('author', (table) => {
    table.increments('author_id')
    table.string('author_name')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('author')
}
