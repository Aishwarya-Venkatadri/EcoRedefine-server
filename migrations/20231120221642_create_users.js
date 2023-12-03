/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const up = function (knex) {
    return knex.schema.createTable("users", (table) => {
      table.increments("user_id").primary(); //PK
      table.string("user_name").notNullable();
      table.string("password").notNullable(); // not hashed
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  const down = function (knex) {
    return knex.schema.dropTable("users");
  };
  
  module.exports = { up, down };