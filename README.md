# Features

- Full featured shopping cart
- Product reviews and ratings
- Top products carousel
- Product pagination
- Product search feature
- User profile with orders
- Admin product management
- Admin user management
- Admin Order details page
- Mark orders as delivered option
- Checkout process (shipping, payment method, etc)
- PayPal / credit card integration
- Database seeder (products & users)

# Packages Used:

## Frontend -React Vite

- Bootstrap - UI framework
- React Icons - for font awesome icons
- React router dom - route management
- React router bootstrap - bootstrap support
- Axios - HTTP request
- @reduxjs/toolkit - global state management
- react-redux - react and redux binding
- react-toastify - create and display toast notifications
- paypal/react-paypal-js - paypal react package
- react-helmet-async - for page titles

## Backend -Node.js MongoDB

- Mongoose - Mongodb ODM library
- Express - node.js framework
- Express session - middleware and optional extention of express
- Bcrypt -password hashing middleware
- Cors - cross origin resource sharing middleware
- Dotenv - environment variable middleware
- Concurrency - command concurrency
- jsonwebtoken - JSON web token
- cookie-parser - parses the HTTP request to extract any cookies that come with the request
- multer - file upload middleware

### Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install
```

### Run

```

# Run frontend (:5173) & backend (:5000)
npm run dev

# Run backend only
npm run server
```

## Build & Deploy

```
# Create frontend prod build
cd frontend
npm run build
```

### Env Variables

```
NODE_ENV = development
PORT = 5000
MONGODB_URI = your mongodb uri
JWT_SECRET = 'abc123'
PAYPAL_CLIENT_ID = your paypal client id
PAGINATION_LIMIT = 8
```

### Seed Database

You can use the following commands to seed the database with some sample users and products as well as destroy all data

```
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```

```
Sample User Logins

admin@email.com (Admin)
123456

john@email.com (Customer)
123456

jane@email.com (Customer)
123456
```

---
