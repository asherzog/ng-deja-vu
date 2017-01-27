
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cheese', table => {
    table.increments();
    table.text('name').notNullable();
    table.text('image').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('cheese');
};
