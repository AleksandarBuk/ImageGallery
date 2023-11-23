require('dotenv').config(); // First line to load environment variables
const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const port = process.env.PORT || 3001; // Default to 3001 if no port is specified in the environment

// Middleware to parse JSON bodies
app.use(express.json());

// Setup Nodemailer transport using environment variables
const transporter = nodemailer.createTransport({
  service: 'gmail', // Assuming Gmail is being used
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  }
});

app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email, // sender address from the form
    to: process.env.RECEIVER_EMAIL, // Email address to receive messages, set in your environment variables
    subject: `New message from ${name}`,
    text: `You have received a new message from ${name} (${email}): ${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Something went wrong.');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Message sent successfully.');
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
