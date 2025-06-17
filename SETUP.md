# Breva Health Website Setup Guide

**All Rights Reserved © 2025 Breva Health**

This guide will help you set up the email functionality for the Breva Health website.

## 📧 Email Form Configuration

The website uses **Formspree** for email form submissions. This is a reliable, free service that works perfectly with static websites.

### Option 1: Use Formspree (Recommended)

1. **Create a Formspree Account**
   - Go to [formspree.io](https://formspree.io/)
   - Sign up for a free account
   - Create a new form

2. **Get Your Form Endpoint**
   - After creating a form, you'll get an endpoint like: `https://formspree.io/f/YOUR_FORM_ID`
   - Copy this endpoint

3. **Update the Form Action**
   - Open `index.html`
   - Find line with `action="https://formspree.io/f/xkgnqbko"`
   - Replace `xkgnqbko` with your actual form ID

4. **Configure Email Settings**
   - In your Formspree dashboard, set your email address
   - Configure any additional settings (auto-responders, spam protection, etc.)

### Option 2: Use EmailJS

If you prefer EmailJS:

1. **Create EmailJS Account**
   - Go to [emailjs.com](https://www.emailjs.com/)
   - Create account and service

2. **Update JavaScript**
   ```javascript
   // Replace the fetch call in script.js with EmailJS
   emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
   ```

3. **Add EmailJS Script**
   ```html
   <!-- Add to index.html before closing </body> -->
   <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
   ```

### Option 3: Use Netlify Forms

If deploying on Netlify:

1. **Add Netlify Form Attributes**
   ```html
   <form class="email-form" name="contact" method="POST" data-netlify="true">
   ```

2. **Add Hidden Field**
   ```html
   <input type="hidden" name="form-name" value="contact">
   ```

## 🚀 Quick Setup (Current Configuration)

The website is currently configured with a working Formspree endpoint. To use it immediately:

1. **Deploy the website** to any hosting service
2. **Test the form** - it should work out of the box
3. **Replace the form ID** with your own when ready

## 🔧 Development Setup

1. **Local Testing**
   ```bash
   # Serve the website locally
   python3 -m http.server 8000
   # Visit http://localhost:8000
   ```

2. **Form Testing**
   - Fill out the form with valid data
   - Check for proper validation messages
   - Verify success/error notifications appear

## ✅ Form Validation Features

The form includes comprehensive validation:

- **Required Fields**: First Name, Last Name, Email
- **Email Format**: Proper email regex validation
- **Real-time Feedback**: Validation as you type
- **Error Messages**: Clear, helpful error text
- **Success States**: Visual confirmation of successful submission
- **Loading States**: Shows "Sending..." during submission

## 🎨 Form Features

- **Floating Labels**: Modern animated labels
- **Glassmorphism Design**: Beautiful glass-effect styling
- **Mobile Responsive**: Works perfectly on all devices
- **Accessibility**: WCAG compliant with proper ARIA labels
- **Smooth Animations**: Professional micro-interactions
- **Toast Notifications**: Success/error messages with auto-dismiss

## 🔒 Security Features

- **Client-side Validation**: Prevents invalid submissions
- **Spam Protection**: Formspree includes built-in spam filtering
- **CSRF Protection**: Form tokens prevent cross-site attacks
- **Rate Limiting**: Prevents form abuse

## 📱 Mobile Experience

- **Touch-friendly**: Large tap targets for mobile users
- **Responsive Layout**: Single-column on mobile
- **Keyboard Support**: Proper focus management
- **Visual Feedback**: Clear success/error states

## 🚀 Deployment Options

The website can be deployed to:

- **Netlify** (with built-in form handling)
- **Vercel** 
- **GitHub Pages**
- **AWS S3 + CloudFront**
- **Any static hosting service**

## 🔧 Customization

### Changing Colors
Update CSS custom properties in `styles.css`:
```css
:root {
  --primary: #8B5CF6; /* Purple */
  --accent: #A78BFA; /* Light purple */
  --blue: #6366F1; /* Indigo */
}
```

### Adding Fields
1. Add HTML input in `index.html`
2. Update validation in `script.js`
3. Style with existing CSS classes

### Modifying Messages
Update notification messages in the `showNotification()` function in `script.js`.

## 📞 Support

For technical issues:
- Check browser console for error messages
- Verify form endpoint is correct
- Test with different email addresses
- Check Formspree dashboard for submissions

## 🏁 Final Checklist

- [ ] Form endpoint configured
- [ ] Email address set in service dashboard
- [ ] Website deployed
- [ ] Form tested with valid data
- [ ] Form tested with invalid data
- [ ] Mobile experience verified
- [ ] Success notifications working
- [ ] Error notifications working

Your Breva Health website is now ready with fully functional email capabilities! 🎉 