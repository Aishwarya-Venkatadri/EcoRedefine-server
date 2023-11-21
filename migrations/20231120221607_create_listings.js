/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const up = function (knex) {
    return knex.schema.createTable("listings", (table) => {
      table.increments("listing_id").primary(); //PK
      table.string("listing_name").notNullable();
      table.integer("category_id").unsigned().notNullable(); // FK referencing categories
      table.string("image").notNullable();
      table.string("location").notNullable();
      table.string("availability").notNullable();
      table.integer("user_id").unsigned().notNullable(); // FK referencing users 
      table.string("email").notNullable();
      table.string("address").notNullable();
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table.string("listing_weight").notNullable();
      table.string("listing_material").notNullable();
      table.decimal('listing_borrow_price', 5, 2).notNullable();
  
      // Foreign key constraints
      table.foreign("category_id").references("category_id").inTable("categories");
      table.foreign("user_id").references("user_id").inTable("users");
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
const down = function (knex) {
    return knex.schema.dropTable("listings");
  };

module.exports = { up, down };