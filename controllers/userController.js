const userService = require('../services/userServices');

async function createUser(req, res) {
  try {
    const userData = req.body;
    const result = await userService.createUser(userData);
    res.status(201).json({ message: 'User created successfully', userId: result.insertId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred', error: error.message });
  }
}

module.exports = {
  createUser,
};
