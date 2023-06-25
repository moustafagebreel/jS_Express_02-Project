import { isValidEmail, isValidPassword } from './authenticate.js';
import bcrypt from 'bcryptjs';
const secretKey = '123';
export const users = [];
export const registration = (req, res) => {
    const { email, password, passwordRepeat } = req.body;

    // Validate the request
    if (!email || !password || !passwordRepeat) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    if (!isValidEmail(email)) {
        return res.status(400).json({ error: 'Invalid email' });
    }

    if (!isValidPassword(password)) {
        return res.status(400).json({
            error: 'Password must be 8 characters with at least 1 capital, 1 small, and 1 special character',
        });
    }

    if (password !== passwordRepeat) {
        return res.status(400).json({ error: 'Passwords do not match' });
    }

    // Check if the user already exists
    const existingUser = users.find((user) => user.email === email);
    if (existingUser) {
        return res.status(409).json({ error: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = bcrypt.hashSync(password, 10);

    // Create the new user
    const newUser = {
        email,
        password: hashedPassword,
    };

    users.push(newUser);

    res.json({ success: true });
};
