const knex = require('knex');
const knexFile = require('../knexfile.js');

const db = knex(knexFile);

// Validation function for add
const isValidAdd = (data) => {
  return (
    data &&
    typeof data.listing_name === 'string' &&
    typeof data.category_id === 'number' &&
    typeof data.location === 'string' &&
    typeof data.availability === 'string' &&
    typeof data.user_id === 'number' &&
    typeof data.email === 'string' &&
    typeof data.address === 'string' &&
    typeof data.listing_weight === 'string' &&
    typeof data.listing_material === 'string' &&
    (typeof data.listing_borrow_price === 'string' || typeof data.listing_borrow_price === 'number')

  );
};

// Validation function for listing ID
const isValidId = (id) => {
  const isValid =
    typeof id === 'string' &&
    id.trim() !== '' &&
    !isNaN(id) &&
    parseInt(id) > 0;

  return isValid;
};

// Get all listings
const getAllListings = async (_req, res) => {
  try {
    const listings = await db.select('*').from('listings');
    res.json(listings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get listing details by ID
const getListingById = async (req, res) => {
  const { id } = req.params;
  try {
    if (!isValidId(id)) {
      return res.status(400).json({ error: 'Invalid ID for getting the listing' });
    }

    const listing = await db('listings').where({ listing_id: id }).first();
    if (!listing) {
      return res.status(404).json({ error: 'Listing not found' });
    }

    res.json(listing);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const addNewListing = async (req, res) => {
  const defaultImage = 'default_image.jpg';
  const newListing = req.body;

  // Extract the numeric part from the category_id string using regular expression
  const numericCategoryId = newListing.category_id.match(/\d+/);

  if (numericCategoryId) {
    // Convert the numeric part to an integer
    newListing.category_id = parseInt(numericCategoryId[0]);
  } else {
    return res.status(400).json({ error: 'Invalid category_id' });
  }

  if (!newListing.image) {
    newListing.image = defaultImage;
  }

  if (!isValidAdd(newListing)) {
    return res.status(400).json({ error: 'Invalid data for adding a new listing' });
  }

  try {
    // Insert the new listing into the database
    const [listingId] = await db('listings').insert(newListing);

    // Fetch the added listing
    const addedListing = await db('listings').where({ listing_id: listingId }).first();

    // Respond with the added listing
    res.json(addedListing);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const updateListing = async (req, res) => {
  const { id } = req.params;
  const updatedListing = req.body;

  if (!isValidId(id) || !isValidAdd(updatedListing)) {
    return res.status(400).json({ error: 'Invalid data for updating the listing' });
  }

  try {
    const existingListing = await db('listings').where({ listing_id: id }).first();

    // Create an object to store updated fields
    const updatedFields = {};

  
    for (const key in updatedListing) {
      // Check if the value has changed and the key is not 'created_at'
      if (existingListing[key] !== updatedListing[key] && key !== 'created_at') {
        updatedFields[key] = updatedListing[key];
      }
    }

    // Update only the fields that have changed
    await db('listings').where({ listing_id: id }).update(updatedFields);

    // Fetch and return the updated listing
    const updatedListingResult = await db('listings').where({ listing_id: id }).first();
    res.json(updatedListingResult);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


// Delete a listing
const deleteListing = async (req, res) => {
  const { id } = req.params;

  if (!isValidId(id)) {
    return res.status(400).json({ error: 'Invalid ID for deleting the listing' });
  }

  try {
    const deletedListing = await db('listings').where({ listing_id: id }).first();
    await db('listings').where({ listing_id: id }).del();
    res.json(deletedListing);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getAllListings,
  getListingById,
  addNewListing,
  updateListing,
  deleteListing,
};
