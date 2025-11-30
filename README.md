# Creoflow

> A modern platform empowering creators to receive support from their community through seamless donations and subscriptions.

[![Next.js](https://img.shields.io/badge/Next.js-14.0-black?style=flat&logo=next.js)](https://nextjs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-7.0-green?style=flat&logo=mongodb)](https://www.mongodb.com/)
[![Razorpay](https://img.shields.io/badge/Razorpay-Payment-blue?style=flat)](https://razorpay.com/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [API Routes](#api-routes)
- [Authentication Flow](#authentication-flow)
- [Payment Flow](#payment-flow)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## 🎯 About

Creoflow is a full-stack web application that connects creators with their supporters. Built with modern web technologies, it provides a seamless platform for content creators to receive financial support through one-time donations or recurring subscriptions. Whether you're an artist, musician, writer, or developer, Creoflow helps you monetize your passion.

## ✨ Features

- **User Authentication** - Secure sign-up and login with NextAuth.js supporting multiple providers
- **Creator Profiles** - Customizable creator pages with bio, social links, and content showcase
- **Flexible Donations** - Support creators with one-time payments or recurring subscriptions
- **Payment Integration** - Secure payment processing through Razorpay
- **Dashboard Analytics** - Track earnings, supporters, and engagement metrics
- **Supporter Management** - View and manage your supporters with detailed insights
- **Responsive Design** - Fully responsive UI that works seamlessly across all devices
- **Search & Discovery** - Find and explore creators across different categories
- **Real-time Updates** - Live notifications for new supporters and payments
- **Withdrawal System** - Easy withdrawal of earnings to bank accounts

## 🛠 Tech Stack

### Frontend
- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[React 18](https://react.dev/)** - UI library for building interactive interfaces
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework

### Backend
- **[Next.js API Routes](https://nextjs.org/docs/api-routes/introduction)** - Serverless API endpoints
- **[MongoDB](https://www.mongodb.com/)** - NoSQL database for data storage
- **[Mongoose](https://mongoosejs.com/)** - MongoDB object modeling for Node.js

### Authentication & Payments
- **[NextAuth.js](https://next-auth.js.org/)** - Authentication for Next.js applications
- **[Razorpay](https://razorpay.com/)** - Payment gateway integration

### Development Tools
- **[JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)**  - Type safety and better developer experience
- **[ESLint](https://eslint.org/)** - Code linting and quality checks

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.x or higher)
- **npm** or **yarn** or **pnpm**
- **MongoDB** (local installation or MongoDB Atlas account)
- **Git**

### Installation

1. **Clone the repository**

    ```bash
    git clone https://github.com/ansh-tyagi11/Creoflow.git
    cd Creoflow
    ```

2. **Install dependencies**

     ```bash
     npm install
     # or
     yarn install
     # or
     pnpm install
     ```

3. **Set up environment variables**

    Create a `.env.local` file in the root directory and add the required environment variables (see [Environment Variables](#environment-variables) section).

4. **Run the development server**

     ```bash
     npm run dev
     # or
     yarn dev
     # or
     pnpm dev
     ```

5. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

### Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
    # Application
     NEXTAUTH_URL=http://localhost:3000
     
     # MongoDB
     MONGODB_URI=mongodb://localhost:27017/Creoflow
     
     # OAuth Providers 
     GOOGLE_ID=your-google-client-id
     GOOGLE_SECRET=your-google-client-secret
     
     GITHUB_ID=your-github-client-id
     GITHUB_SECRET=your-github-client-secret
     
     # Razorpay
     NEXT_PUBLIC_RAZORPAY_KEY_ID=your-razorpay-key-id
     NEXT_PUBLIC_RAZORPAY_KEY_SECRET=your-razorpay-key-secret
```

## 📁 Project Structure

```
Creoflow/
├── .next/                        # Next.js build output (auto-generated)
├── actions/                      # Server Actions
│   └── useractions.js            # User-related server actions
├── app/                          # Next.js App Router
│   ├── [username]/               # Dynamic creator profile pages
│   │   └── page.js               # Creator profile view
│   ├── about/                    # About page
│   │   └── page.js
│   ├── api/                      # API routes
│   │   ├── auth/                 # NextAuth configuration
│   │   │   └── [...nextauth]/
│   │   │       └── route.js      # NextAuth API handler
│   │   └── razorpay/             # Razorpay payment routes
│   ├── dashboard/                # Creator dashboard
│   │   └── page.js               # Dashboard main page
│   ├── login/                    # Login page
│   ├── globals.css               # Global styles
│   ├── layout.js                 # Root layout
│   └── page.js                   # Homepage
├── components/                   # React components
│   ├── Dashboard.css             # Dashboard styles
│   ├── Dashboard.js              # Dashboard component
│   ├── Footer.js                 # Footer component
│   ├── Navbar.css                # Navbar styles
│   ├── Navbar.js                 # Navigation component
│   ├── PaymentPage.js            # Payment interface
│   └── SessionWrapper.js         # Session provider wrapper
├── db/                           # Database configuration
│   └── connectDB.js              # MongoDB connection setup
├── models/                       # Mongoose schemas
│   ├── Payment.js                # Payment model
│   └── User.js                   # User model
├── node_modules/                 # Dependencies (auto-generated)
├── public/                       # Static assets
│   ├── favicon.ico               # Site favicon
│   └── logo.png                  # Application logo
├── .env.local                    # Environment variables (not in repo)
├── .gitignore                    # Git ignore rules
├── jsconfig.json                 # JavaScript configuration
├── next.config.mjs               # Next.js configuration
├── package-lock.json             # Dependency lock file
├── package.json                  # Project dependencies
├── postcss.config.mjs            # PostCSS configuration
└── README.md                     # Project documentation
```

## 🔌 API Routes

### Authentication

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user
- `GET /api/auth/session` - Get current session

### Creators

- `GET /api/creators` - Get all creators
- `GET /api/creators/[username]` - Get creator by username
- `PUT /api/creators/profile` - Update creator profile
- `GET /api/creators/stats` - Get creator statistics

### Payments

- `POST /api/razorpay` - Handle Razorpay payment operations
  - Create orders
  - Verify payment signatures
  - Process payment confirmations

## 🔐 Authentication Flow

1. **User Registration/Login**
   - User visits `/login` or `/register`
   - Chooses authentication method (credentials or OAuth)
   - NextAuth processes the authentication
   - Session is created and stored

2. **Session Management**
   - JWT tokens stored securely in HTTP-only cookies
   - Session validated on each protected route
   - Automatic token refresh on expiration

3. **Protected Routes**
   - Middleware checks authentication status
   - Redirects to login if unauthenticated
   - Provides user context to authenticated pages

   ```javascript
   // Example middleware protection
   export { default } from "next-auth/middleware"
   
   export const config = {
     matcher: ["/dashboard/:path*", "/settings/:path*"]
   }
   ```

## 💳 Payment Flow

1. **Initiate Payment**
   - User selects donation amount or subscription plan
   - Frontend sends request to `/api/payments/create-order`
   - Server creates Razorpay order and returns order ID

2. **Process Payment**
   - Razorpay checkout modal opens
   - User completes payment through Razorpay
   - Razorpay returns payment details

4. **Payment Confirmation**
   - Frontend sends payment details to `/api/razorpay`
   - Server verifies Razorpay signature
   - Payment record created in database
   - Creator and supporter records updated
   - Success confirmation displayed to user

```javascript
// Payment creation example
const order = await razorpay.orders.create({
  amount: amount * 100, // Amount in paise
  currency: 'INR',
});
```

## 🤝 Contributing

We welcome contributions to Creoflow! Here's how you can help:

1. **Fork the repository**

2. **Create a feature branch**

```bash
git checkout -b feature/amazing-feature
```

3. **Make your changes**

   - Follow the existing code style
   - Write meaningful commit messages
   - Add tests if applicable
   - Update documentation as needed

4. **Commit your changes**

```bash
git commit -m "Add some amazing feature"
```

5. **Push to your branch**

```bash
git push origin feature/amazing-feature
```

6. **Open a Pull Request**

   - Provide a clear description of changes
   - Reference any related issues
   - Wait for review and address feedback

### Code Style

- Use JavaScript for type safety
- Follow ESLint and Prettier configurations
- Write descriptive variable and function names
- Add comments for complex logic
- Keep components small and focused

### Reporting Issues

Found a bug or have a feature request? Please [open an issue](https://github.com/ansh-tyagi11/Creoflow/issues) with:

- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable
- Your environment details

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2024 Creoflow

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
```

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Vercel](https://vercel.com/) for hosting
- [Razorpay](https://razorpay.com/) for payment processing
- [MongoDB](https://www.mongodb.com/) for database solutions
- All our contributors and supporters

 ---

<p align="center">Made with ❤️ by the Creoflow Team</p>
<p align="center">⭐ Star us on GitHub if you find this project useful!</p>