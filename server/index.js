import babelRegister from '@babel/register';

babelRegister({
  presets: ['@babel/preset-env', '@babel/preset-react'],
});

import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import crypto from 'crypto';
import razorpay from 'razorpay';
import { Resend } from 'resend';

import { renderToStaticMarkup } from 'react-dom/server';
import React from 'react';

import {Welcome} from './email_templates/Welcome.jsx';

const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);

const instance = new razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('hello world');
});

app.get('/email', async (req, res) => {
  try {
    const emailHtml = renderToStaticMarkup(React.createElement(Welcome));

    const response = await resend.sendEmail({
      from: 'onboarding@resend.dev',
      to: 'het16491234@gmail.com',
      subject: 'Welcome Email',
      html: emailHtml,
    });

    res.json({ message: 'Email sent successfully!', status: response.status });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

app.get('/getkey', (req, res) => {
  res.send({ key: process.env.RAZORPAY_KEY_ID });
});

app.post('/checkout', (req, res) => {
  const { amount } = req.body;

  if (!amount || amount <= 0) {
    return res.status(400).json({ error: 'Invalid amount' });
  }

  const options = {
    amount: amount, // amount in the smallest currency unit (paise)
    currency: 'INR',
  };

  instance.orders.create(options, function (err, order) {
    if (err) {
      console.error('Error creating Razorpay order:', err);
      return res.status(500).json({ error: 'Error creating order' });
    }

    // Send the order details including the Razorpay key and order ID
    res.send({
      key: process.env.RAZORPAY_KEY_ID,
      amount: order.amount,
      id: order.id,
    });
    console.log(order);
  });
});

app.post('/verify', async (req, res) => {
  const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body;

  const body = razorpay_order_id + '|' + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
    .update(body.toString())
    .digest('hex');

  if (razorpay_signature === expectedSignature) {
    // Redirect to success page with the reference ID as query parameter

    // const { data, error } = await resend.emails.send({
    //   from: 'onboarding@resend.dev',
    //   to: 'het16491234@gmail.com',
    //   subject: 'Order Placed Successfully',
    //   html: Confirmation,
    // });

    // if (error) {
    //   return res.status(400).json({ error });
    // }

    res.redirect(`http://localhost:5173/paymentsuccess?reference=${razorpay_payment_id}`);
  } else {
    res.send({ status: 'error' });
  }
});

app.listen(process.env.PORT, () => {
  console.log('Server is running on port ' + process.env.PORT);
});
