/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('author').del()
  await knex('author').insert([
    { author_id: 1, author_name: 'Christina Rossetti' },
    { author_id: 2, author_name: 'Rita Dove' },
    { author_id: 3, author_name: 'Emily Brontë' },
    { author_id: 4, author_name: 'Derek Walcott' },
    { author_id: 5, author_name: 'Abigail Adams' },
    { author_id: 6, author_name: 'Shakespeare' },
  ])
}
