/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del();

  // Seed multiple users
  await knex('users').insert([
    {
      user_id: 1,
      user_name: "capstonetest",
      password: "testtest123" // password is not hashed, MVP
    },
    {
      user_id: 2,
      user_name: "eco_user",
      password: "ecopassword"
    },
    {
      user_id: 3,
      user_name: "green_commute",
      password: "green123"
    },
    {
      user_id: 4,
      user_name: "fashion_lover",
      password: "fashionpass"
    },
    {
      user_id: 5,
      user_name: "user3",
      password: "user3pass"
    },
    {
      user_id: 6,
      user_name: "user2",
      password: "user2pass"
    },
    {
      user_id: 7,
      user_name: "user6",
      password: "user6pass"
    },
    {
      user_id: 8,
      user_name: "user8",
      password: "user8pass"
    },
    {
      user_id: 9,
      user_name: "user9",
      password: "user9pass"
    },
    {
      user_id: 10,
      user_name: "user14",
      password: "user14pass"
    },
    {
      user_id: 11,
      user_name: "user15",
      password: "user15pass"
    },
    {
      user_id: 12,
      user_name: "user18",
      password: "user18pass"
    },
    {
      user_id: 13,
      user_name: "user17",
      password: "user17pass"
    },
    {
      user_id: 14,
      user_name: "user16",
      password: "user16pass"
    },
  ]);
};

module.exports ={ seed };