exports.up = function (knex) {
  return knex.schema.createTable('poem', (table) => {
    table.increments('poem_id')
    table.string('author_id')
    table.string('poem_title')
    table.string('poem_text')
    table.string('poem_from')
    table.string('poem_type')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('poem')
}
