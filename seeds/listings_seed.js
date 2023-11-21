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
      created_at: knex.fn.now(),
      listing_weight: "494 Grams",
      listing_material: "Paper",
      listing_borrow_price: '10.50'
    },
    {
      listing_id: 2,
      listing_name: "DEKOPRO Drill Set",
      category_id: 2,
      image: 'listing_02.jpg',
      location: 'Vancouver',
      availability: 'Unavailable',
      user_id: 2,
      email: "eco_user@gmail.com",
      address: '456 E Vancouver',
      created_at: knex.fn.now(),
      listing_weight: "748.42 Grams",
      listing_material: "Metal",
      listing_borrow_price: '55.50'
    }
  ]);
};
