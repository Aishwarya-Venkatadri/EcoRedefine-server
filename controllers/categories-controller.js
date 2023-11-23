const knex = require('knex');
const knexFile = require('../knexfile.js');

const db = knex(knexFile);

const index = async(_req, res)=>{
    try{
        const data = await db("categories");
        res.status(200).json(data);
    }catch{
        res.status(400).send(`Error retrieving categories: ${err}`);
    }
};

const listings = async (req, res) => {
    try {
        const categoryID = req.params.id; 

        const category = await db("categories")
            .where({ category_id: categoryID })
            .first();

        if (!category) {
            return res.status(404).json({ error: 'Category not found' });
        }

        const listings = await db("listings")
            .where({ category_id: categoryID })
            .select('*');

        res.json({ category, listings });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    index,
    listings
  };