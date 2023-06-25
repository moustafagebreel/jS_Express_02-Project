import bcrypt from 'bcryptjs';


import jwt from'jsonwebtoken';


 const users = [];
 const secretKey = '123';
export const login =(req, res) => {
  const { email, password } = req.body;

  // Validate the request
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  // Find the user by email
  const user = users.find((user) => user.email === email);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  // Check the password
  if (!bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ error: 'Invalid password' });
  }

  // Generate and return the token
  const token = jwt.sign({ email: user.email }, secretKey);
  res.json({ email: user.email, password: user.password, token });
};