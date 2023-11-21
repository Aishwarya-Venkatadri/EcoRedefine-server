// users_seed.js

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del();

  // Seed a single user
  await knex('users').insert([
    {
      user_id: 1,
      user_name: "capstonetest",
      password: "testtest123" //  password is not hashed, MVP
    }
   
  ]);
};
