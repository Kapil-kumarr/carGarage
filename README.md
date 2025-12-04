# AutoCare Garage - Next.js Landing Page

A modern, responsive landing page for a car garage business built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- ✨ Modern, clean design with automotive theme (black, yellow, metallic)
- 📱 Fully responsive and mobile-friendly
- 🎨 Smooth animations with Framer Motion
- 📧 Contact form with email confirmation using Nodemailer
- 🚀 Built with Next.js 14 App Router
- 💅 Styled with Tailwind CSS
- 📝 TypeScript for type safety

## Sections

1. **Hero Section** - Bold headline with garage image and CTA buttons
2. **Services Section** - Car Repair, Detailing, Tyre Replacement, Breakdown Help, Periodic Service
3. **Testimonials** - Customer reviews and ratings
4. **Contact Form** - Name, email, phone, message fields with email confirmation
5. **Footer** - Address, phone, social links

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Gmail account (or other SMTP service) for email functionality

## Installation

1. Clone or download this project

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory (copy from `.env.example`):
```bash
cp .env.example .env
```

4. Configure your environment variables in `.env`:
```env
# Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
SMTP_FROM=your-email@gmail.com

# Garage Information
GARAGE_NAME=AutoCare Garage
GARAGE_EMAIL=info@autocaregarage.com
GARAGE_PHONE=(555) 123-4567
GARAGE_ADDRESS=123 Main Street, Your City, ST 12345
```

## Gmail Setup (for email functionality)

To use Gmail SMTP:

1. Go to your Google Account settings
2. Enable 2-Step Verification
3. Generate an App Password:
   - Go to Security → 2-Step Verification → App passwords
   - Select "Mail" and your device
   - Copy the generated 16-character password
4. Use this app password in your `.env` file as `SMTP_PASSWORD`

## Running the Project

### Development Mode
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
npm run build
npm start
```

## Project Structure

```
autocare-garage/
├── app/
│   ├── api/
│   │   └── sendEmail/
│   │       └── route.ts          # Email API endpoint
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Home page
├── components/
│   ├── Hero.tsx                  # Hero section
│   ├── Services.tsx              # Services section
│   ├── Testimonials.tsx          # Testimonials section
│   ├── ContactForm.tsx           # Contact form
│   └── Footer.tsx                # Footer
├── .env.example                  # Environment variables template
├── .gitignore
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## Email Functionality

The contact form sends two emails:

1. **Confirmation email to user** - Professional HTML email thanking them for contacting
2. **Notification email to garage** - Contains all form details for follow-up

Both emails are beautifully styled with HTML templates matching the brand colors.

## Customization

### Colors
Edit `tailwind.config.ts` to change the color scheme:
```typescript
colors: {
  primary: {
    DEFAULT: '#FDB913',  // Yellow
    dark: '#E5A50F',
  },
  dark: {
    DEFAULT: '#1A1A1A',  // Black
    light: '#2D2D2D',
  },
}
```

### Content
- Update garage information in `.env`
- Modify services in `components/Services.tsx`
- Change testimonials in `components/Testimonials.tsx`
- Update hero image URL in `components/Hero.tsx`

### Fonts
The project uses Inter font. To change it, edit `app/layout.tsx`.

## Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Nodemailer** - Email sending
- **React** - UI library

## Performance

- Optimized images with Next.js Image component
- Lazy loading for animations
- Server-side rendering for fast initial load
- Minimal JavaScript bundle

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for personal and commercial use.

## Support

For issues or questions, please contact the development team.
