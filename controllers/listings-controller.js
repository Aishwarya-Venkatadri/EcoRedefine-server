const knex = require('knex');
const knexFile = require('../knexfile.js');

const db = knex(knexFile);



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
  
  // Add a new listing
  const addNewListing = async (req, res) => {
    const newListing = req.body; 
    try {
      const [listingId] = await db('listings').insert(newListing);
      const addedListing = await db('listings').where({ listing_id: listingId }).first();
      res.json(addedListing);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  // Update an existing listing
  const updateListing = async (req, res) => {
    const { id } = req.params;
    const updatedListing = req.body; 
    try {
      await db('listings').where({ listing_id: id }).update(updatedListing);
      const updatedListing = await db('listings').where({ listing_id: id }).first();
      res.json(updatedListing);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  // Delete a listing
  const deleteListing = async (req, res) => {
    const { id } = req.params;
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