const knex = require('knex');
const jwt = require('jsonwebtoken');
const knexFile = require('../knexfile.js');
const db = knex(knexFile);

const login = async (req, res) => {
    const { user_name, password } = req.body;
  
    // match user_name and password against the database
    const user = await db('users').where({ user_name, password }).first();
  
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
  
    // Generate jwt token
    const token = jwt.sign({ userId: user.user_id }, 'your-secret-key');
  
    // Send the token as a response
    res.json({ token });
  };
  
  module.exports = { login };
  