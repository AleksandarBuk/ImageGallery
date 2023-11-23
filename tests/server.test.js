const request = require('supertest');
const express = require('express');
const app = express();


app.post('/send-email', (req, res) => {
  res.status(200).json({ message: 'Message sent successfully' });
});

describe('Email Sending Endpoint', () => {
  it('should send an email and return a success message', async () => {
    const response = await request(app)
      .post('/send-email')
      .send({
        name: 'Test Name',
        email: 'test@example.com',
        message: 'This is a test message.',
      });

    expect(response.statusCode).toBe(200);

    expect(response.body).toEqual({ message: 'Message sent successfully' });
  });
});

module.exports = app;
