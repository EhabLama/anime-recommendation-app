exports.up = function(knex) {
    return knex.schema.createTable('listings', function(table) {
      table.increments('anime_id').primary();
      table.string('input_anime_title');
      table.string('facet_Attribute');
      table.string('recommended_anime_title');
      table.integer('recommended_anime_id');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('listings');
  };
  