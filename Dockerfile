# Выбираем базовый образ с нужной версией Node.js
FROM node:20.12.1

# Устанавливаем рабочую директорию для сервера
WORKDIR /usr/src/app/server
# Копируем файлы сервера и устанавливаем зависимости
COPY server/package*.json ./
RUN npm install
COPY server/ .

# Устанавливаем рабочую директорию для клиента
WORKDIR /usr/src/app/client
# Копируем файлы клиента и устанавливаем зависимости
COPY client/package*.json ./
RUN npm install
COPY client/ .

# Открываем порты, если это необходимо
# Например, если клиент работает на 5173 и сервер на 4000
EXPOSE 5173
EXPOSE 4000

# Устанавливаем рабочую директорию для старта приложения
WORKDIR /usr/src/app

# Копируем скрипт запуска и прочие файлы на верхний уровень
COPY .gitignore .
COPY .prettierrc.json .
COPY start.sh .

# Устанавливаем права выполнения для скрипта запуска
RUN chmod +x start.sh

# Запускаем сервер и клиент с помощью скрипта
CMD ["./start.sh"]
