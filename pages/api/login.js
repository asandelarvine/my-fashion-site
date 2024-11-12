// pages/api/auth/login.js
import jwt from 'jsonwebtoken';

const jwtSecret = process.env.JWT_SECRET; // Define the JWT secret at the top

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    // Here you would normally verify the user details with the database
    // Assuming verification is successful, generate a JWT token

    const token = jwt.sign({ username }, jwtSecret, { expiresIn: '1h' });

    res.status(200).json({ token });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
