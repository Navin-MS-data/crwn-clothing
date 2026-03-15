require('dotenv').config();

const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
const PORT = 5001;

app.use(express.json());

// Allow requests from CRA dev server
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

app.post('/api/create-payment-intent', async (req, res) => {
  const { amount } = req.body;

  if (!amount || amount <= 0) {
    return res.status(400).json({ error: 'Invalid amount' });
  }

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      payment_method_types: ['card'],
    });

    return res.status(200).json({ paymentIntent });
  } catch (error) {
    console.error('Stripe error:', error.message);
    return res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`API server running at http://localhost:${PORT}`);
  console.log(
    `Stripe key loaded: ${process.env.STRIPE_SECRET_KEY ? 'YES ✓' : 'NO ✗ – check your .env file'}`
  );
});
