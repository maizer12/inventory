#!/bin/sh
# start.sh

# Запускаем сервер и клиент в фоновом режиме
cd /usr/src/app/server
npm run dev &

cd /usr/src/app/client
npm run dev &

# Ждем завершения обоих процессов
wait
