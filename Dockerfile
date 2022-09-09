FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./
RUN npm i 

RUN npm install -g @nestjs/cli 

COPY . .

EXPOSE 3001

CMD ["npm", "start"]