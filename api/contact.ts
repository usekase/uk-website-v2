import type { VercelRequest, VercelResponse } from '@vercel/node';
import formData from 'form-data';
import Mailgun from 'mailgun.js';

// Type definitions for the request body
interface ContactFormData {
  name: string;
  company: string;
  role: string;
  objective: string;
  timeline: string;
}

// Initialize Mailgun client
const mailgun = new Mailgun(formData);

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method not allowed. Use POST.'
    });
  }

  // Check for required environment variables
  const apiKey = process.env.MAILGUN_API_KEY;
  const domain = process.env.MAILGUN_DOMAIN;
  const recipientEmail = process.env.RECIPIENT_EMAIL;

  if (!apiKey || !domain || !recipientEmail) {
    console.error('Missing environment variables');
    return res.status(500).json({
      success: false,
      message: 'Server configuration error. Please contact support.'
    });
  }

  try {
    // Parse and validate request body
    const { name, company, role, objective, timeline } = req.body as ContactFormData;

    // Validate required fields
    const missingFields: string[] = [];
    if (!name?.trim()) missingFields.push('name');
    if (!company?.trim()) missingFields.push('company');
    if (!role?.trim()) missingFields.push('role');
    if (!objective?.trim()) missingFields.push('objective');
    if (!timeline?.trim()) missingFields.push('timeline');

    if (missingFields.length > 0) {
      return res.status(400).json({
        success: false,
        message: `Missing required fields: ${missingFields.join(', ')}`
      });
    }

    // Initialize Mailgun client with API key
    const mg = mailgun.client({
      username: 'api',
      key: apiKey
    });

    // Send email using Mailgun template
    const messageData = {
      from: `UseKase Contact Form <noreply@${domain}>`,
      to: recipientEmail,
      subject: `New Contact Form Submission from ${name}`,
      template: 'contact-us',
      'h:X-Mailgun-Variables': JSON.stringify({
        name: name.trim(),
        company: company.trim(),
        role: role.trim(),
        objective: objective.trim(),
        timeline: timeline.trim()
      })
    };

    // Send the email
    const response = await mg.messages.create(domain, messageData);

    console.log('Email sent successfully:', response.id);

    return res.status(200).json({
      success: true,
      message: 'Thank you for contacting us. We will get back to you soon!'
    });

  } catch (error) {
    console.error('Error sending email:', error);

    // Handle specific Mailgun errors
    if (error instanceof Error) {
      return res.status(500).json({
        success: false,
        message: 'Failed to send message. Please try again later.',
        error: process.env.NODE_ENV === 'development' ? error.message : undefined
      });
    }

    return res.status(500).json({
      success: false,
      message: 'An unexpected error occurred. Please try again later.'
    });
  }
}
