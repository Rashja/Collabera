FROM node:21-alpine3.18 

WORKDIR app/frontend

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]