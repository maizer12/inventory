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
2. `docker-compose up`

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

1. Retrieving, creating, deleting orders
2. Retrieving, creating, deleting products
3. Each created product is linked to a specific order
4. Search + debounce to reduce load
5. For additional optimization, all pages are wrapped in React Lazy
6. Lazy loading of the orders table
7. Validation, all forms are validated
8. Filtering is available on the products page
9. Displaying the current date
10. Displaying the number of active users in real-time
11. Support for 2 languages: Ukrainian and English
12. Loaders for each loading
13. Ability to upload files

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

Інструкція з Розгортання

## Клієнт

[Client](https://js-task-tau.vercel.app/)

## Сервер

[Server](https://js-task-fpix.onrender.com/api)

## Початок роботи

### Git Clone

1. `git clone https://github.com/maizer12/js-task`
2. Створіть файл `.env` в папці `server` та додайте ключ підключення до бази даних

## Використання Docker

1. `docker build js-task`
2. `docker-compose up`

## Запуск вручну

### Клієнт

1. `cd client`
2. `npm i`
3. `npm run dev`

### Сервер

4. `cd server`
5. `npm i`
6. `npm run dev`

## Функціонал

1. Отримання, створення, видалення, замовлень
2. Отримання, створення, видалення, продуктів
3. Кожен створений продукт прив'язаний до певного замовлення
4. Пошук + дебаунс для зменшення навантаження
5. Для додаткової оптимізації усі сторінки обгорнуті у React Lazy
6. Лінива завантаження таблиці замовлень
7. Валідація, усі форми валідуються
8. На сторінці продуктів присутня фільтрація
9. Вивід поточної дати
10. Вивід кількості активних користувачів у реальному часі
11. Підтримка 2 мов: Української та Англійської
12. Лоадери для кожного завантаження
13. Можливість завантажувати файли

## Технології клієнта

- "@reduxjs/toolkit": "^2.2.3"
- "axios": "^1.6.8"
- "bootstrap": "^5.3.3"
  ... (інші технології)

## Технології сервера

- "cors": "^2.8.5"
- "dotenv": "^16.4.5"
- "express": "^4.18.3"
  ... (інші технології)

## Клієнт

[Client](https://js-task-tau.vercel.app/)

## Сервер

[Server](https://js-task-fpix.onrender.com/api)

## Початок роботи

### Git Clone

1. `git clone https://github.com/maizer12/js-task`
2. Створіть файл `.env` в папці `server` та додайте ключ підключення до бази даних

## Використання Docker

1. `docker build js-task`
2. `docker-compose up`

## Запуск вручну

### Клієнт

1. `cd client`
2. `npm i`
3. `npm run dev`

### Сервер

4. `cd server`
5. `npm i`
6. `npm run dev`

## Функціонал

1. Отримання, створення, видалення, замовлень
2. Отримання, створення, видалення, продуктів
   ... (інші пункти функціоналу)

## Технології клієнта

- "@reduxjs/toolkit": "^2.2.3"
- "axios": "^1.6.8"
- "bootstrap": "^5.3.3"
  ... (інші технології)

## Технології сервера

- "cors": "^2.8.5"
- "dotenv": "^16.4.5"
- "express": "^4.18.3"
  ... (інші технології)
- "socket.io-client": "^4.7.5"

## Технології сервера

- "cors": "^2.8.5"
- "dotenv": "^16.4.5"
- "express": "^4.18.3"
- "mongoose": "^8.2.0"
- "multer": "^1.4.5-lts.1"
- "nodemon": "^3.1.0"
- "socket.io": "^4.7.5"
