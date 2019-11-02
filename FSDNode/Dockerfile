FROM node:6
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
#RUN npm install express
EXPOSE 4000
CMD node server.js
