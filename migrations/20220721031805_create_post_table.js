/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable('post', function(table){
          table.increments('id').primary();          
          table.string('title');
          table.text('konten');
          table.integer('user_id').references('user.id').onDelete('CASCADE');
          table.timestamps(true, true);
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('post');
  };
  