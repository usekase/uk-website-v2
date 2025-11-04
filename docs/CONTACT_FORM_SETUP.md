# Contact Form Setup Guide

This guide will help you set up the contact form with Mailgun email integration on Vercel.

## Prerequisites

1. A Mailgun account ([Sign up here](https://signup.mailgun.com/new/signup))
2. A Vercel account ([Sign up here](https://vercel.com/signup))
3. A verified domain in Mailgun (or use the sandbox domain for testing)

## Step 1: Configure Mailgun

### Get Your API Key

1. Log in to [Mailgun](https://app.mailgun.com)
2. Go to **Account Settings** → **API Keys**
3. Copy your **Private API key**

### Set Up Your Domain

1. Go to **Sending** → **Domains**
2. Either use the sandbox domain (for testing) or add your own domain
3. Note your domain name (e.g., `sandbox123.mailgun.org` or `mg.yourdomain.com`)

### Create the Email Template

1. Go to **Sending** → **Templates**
2. Click **Create Template**
3. Template name: `contact-us`
4. Template subject: `New Contact Form Submission from {{name}}`
5. Template content (example):

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #cc33ab; color: white; padding: 20px; text-align: center; }
        .content { background: #f9f9f9; padding: 20px; margin-top: 20px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #555; }
        .value { margin-top: 5px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>New Contact Form Submission</h1>
        </div>
        <div class="content">
            <div class="field">
                <div class="label">Name:</div>
                <div class="value">{{name}}</div>
            </div>
            <div class="field">
                <div class="label">Company:</div>
                <div class="value">{{company}}</div>
            </div>
            <div class="field">
                <div class="label">Role:</div>
                <div class="value">{{role}}</div>
            </div>
            <div class="field">
                <div class="label">What they're trying to achieve:</div>
                <div class="value">{{objective}}</div>
            </div>
            <div class="field">
                <div class="label">Timeline:</div>
                <div class="value">{{timeline}}</div>
            </div>
        </div>
    </div>
</body>
</html>
```

6. Click **Create Template**

## Step 2: Configure Environment Variables Locally

1. Open the `.env.local` file in the project root
2. Replace the placeholder values:

```env
MAILGUN_API_KEY=your_actual_mailgun_api_key
MAILGUN_DOMAIN=your_mailgun_domain
RECIPIENT_EMAIL=your_email@example.com
```

## Step 3: Test Locally

### Important: Local Development with API

The `/api/contact` endpoint is a Vercel serverless function that only works on Vercel or with Vercel CLI.

**Option 1: Test with Vercel Dev (Recommended)**

This runs both your frontend AND the API functions locally:

```bash
npm run dev:api
```

This will start Vercel's dev server which:
- Runs your Vite app
- Runs your serverless functions at `/api/*`
- Usually available at `http://localhost:3000`

**Option 2: Frontend Only (Form won't submit)**

If you just want to test the UI without email functionality:

```bash
npm run dev
```

Available at `http://localhost:5173` (API calls will fail with 404)

### Testing the Contact Form

1. Start the development server with API support:
   ```bash
   npm run dev:api
   ```

2. Navigate to `http://localhost:3000/contact-us` (note the port!)

3. Fill out and submit the form

4. Check your email inbox (the one you set in `RECIPIENT_EMAIL`)

## Step 4: Deploy to Vercel

### Connect Your Repository

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **Add New Project**
3. Import your Git repository
4. Vercel will auto-detect the Vite configuration

### Add Environment Variables in Vercel

1. In your Vercel project, go to **Settings** → **Environment Variables**
2. Add the following variables:
   - `MAILGUN_API_KEY`: Your Mailgun private API key
   - `MAILGUN_DOMAIN`: Your Mailgun domain
   - `RECIPIENT_EMAIL`: The email address to receive submissions

3. Make sure to add them for all environments (Production, Preview, Development)

### Deploy

1. Click **Deploy**
2. Wait for the build to complete
3. Your contact form will be live at `https://your-app.vercel.app/contact-us`

## Step 5: Verify the Setup

1. Visit your deployed site
2. Navigate to `/contact-us`
3. Submit a test form
4. Check your email inbox

## Troubleshooting

### Form submission fails with 500 error

- **Check environment variables**: Make sure all three variables are set correctly in Vercel
- **Check Mailgun logs**: Go to Mailgun → Sending → Logs to see if the email was sent
- **Check template name**: Ensure the template is named exactly `contact-us` in Mailgun

### Email not received

- **Check spam folder**: Mailgun emails might end up in spam
- **Verify recipient email**: Make sure `RECIPIENT_EMAIL` is correct
- **Check Mailgun sending limits**: Sandbox domains can only send to authorized recipients
- **Domain verification**: If using a custom domain, make sure it's verified in Mailgun

### API route not working

- **Check Vercel logs**: Go to your Vercel project → Deployments → Click on latest deployment → View Function Logs
- **Verify API route**: Make sure `/api/contact.ts` exists in your repository
- **Check vercel.json**: Ensure the rewrites are configured correctly

### CORS issues

- The API route is on the same domain as your frontend, so CORS shouldn't be an issue
- If you're testing from a different origin, you may need to add CORS headers to the API route

## Files Created/Modified

- `api/contact.ts` - Serverless function for handling form submissions
- `src/pages/ContactUs.tsx` - Contact form page component
- `src/components/ui/textarea.tsx` - Textarea component
- `src/App.tsx` - Added `/contact-us` route
- `.env.local` - Local environment variables (not committed to Git)
- `.gitignore` - Updated to exclude environment files
- `vercel.json` - Vercel configuration for routing
- `package.json` - Added mailgun.js, form-data, and @vercel/node dependencies

## Security Notes

- Never commit `.env.local` or any file containing API keys to Git
- The `.gitignore` file is configured to exclude all `.env` files
- API keys should only be stored in Vercel's environment variables for production
- The API route validates all input fields before sending emails

## Additional Configuration

### Custom Email Domain

To use your own domain (e.g., `mail@yourdomain.com`) instead of a Mailgun domain:

1. Add your domain in Mailgun: **Sending** → **Domains** → **Add New Domain**
2. Follow Mailgun's instructions to add DNS records (SPF, DKIM, MX)
3. Wait for verification (can take 24-48 hours)
4. Update `MAILGUN_DOMAIN` in your environment variables

### Auto-responder

To send an automatic reply to users who submit the form:

1. Create a second Mailgun template for the auto-response
2. Modify `api/contact.ts` to send two emails:
   - One to you (the business)
   - One to the user (auto-response)

### Rate Limiting

To prevent abuse, consider adding rate limiting to the API route. You can use:
- Vercel's Edge Config for simple rate limiting
- External services like Upstash Redis
- A middleware library like `express-rate-limit`

## Support

For issues with:
- **Mailgun**: [Mailgun Support](https://help.mailgun.com/)
- **Vercel**: [Vercel Support](https://vercel.com/support)
- **This implementation**: Check the API route logs in Vercel for error messages
