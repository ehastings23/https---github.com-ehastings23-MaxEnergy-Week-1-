const express = require('express');
const router = express.Router();
const db = require('../db');

// Contact Form Route
router.post('/contact', (req, res) => {
    const { fullName, email, phone, message } = req.body;

    if (!fullName || !email || !phone || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const sql = `INSERT INTO contacts (fullName, email, phone, message) VALUES (?, ?, ?, ?)`;
    db.query(sql, [fullName, email, phone, message], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: 'Message sent successfully!' });
    });
});

module.exports = router;
