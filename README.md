# CRWN Clothing

A modern e-commerce application built with React, Redux, and Firebase.

## Features

- User authentication (Sign up, Sign in, Google Sign in)
- Product browsing by categories
- Shopping cart functionality
- Stripe payment integration
- Order success confirmation

## Tech Stack

- React
- Redux (with Redux Saga)
- Firebase (Authentication & Firestore)
- Stripe Payment Gateway
- Styled Components
- Netlify Functions (Serverless)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Firebase account
- Stripe account

### Installation

1. Clone the repository

```
git clone https://github.com/Navin-MS-data/crwn-clothing.git
cd crwn-clothing
```

2. Install dependencies

```
npm install
```

3. Set up environment variables

Create a `.env` file in the root directory and add your keys:

```
REACT_APP_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
STRIPE_SECRET_KEY=sk_test_your_secret_key_here
```

4. Set your Firebase config

Replace the config variable in `src/utils/firebase/firebase.utils.js` with your own config object from the Firebase dashboard.

### Running the App

For development with Stripe payment (using Netlify Functions):

```
npm run dev
```

For development without payment functionality:

```
npm start
```

### Building for Production

```
npm run build
```

## Test Card Details (Stripe)

| Card Number          | Description        |
|----------------------|--------------------|
| 4242 4242 4242 4242  | Successful payment |
| 4000 0000 0000 0002  | Card declined      |

- Expiry: Any future date
- CVC: Any 3 digits
- ZIP: Any 5 digits

## Deployment

This project is configured for deployment on Netlify. The `netlify.toml` file includes the necessary configuration for serverless functions.

## License

This project is open source and available under the MIT License.