/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const up = function (knex) {
    return knex.schema.createTable("categories", (table) => {
      table.increments("category_id").primary(); ///PK
      table.string("category_name").notNullable();
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
const down = function (knex) {
    return knex.schema.dropTable("categories");
  };
  
  module.exports = { up, down };