// pages/api/auth/signup.js
import jwt from 'jsonwebtoken';

const jwtSecret = process.env.JWT_SECRET; // Define the JWT secret at the top

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    // Here you would normally save the user details to the database
    // Assuming user creation is successful, generate a JWT token

    const token = jwt.sign({ username }, jwtSecret, { expiresIn: '1h' });

    res.status(201).json({ token });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
