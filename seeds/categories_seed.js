/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('categories').del()
  await knex('categories').insert([
   {
    category_id: 1,
    category_name: "Books & Stationery"
   },
   {
    category_id: 2,
    category_name: "Tools & Appliances"
   },
   {
    category_id: 3,
    category_name: "Outdoor & Adventure"
   },{
    category_id: 4,
    category_name: "Party Supplies"
   },
   {
    category_id: 5,
    category_name: "Gardening equipments"
   },
   {
    category_id: 6,
    category_name: "Clothings & Jewellery"
   }
  ]);
};
