/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const up = function (knex) {
    return knex.schema.createTable("testimony", (table) => {
      table.increments("id").primary(); // PK
      table.integer("user_id").unsigned().notNullable(); // FK referencing users 
      table.string("testimony").notNullable();
      table.integer("stars").notNullable();
      table.integer("listing_id").unsigned().notNullable(); //FK referencing listings 
      table.timestamp("created_at").notNullable();
  
      // Foreign key constraints
      table.foreign("user_id").references("user_id").inTable("users");
      table.foreign("listing_id").references("listing_id").inTable("listings");
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
const down = function (knex) {
    return knex.schema.dropTable("testimony");
  };
  
  module.exports = { up, down };