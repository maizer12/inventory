Deployment Instructions

## Client

[Client](https://js-task-tau.vercel.app/)

## Server

[Server](https://js-task-fpix.onrender.com/api)

## Getting Started

### Git Clone

1. `git clone https://github.com/maizer12/js-task`
2. Create a `.env` file in the `server` folder and add the database connection key

## Using Docker

1. `docker build -t js-task .`
2. `docker run -p 5173:5173 -p 4000:4000 js-task` or `docker-compose up`

## Manual Launch

### Client

1. `cd client`
2. `npm i`
3. `npm run dev`

### Server

4. `cd server`
5. `npm i`
6. `npm run dev`

## Functionality

1. Order Management: Users can retrieve, create, and delete orders, providing a seamless workflow for order handling.
2. Product Management: Users can retrieve, create, and delete products. Each product created is linked to a specific order, ensuring a clear connection between products and their respective orders.
3. Search Optimization: A debounce mechanism is implemented on the search function to reduce server load by limiting the number of queries sent.
4. React Lazy Loading: All pages are wrapped with React Lazy for additional optimization, enabling faster application load times by loading components as they are needed.
5. Lazy Loading of Orders Table: The orders table is lazily loaded to improve performance and speed up the user interface.
6. Form Validation: All forms are validated to ensure the integrity of the data entered.
7. Product Page Filtering: Filtering options are available on the products page, simplifying the search for specific items.
8. Current Date Display: The interface includes the display of the current date.
9. Real-Time Active User Count: The number of active users is displayed in real-time, fostering an interactive and dynamic user experience.
10. Multi-Language Support: The application supports two languages, Ukrainian and English, to cater to a diverse user base.
11. Loaders for Each Loading Process: Loaders are implemented for every loading operation to enhance the user experience by providing visual feedback.
12. File Upload Capability: Users have the ability to upload files, adding to the functionality and flexibility of the application.

## Client Technologies

- "@reduxjs/toolkit": "^2.2.3"
- "axios": "^1.6.8"
- "bootstrap": "^5.3.3"
- "classnames": "^2.5.1"
- "framer-motion": "^11.0.25"
- "i18next": "^23.10.1"
- "lodash.debounce": "^4.0.8"
- "lucide": "^0.364.0"
- "lucide-react": "^0.364.0"
- "react": "^18.2.0"
- "react-bootstrap": "^2.10.2"
- "react-datepicker": "^6.6.0"
- "react-dom": "^18.2.0"
- "react-hook-form": "^7.51.2"
- "react-i18next": "^14.1.0"
- "react-redux": "^9.1.0"
- "react-router-dom": "^6.22.3"
- "sass": "^1.74.1"
- "socket.io-client": "^4.7.5"

## Server Technologies

- "cors": "^2.8.5"
- "dotenv": "^16.4.5"
- "express": "^4.18.3"
- "mongoose": "^8.2.0"
- "multer": "^1.4.5-lts.1"
- "nodemon": "^3.1.0"
- "socket.io": "^4.7.5"
