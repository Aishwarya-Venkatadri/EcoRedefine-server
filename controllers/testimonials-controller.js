const knex = require('knex');
const knexFile = require('../knexfile.js');
const db = knex(knexFile);

// Validation function for add
const isValidAdd = (data) => {
  // Ensure that all required fields are present and have valid values
  return (
    data &&
    typeof data.user_id === 'number' &&
    typeof data.testimony === 'string' &&
    typeof data.stars === 'number' &&
    typeof data.listing_id === 'number'
  );
};

// Validation function for testimonial ID
const isValidId = (id) => {
  // Check if id is a non-empty string or a positive integer
  const isValid =
    typeof id === 'string' &&
    id.trim() !== '' &&
    !isNaN(id) &&
    parseInt(id) > 0;

  return isValid;
};

// Get all testimonials
const getAllTestimonials = async (_req, res) => {
  try {
    const testimonials = await db.select('*').from('testimony');
    res.json(testimonials);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get testimonial details by ID
const getTestimonialById = async (req, res) => {
  const { id } = req.params;
  try {
    if (!isValidId(id)) {
      return res.status(400).json({ error: 'Invalid ID for getting the testimonial' });
    }

    const testimonial = await db('testimony').where({ id }).first();
    if (!testimonial) {
      return res.status(404).json({ error: 'Testimonial not found' });
    }

    res.json(testimonial);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Add a new testimonial
const addNewTestimonial = async (req, res) => {
  const newTestimonial = req.body;

  if (!isValidAdd(newTestimonial)) {
    return res.status(400).json({ error: 'Invalid data for adding a new testimonial' });
  }

  try {
    const [testimonialId] = await db('testimony').insert(newTestimonial);
    const addedTestimonial = await db('testimony').where({ id: testimonialId }).first();
    res.json(addedTestimonial);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete a testimonial
const deleteTestimonial = async (req, res) => {
  const { id } = req.params;

  if (!isValidId(id)) {
    return res.status(400).json({ error: 'Invalid ID for deleting the testimonial' });
  }

  try {
    const deletedTestimonial = await db('testimony').where({ id }).first();
    await db('testimony').where({ id }).del();
    res.json(deletedTestimonial);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getAllTestimonials,
  getTestimonialById,
  addNewTestimonial,
  deleteTestimonial,
};
