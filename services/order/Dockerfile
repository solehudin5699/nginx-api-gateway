FROM node:alpine3.18

WORKDIR /app
COPY package*.json .

RUN npm install -g nodemon
RUN npm install

COPY . .

ENTRYPOINT [ "npm", "start" ]

EXPOSE 3000