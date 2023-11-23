exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("listings").del();
  await knex("listings").insert([
    {
      listing_id: 1,
      listing_name: "Learning React: Modern Patterns for Developing React Apps",
      category_id: 1,
      image: "listing_01.jpg",
      location: "Burnaby",
      availability: "Available",
      user_id: 1,
      email: "aishwarya@gmail.com",
      address: "Royal Oak Burnaby",
      created_at: new Date('2023-10-22T10:00:00'),
      listing_weight: "494 Grams",
      listing_material: "Paper",
      listing_borrow_price: "10.50",
    },
    {
      listing_id: 2,
      listing_name: "DEKOPRO Drill Set",
      category_id: 2,
      image: "listing_02.jpg",
      location: "Vancouver",
      availability: "Unavailable",
      user_id: 2,
      email: "eco_user@gmail.com",
      address: "456 E Vancouver",
      created_at: new Date('2023-10-23T10:15:00'),
      listing_weight: "748.42 Grams",
      listing_material: "Metal",
      listing_borrow_price: "55.50",
    },
    {
      listing_id: 3,
      listing_name: "Electric Bike",
      category_id: 3,
      image: "electric_bike.jpg",
      location: "Vancouver",
      availability: "Unavailable",
      user_id: 5,
      email: "green_commute@gmail.com",
      address: "123 E-Bike Lane",
      created_at: new Date('2023-10-24T10:30:00'),
      listing_weight: "15 kg",
      listing_material: "Aluminum",
      listing_borrow_price: "20.00",
    },
    {
      listing_id: 4,
      listing_name: "Upcycled Fashion Jacket",
      category_id: 6,
      image: "upcycled_jacket.jpg",
      location: "Burnaby",
      availability: "Available",
      user_id: 1,
      email: "fashion_lover@gmail.com",
      address: "987 Style Street",
      created_at: new Date('2023-10-25T11:45:00'),
      listing_weight: "700 Grams",
      listing_material: "Upcycled denim",
      listing_borrow_price: "15.99",
    },
    {
      listing_id: 5,
      listing_name: "Outdoor Camping Tent",
      category_id: 3, // Outdoor & Adventure
      image: "camping_tent.jpg",
      location: "Coquitlam",
      availability: "Available",
      user_id: 3,
      email: "user3@gmail.com",
      address: "789 Pine St",
      created_at: new Date('2023-10-26T12:00:00'),
      listing_weight: "2000 grams",
      listing_material: "Nylon",
      listing_borrow_price: "15.00",
    },
    {
      listing_id: 6,
      listing_name: "Electric Hedge Trimmer",
      category_id: 5, // Gardening equipments
      image: "hedge_trimmer.jpg",
      location: "Burnaby",
      availability: "Available",
      user_id: 2,
      email: "user2@gmail.com",
      address: "456 Oak St",
      created_at: new Date('2023-10-27T14:30:00'),
      listing_weight: "1500 grams",
      listing_material: "Metal",
      listing_borrow_price: "10.00",
    },
    {
      listing_id: 7,
      listing_name: "Portable Bike Repair Kit",
      category_id: 2, // Tools & Appliances
      image: "bike_repair_kit.jpg",
      location: "New Westminster",
      availability: "Available",
      user_id: 6,
      email: "user6@gmail.com",
      address: "101 Elm St",
      created_at: new Date('2023-10-28T16:45:00'),
      listing_weight: "300 grams",
      listing_material: "Metal",
      listing_borrow_price: "4.00",
    },
    {
      listing_id: 8,
      listing_name: "Recycled Paper Party Decorations",
      category_id: 4, // Party Supplies
      image: "party_decorations.jpg",
      location: "Burnaby",
      availability: "Available",
      user_id: 8,
      email: "user8@gmail.com",
      address: "345 Pine St",
      created_at: new Date('2023-10-29T18:00:00'),
      listing_weight: "200 grams",
      listing_material: "Paper",
      listing_borrow_price: "6.00",
    },
    {
      listing_id: 9,
      listing_name: "Electric Car Charging Adapter",
      category_id: 2, // Tools & Appliances
      image: "charging_adapter.jpg",
      location: "Surrey",
      availability: "Available",
      user_id: 9,
      email: "user9@gmail.com",
      address: "456 Cedar St",
      created_at: new Date('2023-10-30T20:15:00'),
      listing_weight: "400 grams",
      listing_material: "Plastic",
      listing_borrow_price: "7.50",
    },
    {
      listing_id: 10,
      listing_name: "Fast Fashion Denim Jeans",
      category_id: 6, // Clothings & Jewellery
      image: "denim_jeans.jpg",
      location: "Coquitlam",
      availability: "Available",
      user_id: 11,
      email: "user14@gmail.com",
      address: "901 Pine St",
      created_at: new Date('2023-10-31T22:30:00'),
      listing_weight: "1 kg",
      listing_material: "Denim",
      listing_borrow_price: "20.00",
    },
    {
      listing_id: 11,
      listing_name: "High-Powered Electric Drill",
      category_id: 2, // Tools & Appliances
      image: "electric_drill.jpg",
      location: "Surrey",
      availability: "Available",
      user_id: 10,
      email: "user15@gmail.com",
      address: "912 Cedar St",
      created_at: new Date('2023-11-01T08:45:00'),
      listing_weight: "5 kg",
      listing_material: "Metal, Plastic",
      listing_borrow_price: "12.00",
    },
    {
      listing_id: 12,
      listing_name: "Disposable BBQ Grill",
      category_id: 3, // Outdoor & Adventure
      image: "disposable_bbq_grill.jpg",
      location: "Surrey",
      availability: "Available",
      user_id: 13,
      email: "user18@gmail.com",
      address: "345 Pine St",
      created_at: new Date('2023-11-02T10:00:00'),
      listing_weight: "5 kg",
      listing_material: "Metal, Charcoal",
      listing_borrow_price: "10.00",
    },
    {
      listing_id: 13,
      listing_name: "Gas-Guzzling Power Generator",
      category_id: 2, // Tools & Appliances
      image: "power_generator.jpg",
      location: "Richmond",
      availability: "Available",
      user_id: 12,
      email: "user17@gmail.com",
      address: "234 Birch St",
      created_at: new Date('2023-11-03T12:15:00'),
      listing_weight: "15 kg",
      listing_material: "Metal, Plastic",
      listing_borrow_price: "25.00",
    },
    {
      listing_id: 14,
      listing_name: "Single-Use Plastic Party Supplies",
      category_id: 4, //Party Supplies
      image: "plastic_party_supplies.jpg",
      location: "Vancouver",
      availability: "Available",
      user_id: 11,
      email: "user16@gmail.com",
      address: "123 Oak St",
      created_at: new Date('2023-11-04T14:30:00'),
      listing_weight: "2 kg",
      listing_material: "Plastic",
      listing_borrow_price: "8.00",
    },
  ]);
};