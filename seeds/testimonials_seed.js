exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('testimony').del();

  await knex('testimony').insert([
    {
      id: 1,
      user_id: 1,
      testimony: "This is a great product!",
      stars: 5,
      listing_id: 1,
      created_at: new Date('2023-11-20T12:30:00'),
    },
    {
      id: 2,
      user_id: 2,
      testimony: "Amazing experience!",
      stars: 4,
      listing_id: 2,
      created_at: new Date('2023-11-21T14:45:00'),
    },
    {
      id: 3,
      user_id: 3,
      testimony: "Highly recommended!",
      stars: 5,
      listing_id: 3,
      created_at: new Date('2023-11-22T10:15:00'),
    },
    {
      id: 4,
      user_id: 1,
      testimony: "Excellent service!",
      stars: 4,
      listing_id: 4,
      created_at: new Date('2023-11-23T18:20:00'),
    },
    {
      id: 5,
      user_id: 2,
      testimony: "Fast delivery!",
      stars: 5,
      listing_id: 5,
      created_at: new Date('2023-11-24T16:30:00'),
    },
    {
      id: 6,
      user_id: 3,
      testimony: "Quality product!",
      stars: 4,
      listing_id: 1,
      created_at: new Date('2023-11-25T11:45:00'),
    },
    {
      id: 7,
      user_id: 1,
      testimony: "Impressive!",
      stars: 5,
      listing_id: 2,
      created_at: new Date('2023-11-26T08:00:00'),
    },
    {
      id: 8,
      user_id: 2,
      testimony: "Good value for money!",
      stars: 4,
      listing_id: 3,
      created_at: new Date('2023-11-27T09:30:00'),
    },
    {
      id: 9,
      user_id: 3,
      testimony: "Satisfied customer!",
      stars: 5,
      listing_id: 4,
      created_at: new Date('2023-11-28T15:20:00'),
    },
    {
      id: 10,
      user_id: 1,
      testimony: "Wonderful experience!",
      stars: 5,
      listing_id: 5,
      created_at: new Date('2023-11-29T13:00:00'),
    },
  ]);
};
