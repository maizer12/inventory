FROM node:20.12.1

WORKDIR /usr/src/app/server

COPY server/package*.json ./
RUN npm install
COPY server/ .


WORKDIR /usr/src/app/client

COPY client/package*.json ./
RUN npm install
COPY client/ .

EXPOSE 5173
EXPOSE 4000

WORKDIR /usr/src/app

COPY .gitignore .
COPY .prettierrc.json .
COPY start.sh .

RUN chmod +x start.sh

CMD ["./start.sh"]