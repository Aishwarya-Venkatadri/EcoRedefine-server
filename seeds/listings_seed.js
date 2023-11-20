/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('listings').del()
  await knex('listings').insert([
    {
      listing_id: 1,
      listing_name: "Learning React: Modern Patterns for Developing React Apps",
      category_id: 1,
      image: 'listing_01.jpg',
      location: 'Burnaby',
      availability: 'Available',
      user_id: 1,
      email: "aishwarya@gmail.com",
      address: 'Royal Oak Burnaby',
      listing_weight: "494 grams",
      listing_material: "Paper",
      listing_borrow_price: '10.50'
    }
  ]);
};
